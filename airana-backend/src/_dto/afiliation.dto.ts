
import { RankDto } from './rank.dto';
export class AfiliationDto {
 /* constructor(object: any) {
    this.str = object.str;
    this.agi = object.agi;

  };*/
 
  readonly owner: string;  
  readonly en:{ 
    name: string;
description: string;
readonly ranks:object;

  }
  members:[string];
  playermembers:[string];
  readonly missions:object;
  readonly image:object;

  
 
}