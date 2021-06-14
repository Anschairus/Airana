import { Account } from 'src/account/interfaces/account.interface';
import { Document } from 'mongoose';

export interface RefreshToken extends Document {
    accountId: Account;
    refreshToken: string;
    ip: string;
    browser: string;
    country: string;
}
