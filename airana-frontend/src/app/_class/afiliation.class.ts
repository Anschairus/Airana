
import { Photo } from './photo.class';
export class AfiliationTab{
  _id:string;
  
  owner: string;
  en:{
    name: string;
    description:string;
    ranks:object;
  }
  
  members:[string];
  playermembers:[string];
  missions:object;
  image:Photo;
  
}