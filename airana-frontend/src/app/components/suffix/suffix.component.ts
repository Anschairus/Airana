import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import{FilterPipe} from '../../pipes'

import { SuffixTab } from "../../_class";
import { SuffixService } from "../../_services";

@Component({
  selector: "suffix",
  templateUrl: "./suffix.component.html",
  styleUrls: ["./suffix.component.scss"]
})
export class SuffixComponent implements OnInit {
  title = "Suffixes";

  suffixTabs: any;
  order=false;
  loaded: boolean = false;
  lang:string='en';

  constructor(private suffixService: SuffixService,
    private router: Router, ) { }
 
  ngOnInit(): void {
    this.getSuffixTabs();
  }
  getSuffixTabs() {
    this.suffixService
      .getSuffixTabs()
      .subscribe(suffixTabs => {
        this.suffixTabs = suffixTabs;
        this.loaded = true;
      });
  }
  
 orderBy(category,reverse){
   if(!reverse){
    return this.suffixTabs.sort((a, b) => a.en[category].localeCompare(b.en[category]))
   }else{
    return this.suffixTabs.sort((a, b) => a.en[category].localeCompare(b.en[category])).reverse();
   }
 }
}

