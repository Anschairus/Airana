import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { Account } from "../../_class";
import { AccountService, AuthenticationService } from "../../_services";
import { CharacterTab } from "../../_class";
import { CharacterService } from "../../_services";
import * as cpp from'../../data/cpp.data';

@Component({
  templateUrl: "home.component.html",
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentAccount: Account;
  characterTabs: CharacterTab[]=[];
  loaded: Boolean = false;
  accounts: Account[] = [];
  cpp=cpp.CppData;

  constructor(private pcService: CharacterService,
    private accountService: AccountService,
    private router: Router, private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentAccount.subscribe(x => this.currentAccount = x);
  }

  ngOnInit() {
    if (this.currentAccount.roles.includes('admin')) {
      this.accountService.getAll().pipe(first()).subscribe(accounts => {
        this.accounts = accounts;

      });
    }
    if (this.currentAccount.roles.includes('user')) {
      console.log(this.currentAccount.accessToken);
      this.pcService.getOwnCharacterTabs(this.currentAccount.accessToken).pipe(first()).subscribe(characterTabs => {
        this.characterTabs = characterTabs;

      });
    }
    this.loaded = true;
  }
}
