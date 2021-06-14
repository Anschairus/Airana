import { IsNotEmpty, MinLength, MaxLength, IsEmail, IsString, IsNumber, IsBoolean } from 'class-validator';
import {Type} from 'class-transformer';

export class CreateAccountDto {

    //Username
   
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(255)
    readonly username: string;

    
    //Name
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    readonly name: string;

    //Surname
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    readonly  surname: string;

    // Email
 
    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(255)
    @IsEmail()
    readonly email: string;

    // Password
    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    @MaxLength(1024)
    readonly password: string;

    @Type(() => Date)
  birthdate: Date;

  @IsBoolean()
  rememberme: boolean;

  @IsString()
  theme: string;

  @IsString()
  photos:{
    profilePic:object;
  }
  @IsString()
  roles: [string];

 
}
 

 
