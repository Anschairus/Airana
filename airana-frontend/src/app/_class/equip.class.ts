
import {Stats} from './stats.class';
import {Aptitudes} from './aptitudes.class';
import {Modifiers} from './modifiers.class';

export class Equip {
    stats:Stats;
    modifiers:Modifiers;
    aptitudes:Aptitudes;
    rarity:string;
    lvl:number;
    ilvl:number;
    description:string;
    skill:[string];
    type:string;
    subtype:string;
    prana:boolean;
    element:string;
    image:string;
}