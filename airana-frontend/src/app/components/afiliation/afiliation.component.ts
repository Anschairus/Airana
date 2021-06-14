import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import{FilterPipe} from '../../pipes'

import { AfiliationTab } from "../../_class";
import { AfiliationService } from "../../_services";

@Component({
  selector: "afiliation",
  templateUrl: "./afiliation.component.html",
  styleUrls: ["./afiliation.component.scss"]
})
export class AfiliationsComponent implements OnInit {
  title = "AFILIATIONS";

  searchTerm:string="";
  afiliationTabs: any;
  category='name';
  order=false;
  loaded: boolean = false;
  lang:string='en';

  constructor(private afiliationService: AfiliationService,
    private router: Router, ) { }
 
  ngOnInit(): void {
    this.getAfiliationTabs();
  }
  getAfiliationTabs() {
    this.afiliationService
      .getAfiliationTabs()
      .subscribe(afiliationTabs => {
        this.afiliationTabs = afiliationTabs;
        this.loaded = true;
      });
  }
  
  onSelect(afiliationTab: AfiliationTab) {
   
      this.router.navigate(['/ranking/afiliations/' +(afiliationTab.en.name).replace(/\s/g, "_").replace(/\s/g, "_")]);
    }
    
  
afiliationImg(afiliationTab: AfiliationTab) {
    if (afiliationTab.image.photo === "" || afiliationTab.image.photo == null) {
      return "https://www.airana.net/assets/img/npc/" + "s-foto.jpg";
    } else {
      return "https://www.airana.net/assets/img/afiliations/" + afiliationTab.image.photo;
    }
  }
 
 orderBy(category,reverse){
   if(!reverse){
    return this.afiliationTabs.sort((a, b) => a.en[category].localeCompare(b.en[category]))
   }else{
    return this.afiliationTabs.sort((a, b) => a.en[category].localeCompare(b.en[category])).reverse();
   }
 }
}

