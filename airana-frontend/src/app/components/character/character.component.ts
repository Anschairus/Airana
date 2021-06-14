import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import{FilterPipe} from '../../pipes'

import { CharacterTab } from "../../_class";
import { CharacterService } from "../../_services";
import * as cpp from'../../data/cpp.data';

@Component({
  selector: "character",
  templateUrl: "./character.component.html",
  styleUrls: ["./character.component.scss"]
})
export class CharactersComponent implements OnInit {
  title = "CHARACTERS";

  searchTerm:string="";
  characterTabs: any;
  category='name';
  order=false;
  loaded: boolean = false;
  cpp=cpp.CppData;
  lang:string='en';

  constructor(private pcService: CharacterService,
    private router: Router, ) { }
 
  ngOnInit(): void {
    this.getCharacterTabs();
  }
  getCharacterTabs() {
    this.pcService
      .getCharacterTabs()
      .subscribe(characterTabs => {
        this.characterTabs = characterTabs;
        this.loaded = true;
      });
  }
  
  onSelect(characterTab: CharacterTab) {
    if(characterTab.surname==''){
      this.router.navigate(['/ranking/characters/' + (characterTab.name).replace(/\s/g, "_")]);
    }else {
      this.router.navigate(['/ranking/characters/' +(characterTab.surname).replace(/\s/g, "_")+'/'+ (characterTab.name).replace(/\s/g, "_")]);
    }
    
  }
 characterImg(characterTab: CharacterTab) {
    if (characterTab.image.main.url === "" || characterTab.image.main.url == null) {
      return "assets/img/npc/" + "s-foto.jpg";
    } else {
      return "assets/img/character/" + characterTab.image.main.url;
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

