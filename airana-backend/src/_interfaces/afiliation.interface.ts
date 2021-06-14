
// success: true => message, data
// success: false => errorMessage, error
import { Document } from 'mongoose';

export interface Afiliation extends Document{
    name: string;
    owner: string;
    description:boolean;
    members:[string];
    playermembers:[string];
    missions:object;
    image:object;
    ranks:object;
  }