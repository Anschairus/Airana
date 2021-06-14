import { Document } from 'mongoose';
//import { PhotoSchema } from '../../schemas/photo.schema';

export interface Account extends Document {
    username: string;
    name: string;
    surname: string;
    email: string;
    password: string;
    birthdate: Date;
    rememberme: boolean;
    theme: string;
    photos: {
        profilePic: object;
        //profilePic: Photo;
        //gallery: Photo[];
      }
    roles: [string];
    verification: string;
    /*facebook: {
      userid: String
    };
    gmail: {
      userid: String
    };
    phone: string;
    settings: {
    };
    */
    verified: boolean;
    verificationExpires: Date;
    loginAttempts?: number;
    blockExpires?: Date;
    bankAccountNumber?: string;
    bankAccountName?: string;
}