import { stat } from 'fs';
import { Document } from 'mongoose';
import { Stats } from './stats.interface';
import { Modifiers } from './modifiers.interface';
import { Aptitudes } from './aptitudes.interface';
import { Afiliation } from '../_interfaces/afiliation.interface';
import { Bulge } from './bulge.interface';

export interface Pc extends Document {
      name: string;
      surname: string;
      status: string;
      career: string;
      powersource: string;
      powermethod: string;
      pranalanguages: string;
      specialization: string;
      pathresearch: string;
      birthplace: {
            city: string,
            country: string
      };
      ethnicity: string;
      nationality: string;
      based: {
            street: string;
            number: number;
            city: string;
            district: string;
            prefacture: number;
            country: string;
      }
      cpp: {
            membership: boolean;
            promotedate: Date;
            rank: string;
      }
      afiliations: [{
            link: string;
            rank: number,
            evil: boolean,
            joindate: Date;
      }];
      user: string;
      level: number;
      xpobtained: number;
      alignement: string;
      age: number;
      birthdate: Date;
      haircolor: string;
      eyecolor: [number,number,number];
      bloodtype: string;
      height: number;
      weight: number;
      race: {
            name: string;
            sex: string;
            bulge: Bulge[];
      }
      chest: number;
      waist: number;
      hip: number;
      feet: number;
      titles: string;
      hundredsoffollowers: number;
      numberofawards: number;
      honorableactions: number;
      hundredsofhaters: number;
      infamy: number;
      cowardactions: number;
      totalfame: number;
      contacts: [{
            link: string;
            affection: number;
      }];
      phobias: string;
      stats: {
            random: Stats;
            base: Stats;
            lvl: Stats[];
      };
      aptitudes: Aptitudes[];
      equipement: {
            lhand: string;
            rhand: string;
            head: string;
            armor: string;
            hands: string;
            legs: string;
            feet: string;
            trinket1: string;
            trinket2: string;
      };
      items: [{
            bank:{
                  size:[number,string];
                  prefix:string;
                  suffix:string;
                  link:string;
                  category:string;},
            bag:{
                  size:[number,string];
                  prefix:string;
                  suffix:string;
                  link:string;
                  category:string;}
      }];
      image: {
            main: object,
            gallery: object[]
      };
      notes: string;
      adminnotes: string;
      role: string;
      ownhistory: string;
}
