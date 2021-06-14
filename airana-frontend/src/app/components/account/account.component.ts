import { Component, OnInit, HostBinding, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { Account } from '../../_class/index';

import { AuthenticationService, ThemeService, AccountService } from '../../_services/index';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
    selector: 'account-component',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AccountComponent implements OnInit {
    currentTheme: string = 'airana-dark';
    currentAccount: Account;
    @HostBinding('class') componentCssClass;
    constructor(
        private overlayContainer: OverlayContainer,
        private accountService: AccountService,
        private router: Router,
        private authenticationService: AuthenticationService) {
        this.authenticationService.currentAccount.subscribe(x => this.currentAccount = x);
    }

    logout() {
        this.router.navigate(['/account/sign-in']);
    }
    ngOnInit(): void {
        this.overlayContainer.getContainerElement().classList.add(this.currentTheme);
    }
    onSetTheme() {
        this.currentAccount.theme = this.currentTheme
        this.accountService.updateTheme(this.currentAccount)
    }
    accountImg(image: string) {
        if (image === "" || image == null) {
            return "assets/img/npc/" + "foto.jpg";
        } else {
            return "assets/img/accounts/s-serra-vania.jpg"; 
        }
    }
}