import { IsNotEmpty, MinLength, MaxLength, IsEmail, IsString, IsBoolean, IsNumber, IsDate, IsObject, IsArray } from 'class-validator';
import { Type } from 'class-transformer';

import { StatsDto } from './stats.dto';
import { AptitudesDto } from './aptitudes.dto';
import { AfiliationDto } from './afiliation.dto';
import { BulgeDto } from './bulge.dto';


export class NpcDto {

  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly surname: string;

  @IsNotEmpty()
  @IsString()
  readonly status: string;

  @IsNotEmpty()
  @IsString()
  readonly career: string;

  @IsNotEmpty()
  @IsString()
  readonly powersource: string;

  @IsNotEmpty()
  @IsString()
  readonly powermethod: string;

  @IsNotEmpty()
  @IsString()
  readonly pranalanguages: string;

  @IsNotEmpty()
  @IsString()
  readonly specialization: string;

  @IsNotEmpty()
  @IsString()
  readonly pathresearch: string;

  @IsObject()
  readonly birthplace: {
    city: string;
    country: string;
  }
  @IsNotEmpty()
  @IsString()
  readonly ethnicity: string;

  @IsNotEmpty()
  @IsString()
  readonly nationality: string;

  @IsNotEmpty()
  @IsObject()
  readonly based: {
    readonly street: string;
    readonly number: number;
    readonly city: string;
    readonly district: string;
    readonly prefacture: number;
    readonly country: string;
  }

  @IsNotEmpty()
  @IsObject()
  readonly cpp: {
    readonly membership: boolean;
    promotedate: Date;
    readonly rank: string;
  }

  @IsNotEmpty()
  @IsObject()
  readonly afiliations: [{
    link: string;
    rank: number,
    evil: boolean,
    joindate: Date

  }];

  @IsNotEmpty()
  @IsString()
  readonly user: string;

  @IsNotEmpty()
  @IsNumber()
  readonly level: number;

  @IsNotEmpty()
  @IsNumber()
  readonly xpobtained: number;

  @IsNotEmpty()
  @IsString()
  readonly alignement: string;

  @IsNotEmpty()
  @IsNumber()
  readonly age: number;

  @IsNotEmpty()
  @Type(() => Date)
  birthdate: Date;

  @IsNotEmpty()
  @IsString()
  readonly haircolor: string;

  @IsNotEmpty()
  @IsString()
  readonly eyecolor: [number, number, number];

  @IsNotEmpty()
  @IsString()
  readonly bloodtype: string;

  @IsNotEmpty()
  @IsNumber()
  readonly height: number;

  @IsNotEmpty()
  @IsNumber()
  readonly weight: number;

  @IsNotEmpty()
  @IsObject()
  readonly race: {
    name: string,
    sex: string,
    bulge: BulgeDto[]

  };

  @IsNotEmpty()
  @IsNumber()
  readonly chest: number;

  @IsNotEmpty()
  @IsNumber()
  readonly waist: number;

  @IsNotEmpty()
  @IsNumber()
  readonly hip: number;

  @IsNotEmpty()
  @IsNumber()
  readonly feet: number;

  @IsNotEmpty()
  @IsString()
  readonly titles: string;

  @IsNotEmpty()
  @IsNumber()
  readonly hundredsoffollowers: number;

  @IsNotEmpty()
  @IsNumber()
  readonly numberofawards: number;

  @IsNotEmpty()
  @IsNumber()
  readonly honorableactions: number;

  @IsNotEmpty()
  @IsNumber()
  readonly hundredsofhaters: number;

  @IsNotEmpty()
  @IsNumber()
  readonly infamy: number;

  @IsNotEmpty()
  @IsNumber()
  readonly cowardactions: number;

  @IsNotEmpty()
  @IsNumber()
  readonly totalfame: number;

  @IsNotEmpty()
  @IsString()
  readonly contacts: [{
    link: string;
    affection: number;
  }];
  @IsNotEmpty()
  @IsString()
  readonly phobias: string;

  @IsObject()
  readonly stats: {
    random: StatsDto;
    base: StatsDto;
    lvl: StatsDto[];
  }

  @IsObject()
  readonly equipement: {
    lhand: string;
    rhand: string;
    head: string;
    armor: string;
    hands: string;
    legs: string;
    feet: string;
    trinket1: string;
    trinket2: string;
  }
  @IsNotEmpty()
  @IsObject()
  readonly items: {
    bank: {
      equipement: [{
        size: [number, string],
        link: string,
        prefix: string,
        suffix: string
      }]
    },
    bag: {
      equipement: {
        size: [number, string],
        link: string,
        prefix: string,
        suffix: string
      }
    }

  };


  @IsObject()
  readonly aptitudes: AptitudesDto[];

  @IsNotEmpty()
  @IsObject()
  readonly image: {
    main: object,
    gallery: object[]
  };

  @IsNotEmpty()
  @IsNumber()
  readonly notes: string;

  @IsNotEmpty()
  @IsNumber()
  readonly adminnotes: string;

  @IsNotEmpty()
  @IsNumber()
  readonly role: string;

  @IsNotEmpty()
  @IsString()
  readonly ownhistory: string;
  
  @IsNotEmpty()
  @IsObject()
  readonly currency: {
    bank: {
      type: Number
    },
    bag: {
      type: Number
    }
  }

}