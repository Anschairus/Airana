import { Roles } from '../auth/decorators/roles.decorator';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { CreateForgotPasswordDto } from './dto/create-forgot-password.dto';
import { Request } from 'express';
import { SignInAccountDto } from './dto/signin-account.dto';
import { Controller, Get, Post, Body, UseGuards, Req, HttpCode, HttpStatus } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { VerifyUuidDto } from './dto/verify-uuid.dto';
import { AccountService } from './account.service';
import { AuthGuard, PassportModule } from '@nestjs/passport';
import { RefreshAccessTokenDto } from './dto/refresh-access-token.dto';

import { RolesGuard } from 'src/auth/guards/roles.guard';


@Controller('account')
@UseGuards(RolesGuard)
export class AccountController {
    constructor(
        private readonly accountService: AccountService,
        ) {}

    // ╔═╗╦ ╦╔╦╗╦ ╦╔═╗╔╗╔╔╦╗╦╔═╗╔═╗╔╦╗╔═╗
    // ╠═╣║ ║ ║ ╠═╣║╣ ║║║ ║ ║║  ╠═╣ ║ ║╣
    // ╩ ╩╚═╝ ╩ ╩ ╩╚═╝╝╚╝ ╩ ╩╚═╝╩ ╩ ╩ ╚═╝
    @Post()
    @HttpCode(HttpStatus.CREATED)
    async signUp(@Body() createAccountDto: CreateAccountDto) {
        return await this.accountService.signUp(createAccountDto);
    }

    @Post('verify-email')
    @HttpCode(HttpStatus.OK)
    async verifyEmail(@Req() req: Request, @Body() verifyUuidDto: VerifyUuidDto) {
        return await this.accountService.verifyEmail(req, verifyUuidDto);
    }

    @Post('signin')
    @HttpCode(HttpStatus.OK)
    async signIn(@Req() req: Request, @Body() signInAccountDto: SignInAccountDto) {
        return await this.accountService.signIn(req, signInAccountDto);
    }

    @Post('refresh-access-token')
    @HttpCode(HttpStatus.CREATED)
    async refreshAccessToken(@Body() refreshAccessTokenDto: RefreshAccessTokenDto) {
        return await this.accountService.refreshAccessToken(refreshAccessTokenDto);
    }

    @Post('forgot-password')
    @HttpCode(HttpStatus.OK)
    async forgotPassword(@Req() req: Request, @Body() createForgotPasswordDto: CreateForgotPasswordDto) {
        return await this.accountService.forgotPassword(req, createForgotPasswordDto);
    }

    @Post('forgot-password-verify')
    @HttpCode(HttpStatus.OK)
    async forgotPasswordVerify(@Req() req: Request, @Body() verifyUuidDto: VerifyUuidDto) {
        return await this.accountService.forgotPasswordVerify(req, verifyUuidDto);
    }

    @Post('reset-password')
    @HttpCode(HttpStatus.OK)
    
   
    async resetPassword(@Body() resetPasswordDto: ResetPasswordDto) {
        return await this.accountService.resetPassword(resetPasswordDto);
    }

    @Get('data')
    @UseGuards(AuthGuard('jwt'))
    @Roles('admin')
    @HttpCode(HttpStatus.OK)
    findAll() {
        return this.accountService.getAllAccounts();
    }
}
