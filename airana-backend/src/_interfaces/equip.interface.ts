
import {Stats} from './stats.interface';
import { Document } from 'mongoose';
import {Modifiers} from './modifiers.interface';
import {Aptitudes} from './aptitudes.interface';
// success: true => message, data
// success: false => errorMessage, error

export interface Equip extends Document{
  
  name:string;
  stats:Stats;
  modifiers:Modifiers;
  aptitudes:Aptitudes;
  equipslot:string;
  rarity:string;
  lvl:number;
  ilvl:number;
  description:string;
  skill:string[];
  image:object;
  category:string;

  }