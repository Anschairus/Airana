import { IsNotEmpty, MinLength, MaxLength, IsEmail, IsString, IsBoolean, IsNumber, IsDate, IsObject } from 'class-validator';
import{Type} from 'class-transformer';

import { StatsDto } from './stats.dto';
import { ModifiersDto } from './modifiers.dto';
import { AptitudesDto } from './aptitudes.dto';
export class EquipDto {
 /* constructor(object: any) {
    this.str = object.str;
    this.agi = object.agi;

  };*/
  readonly name:string;
  readonly stats:StatsDto;
  readonly modifiers:ModifiersDto;
  readonly aptitudes:AptitudesDto;
  readonly equipslot:string;
  readonly rarity:string;
  readonly lvl:number;
  readonly ilvl:number;
  readonly description:string;
  readonly skill:[string];
  readonly type:string;
  readonly subtype:string;
  readonly prana:boolean;
  readonly element:string;
  readonly image:object;
  readonly category:string;
  };
 
