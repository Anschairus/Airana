import { ResetPasswordDto } from './dto/reset-password.dto';
import { Request } from 'express';
import { AuthService } from './../auth/auth.service';
import { SignInAccountDto } from './dto/signin-account.dto';
import { Injectable, BadRequestException, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { v4 } from 'uuid';
import { addHours } from 'date-fns';
import * as bcrypt from 'bcrypt';
import { CreateForgotPasswordDto } from './dto/create-forgot-password.dto';
import { CreateAccountDto } from './dto/create-account.dto';
import { VerifyUuidDto } from './dto/verify-uuid.dto';
import { RefreshAccessTokenDto } from './dto/refresh-access-token.dto';
import { ForgotPassword } from './interfaces/forgot-password.interface';
import { Account } from './interfaces/account.interface';

@Injectable()
export class AccountService {

    HOURS_TO_VERIFY = 4;
    HOURS_TO_BLOCK = 6;
    LOGIN_ATTEMPTS_TO_BLOCK = 5;

    constructor(
        @InjectModel('Account') private readonly accountModel: Model<Account>,
        @InjectModel('ForgotPassword') private readonly forgotPasswordModel: Model<any>, //ForgotPassword
        private readonly authService: AuthService,
        ) {}

    // ┌─┐┬─┐┌─┐┌─┐┌┬┐┌─┐  ┬ ┬┌─┐┌─┐┬─┐
    // │  ├┬┘├┤ ├─┤ │ ├┤   │ │└─┐├┤ ├┬┘
    // └─┘┴└─└─┘┴ ┴ ┴ └─┘  └─┘└─┘└─┘┴└─
    async signUp(createAccountDto: CreateAccountDto): Promise<Account> {
        const account = new this.accountModel(createAccountDto);
        await this.isEmailUnique(account.email);
        this.setRegistrationInfo(account);
        await account.save();
        return this.buildRegistrationInfo(account);
    }
 /*///SEND EMAIL
 async sendEmailVerification(email:string): Promise<void> {
    var model = await this.accountModel.findOne({ email: email});
    if(model && model.verification){
        let transporter = nodemailer.createTransport({
            service: 'gmail',
           // secure: true, // true for 465, false for other ports
            auth: {
                user: 'vaniaserra29@gmail.com',
                pass: "serra29fi"
            }
        });
    
        let mailOptions = {
          from: '"Airana" <' + "vaniaserra29@gmail.com" + '>', 
          to: email, // list of receivers (separated by ,)
          subject: 'Verify Email', 
          text: 'Verify Email', 
          html: "Hi! <br><br> Thanks for your registration<br><br><a href='http://localhost:3000/account/verify-email*?verification="+model.verification+"'>Click here to activate your account</a>" // html body
        };
    
        var sent = await new Promise<boolean>(async function(resolve, reject) {
          return await transporter.sendMail(mailOptions, async (error:any, info:any) => {
              if (error) {      
                console.log('Message sent: %s', error);
                return reject(false);
              }
              console.log('Message sent: %s', info.messageId);
              resolve(true);
          });      
        });
        console.log('Email has been sent');
    } else {
        console.log('Email was not sent');
      //throw new HttpException('REGISTER.USER_NOT_REGISTERED', HttpStatus.FORBIDDEN);
    }
  }*/
    // ┬  ┬┌─┐┬─┐┬┌─┐┬ ┬  ┌─┐┌┬┐┌─┐┬┬
    // └┐┌┘├┤ ├┬┘│├┤ └┬┘  ├┤ │││├─┤││
    //  └┘ └─┘┴└─┴└   ┴   └─┘┴ ┴┴ ┴┴┴─┘
    async verifyEmail(req: Request, verifyUuidDto: VerifyUuidDto) {
        const account = await this.findByVerification(verifyUuidDto.verification);
        await this.setAccountAsVerified(account);
        return {
            username: account.username,
            email: account.email,
            theme:account.theme,
            rememberme:account.rememberme,
            accessToken: await this.authService.createAccessToken(account._id,account.username,account.email,account.photos.profilePic,account.roles,account.theme,account.rememberme),
            refreshToken: await this.authService.createRefreshToken(req, account._id,account.username,account.email,account.photos.profilePic,account.roles,account.theme,account.rememberme),
        };
    }

    // ┬  ┌─┐┌─┐┬┌┐┌
    // │  │ ││ ┬││││
    // ┴─┘└─┘└─┘┴┘└┘
    async signIn(req: Request, signInAccountDto: SignInAccountDto) {
        const account = await this.findAccountByEmail(signInAccountDto.email);
        this.isAccountBlocked(account);
        await this.checkPassword(signInAccountDto.password, account);
        await this.passwordsAreMatch(account);
        return {
            username: account.username,
            email: account.email,
            roles:account.roles,
            theme:account.theme,
            rememberme:account.rememberme,
            accessToken: await this.authService.createAccessToken(account._id,account.username,account.email,account.photos.profilePic,account.roles,account.theme,account.rememberme),
            refreshToken: await this.authService.createRefreshToken(req, account._id,account.username,account.email,account.photos.profilePic,account.roles,account.theme,account.rememberme),
        };
    }

    // ┬─┐┌─┐┌─┐┬─┐┌─┐┌─┐┬ ┬  ┌─┐┌─┐┌─┐┌─┐┌─┐┌─┐  ┌┬┐┌─┐┬┌─┌─┐┌┐┌
    // ├┬┘├┤ ├┤ ├┬┘├┤ └─┐├─┤  ├─┤│  │  ├┤ └─┐└─┐   │ │ │├┴┐├┤ │││
    // ┴└─└─┘└  ┴└─└─┘└─┘┴ ┴  ┴ ┴└─┘└─┘└─┘└─┘└─┘   ┴ └─┘┴ ┴└─┘┘└┘
    async refreshAccessToken(refreshAccessTokenDto: RefreshAccessTokenDto) {
        const accountId = await this.authService.findRefreshToken(refreshAccessTokenDto.refreshToken);
        const account = await this.accountModel.findById(accountId);
        if (!account) {
            throw new BadRequestException('Bad request');
        }
        return {
            accessToken: await this.authService.createAccessToken(account._id,account.username,account.email,account.photos.profilePic,account.roles,account.theme,account.rememberme),
        };
    }

    // ┌─┐┌─┐┬─┐┌─┐┌─┐┌┬┐  ┌─┐┌─┐┌─┐┌─┐┬ ┬┌─┐┬─┐┌┬┐
    // ├┤ │ │├┬┘│ ┬│ │ │   ├─┘├─┤└─┐└─┐││││ │├┬┘ ││
    // └  └─┘┴└─└─┘└─┘ ┴   ┴  ┴ ┴└─┘└─┘└┴┘└─┘┴└──┴┘
    async forgotPassword(req: Request, createForgotPasswordDto: CreateForgotPasswordDto) {
        await this.findByEmail(createForgotPasswordDto.email);
        await this.saveForgotPassword(req, createForgotPasswordDto);
        return {
            email: createForgotPasswordDto.email,
            message: 'verification sent.',
        };
    }

    // ┌─┐┌─┐┬─┐┌─┐┌─┐┌┬┐  ┌─┐┌─┐┌─┐┌─┐┬ ┬┌─┐┬─┐┌┬┐  ┬  ┬┌─┐┬─┐┬┌─┐┬ ┬
    // ├┤ │ │├┬┘│ ┬│ │ │   ├─┘├─┤└─┐└─┐││││ │├┬┘ ││  └┐┌┘├┤ ├┬┘│├┤ └┬┘
    // └  └─┘┴└─└─┘└─┘ ┴   ┴  ┴ ┴└─┘└─┘└┴┘└─┘┴└──┴┘   └┘ └─┘┴└─┴└   ┴
    async forgotPasswordVerify(req: Request, verifyUuidDto: VerifyUuidDto) {
        const forgotPassword = await this.findForgotPasswordByUuid(verifyUuidDto);
        await this.setForgotPasswordFirstUsed(req, forgotPassword);
        return {
            email: forgotPassword.email,
            message: 'now reset your password.',
        };
    }

    // ┬─┐┌─┐┌─┐┌─┐┌┬┐  ┌─┐┌─┐┌─┐┌─┐┬ ┬┌─┐┬─┐┌┬┐
    // ├┬┘├┤ └─┐├┤  │   ├─┘├─┤└─┐└─┐││││ │├┬┘ ││
    // ┴└─└─┘└─┘└─┘ ┴   ┴  ┴ ┴└─┘└─┘└┴┘└─┘┴└──┴┘
    async resetPassword(resetPasswordDto: ResetPasswordDto) {
        const forgotPassword = await this.findForgotPasswordByEmail(resetPasswordDto);
        await this.setForgotPasswordFinalUsed(forgotPassword);
        await this.resetAccountPassword(resetPasswordDto);
        return {
            email: resetPasswordDto.email,
            message: 'password successfully changed.',
        };
    }
    // ┌─┐┬─┐┌─┐┌┬┐┌─┐┌─┐┌┬┐┌─┐┌┬┐  ┌─┐┌─┐┬─┐┬  ┬┬┌─┐┌─┐
    // ├─┘├┬┘│ │ │ ├┤ │   │ ├┤  ││  └─┐├┤ ├┬┘└┐┌┘││  ├┤
    // ┴  ┴└─└─┘ ┴ └─┘└─┘ ┴ └─┘─┴┘  └─┘└─┘┴└─ └┘ ┴└─┘└─┘
    async getAllAccounts(): Promise<any> {
        return await this.accountModel.find({});
    }

    // ********************************************
    // ╔═╗╦═╗╦╦  ╦╔═╗╔╦╗╔═╗  ╔╦╗╔═╗╔╦╗╦ ╦╔═╗╔╦╗╔═╗
    // ╠═╝╠╦╝║╚╗╔╝╠═╣ ║ ║╣   ║║║║╣  ║ ╠═╣║ ║ ║║╚═╗
    // ╩  ╩╚═╩ ╚╝ ╩ ╩ ╩ ╚═╝  ╩ ╩╚═╝ ╩ ╩ ╩╚═╝═╩╝╚═╝
    // ********************************************

    private async isEmailUnique(email: string) {
        const account = await this.accountModel.findOne({email, verified: true});
        if (account) {
            throw new BadRequestException('Email most be unique.');
        }
    }

    private setRegistrationInfo(account:any): any {
        account.verification = v4();
        account.verificationExpires = addHours(new Date(), this.HOURS_TO_VERIFY);
    }

    private buildRegistrationInfo(account:any): any {
        const accountRegistrationInfo = {
            username: account.username,
            email: account.email,
            verified: account.verified,
        };
        return accountRegistrationInfo;
    }

    private async findByVerification(verification: string): Promise<Account> {
        const account = await this.accountModel.findOne({verification, verified: false, verificationExpires: {$gt: new Date()}});
        if (!account) {
            throw new BadRequestException('Bad request.');
        }
        return account;
    }

    private async findByEmail(email: string): Promise<Account> {
        const account = await this.accountModel.findOne({email, verified: true});
        if (!account) {
            throw new NotFoundException('Email not found.');
        }
        return account;
    }

    private async setAccountAsVerified(account:any) {
        account.verified = true;
        await account.save();
    }

    private async findAccountByEmail(email: string): Promise<Account> {
        const account = await this.accountModel.findOne({email, verified: true});
        if (!account) {
          throw new NotFoundException('Wrong email or password.');
        }
        return account;
      }

    private async checkPassword(attemptPass: string, account:any) {
        const match = await bcrypt.compare(attemptPass, account.password);
        if (!match) {
            await this.passwordsDoNotMatch(account);
            throw new NotFoundException('Wrong email or password.');
        }
        return match;
      }

    private isAccountBlocked(account) {
        if (account.blockExpires > Date.now()) {
            throw new ConflictException('Account has been blocked try later.');
        }
    }

    private async passwordsDoNotMatch(account:any) {
        account.loginAttempts += 1;
        await account.save();
        if (account.loginAttempts >= this.LOGIN_ATTEMPTS_TO_BLOCK) {
            await this.blockAccount(account);
            throw new ConflictException('Account blocked.');
        }
    }

    private async blockAccount(account:any) {
        account.blockExpires = addHours(new Date(), this.HOURS_TO_BLOCK);
        await account.save();
    }

    private async passwordsAreMatch(account:any) {
        account.loginAttempts = 0 ;
        await account.save();
    }

    private async saveForgotPassword(req: Request, createForgotPasswordDto: CreateForgotPasswordDto) {
        const forgotPassword = await this.forgotPasswordModel.create({
            email: createForgotPasswordDto.email,
            verification: v4(),
            expires: addHours(new Date(), this.HOURS_TO_VERIFY),
            ip: this.authService.getIp(req),
            browser: this.authService.getBrowserInfo(req),
            country: this.authService.getCountry(req),
        });
        await forgotPassword.save();
    }

    private async findForgotPasswordByUuid(verifyUuidDto: VerifyUuidDto): Promise<ForgotPassword> {
        const forgotPassword = await this.forgotPasswordModel.findOne({
            verification: verifyUuidDto.verification,
            firstUsed: false,
            finalUsed: false,
            expires: {$gt: new Date()},
        });
        if (!forgotPassword) {
            throw new BadRequestException('Bad request.');
        }
        return forgotPassword;
    }

    private async setForgotPasswordFirstUsed(req: Request, forgotPassword: ForgotPassword) {
        forgotPassword.firstUsed = true;
        forgotPassword.ipChanged = this.authService.getIp(req);
        forgotPassword.browserChanged = this.authService.getBrowserInfo(req);
        forgotPassword.countryChanged = this.authService.getCountry(req);
        await forgotPassword.save();
    }

    private async findForgotPasswordByEmail(resetPasswordDto: ResetPasswordDto): Promise<ForgotPassword> {
        const forgotPassword = await this.forgotPasswordModel.findOne({
            email: resetPasswordDto.email,
            firstUsed: true,
            finalUsed: false,
            expires: {$gt: new Date()},
        });
        if (!forgotPassword) {
            throw new BadRequestException('Bad request.');
        }
        return forgotPassword;
    }

    private async setForgotPasswordFinalUsed(forgotPassword: ForgotPassword) {
        forgotPassword.finalUsed = true;
        await forgotPassword.save();
    }

    private async resetAccountPassword(resetPasswordDto: ResetPasswordDto) {
        const account = await this.accountModel.findOne({
            email: resetPasswordDto.email,
            verified: true,
        });
        account.password = resetPasswordDto.password;
        await account.save();
    }
}

