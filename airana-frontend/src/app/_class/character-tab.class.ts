import { Injectable } from '@angular/core';
import { Adapter } from './adapter';
import { Equip } from './equip.class';
import { Photo } from './photo.class';
import { Stats } from './stats.class';
import { AfiliationTab } from './afiliation.class';
import { Bulge } from './bulge.class';
import { Modifiers } from './modifiers.class';
import { Aptitudes } from './aptitudes.class';


export class CharacterTab {
      public _id:string;
      public name: string;
      public surname: string;
      public status: string;
      public career: string;
      public powersource: string;
      public powermethod: string;
      public pranalanguages: string;
      public specialization: string;
      public pathresearch: string;
      public birthplace: {
         city: string;
         country: string;
      };
      public ethnicity: string;
      public nationality: string;
      public based: {
         street: string;
         number: number;
         district: string;
         city: string;
         prefacture: number;
         country: string

      };
      public cpp: {
         membership: boolean;
         promotedate: Date;
         rank: string;
      };
      public afiliations: [{
         link:AfiliationTab;
         evil:boolean;
         joindate:Date;
         rank:number;
      }]
      public user: string;
      public level: number;
      public xpobtained: number;
      public alignement: string;
      public age: number;
      public birthdate: Date;
      public haircolor: string;
      public eyecolor: string;
      public bloodtype: string;
      public height: number;
      public weight: number;
      public race: {
         name: string;
         sex: string;
         bulge: Bulge[]
      };
      public chest: number;
      public waist: number;
      public hip: number;
      public feet: number;
      public titles: string;
      public hundredsoffollowers: number;
      public numberofawards: number;
      public honorableactions: number;
      public hundredsofhaters: number;
      public infamy: number;
      public cowardactions: number;
      public totalfame: number;
      public contacts: [string];
      public phobias: string;
      public stats: {
         random: Stats;
         base: Stats;
         lvl: Stats[];
      };
      public aptitudes: Aptitudes[];
      public equip: {
         lhand: Equip;
         rhand: Equip;
         head: Equip;
         armor: Equip;
         hands: Equip;
         legs: Equip;
         feet: Equip;
         trinket1: Equip;
         trinket2: Equip;
      };
      public image: {
         main: Photo;
         gallery: string[]
      };
      public notes: string;
      public adminnotes: string;
      public role: string;
      public ownhistory: string;
      public items:string[];
      public currency:{
         bank:number,
         bag:number
      }
      public createdAt:Date;
      public updatedAt:Date;
 }

/*

export class CharacterTab {
    name: string;
 public
    surname: string;
 public
    status: string;
 public
    class: string;
 public
    powersource: string;
 public
    powermethod: string;
 public
    pranalanguages: string;
 public
    specialization: string;
 public
    pathresearch: string;
 public
    nationality: string;
 public
    cpp: boolean;
 public
    cpprank: string;
 public
    afiliation1: string;
 public
    afrank1: string;
 public
    afiliation2: string;
 public
    afrank2: string;
 public
    afiliation3: string;
 public
    afrank3: string;
 public
    evilafiliation1: string;
 public
    eafrank1: string;
 public
    user: string;
 public
    level;
 public
    xpobtained: number;
 public
    alignement: string;
 public
    age: number;
 public
    birthdate: string;
 public
    sex: string;
 public
    height: number;
 public
    weight: number;
 public
    cup: string;
 public
    chest: number;
 public
    waist:number
    hip: number;
 public
    feet:number;
 public
    titles: string;
 public
    hundredsoffollowers: number;
 public
    numberofawards: number;
 public
    honorableactions: number;
 public
    hundredsofhaters: number;
 public
    infamy: number;
 public
    cowardactions: number;
 public
    contacts: string;
 public
    phobias: string;
 public
    image: string;
 public
    notes: string;
 public
    adminnotes: string;
 public
    ownhistory: string;
 public
}*/
