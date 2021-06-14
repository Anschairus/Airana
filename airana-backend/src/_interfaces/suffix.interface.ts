
// success: true => message, data
// success: false => errorMessage, error
import { Document } from 'mongoose';

export interface Suffix extends Document{
  en:{ 
    name: string;
  }
  stats:string[];
  }