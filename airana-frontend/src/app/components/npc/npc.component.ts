import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import{FilterPipe} from '../../pipes'

import { CharacterTab } from "../../_class";
import { NpcService } from "../../_services";
import * as cpp from'../../data/cpp.data';

@Component({
  selector: "npc",
  templateUrl: "./npc.component.html",
  styleUrls: ["./npc.component.scss"]
})
export class NpcsComponent implements OnInit {
  title = "NPC";

  searchTerm:string="";
  characterTabs: any;
  category='name';
  order=false;
  loaded: boolean = false;
  cpp=cpp.CppData;
  lang:string='en';

  constructor(private npcService: NpcService,
    private router: Router, ) { }
 
  ngOnInit(): void {
    this.getCharacterTabs();
  }
  getCharacterTabs() {
    this.npcService
      .getCharacterTabs()
      .subscribe(characterTabs => {
        this.characterTabs = characterTabs;
        this.loaded = true;
      });
  }
  bulge(race) {
   
    
  }
  onSelect(characterTab: CharacterTab) {
    if(characterTab.surname==''){
      this.router.navigate(['/lore/npc/' + (characterTab.name).replace(/\s/g, "_")]);
    }else {
      this.router.navigate(['/lore/npc/' +(characterTab.surname).replace(/\s/g, "_")+'/'+ (characterTab.name).replace(/\s/g, "_")]);
    }
    
  }
 characterImg(characterTab: CharacterTab) {
    if (characterTab.image.main.photo === "" || characterTab.image.main.photo == null) {
      return "assets/img/npc/" + "s-foto.jpg";
    } else {
      return "assets/img/npc/" + characterTab.image.main.photo;
    }
  }
  ft(height: number) {
    return (
      Math.floor(height * 0.032808) +
      "' " +
      (((height * 0.032808 - Math.floor(height * 0.032808)) * 12).toFixed(0) +
        '"')
    );
  }
  lb(weight: number) {
    return (weight * 2.20462262).toPrecision(3) + " lb";
  }
 orderBy(category,reverse){
   if(!reverse){
    return this.characterTabs.sort((a, b) => a[category].localeCompare(b[category]))
   }else{
    return this.characterTabs.sort((a, b) => a[category].localeCompare(b[category])).reverse();
   }
 }
}

