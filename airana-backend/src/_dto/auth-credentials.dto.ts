import { IsString, MaxLength, MinLength, IsNumber, IsEmail, IsBoolean } from 'class-validator';
import{Type} from 'class-transformer'

export class AuthCredentialsDto {
  @IsString()
  @MinLength(3)
  @MaxLength(20)
  username: string;


  @IsString()
  @MinLength(4)
  @MaxLength(20)
  name: string;

  @IsString()
  surname: string;

  @IsEmail()
  @MinLength(3)
  email: string;
  
  @IsString()
  @MinLength(8, { message: 'Password is too short (8 characters min)' })
  @MaxLength(20, { message: 'Password is too long (20 characters max)' })
  password: string;
  
  @Type(() => Date)
  birthdate: Date;
  
  @IsBoolean()
  rememberme: boolean;
  
  @IsNumber()
  accessrank: number;

  @Type(() => Date)
  created: Date;
  
  @IsString()
  theme: string;
}