import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

import { MenuTab, Account } from '../../_class/index';
import { MenuService, AuthenticationService } from '../../_services/index';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
  currentTheme: string = 'cpp-dark';
  currentAccount: Account;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private router: Router,
    private breakpointObserver: BreakpointObserver,
    private menuService: MenuService,
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
  ) {
    this.authenticationService.currentAccount.subscribe(x => this.currentAccount = x);
  }
  menuTabs: MenuTab[];
  profileMenuTabs: MenuTab[];
  selectedMenuTab: any;
  selectedSubmenu: any;
  dropdownBrowseOn = false;
  dropdownLeft = false;
  returnUrl: string;

  ngOnInit(): void {

    this.getMenuTabs();
    this.getProfileMenuTabs();
    this.checkLocalStorage();
    this.setTheme();
  }
  notRememberMe() {/*
    if (!this.currentAccount.rememberme) {
      this.authenticationService.logout();
    }*/
  }
  checkLocalStorage() {
    if (this.currentAccount && (this.currentAccount.theme == null || this.currentAccount.theme == undefined || !this.currentAccount.theme || this.currentAccount.roles == null || this.currentAccount.roles == undefined || this.currentAccount.email == null || this.currentAccount.email == undefined || !this.currentAccount.email || this.currentAccount.username == null || this.currentAccount.username == undefined || !this.currentAccount.username || this.currentAccount.rememberme == null || this.currentAccount.rememberme == undefined)) {/*
      // reset login status
      this.authenticationService.logout();
      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';*/

    }
  }
  dropdownLeftTrigger() {
    if (this.dropdownLeft === false) {
      this.dropdownLeft = true;
    } else if (this.dropdownLeft === true) {
      this.dropdownLeft = false;
    }
  }
  getMenuTabs(): void {
    this.menuService.getMenuTabs().then(menuTabs => this.menuTabs = menuTabs);
  }
  getProfileMenuTabs(): void {
    this.menuService.getProfileMenuTabs().then(profileMenuTabs => this.profileMenuTabs = profileMenuTabs);
  }
  setTheme(): void {
    if (this.currentAccount) {
      this.currentTheme = this.currentAccount.theme;
    }
  }
  onSelect(menuTab: MenuTab): void {
    this.selectedMenuTab = menuTab;
  }
  menuHref(u: any): any {
    return (u.replace(/\s+/g, "-")).toLowerCase();
  }
  dropdownBrowse() {
    if (this.dropdownBrowseOn == false) {
      this.dropdownBrowseOn = true;
      return true;
    } else {
      this.dropdownBrowseOn = false;
      return false;
    }
  }

}
