import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../_services';
import { Account } from '../../_class';
import { from } from 'rxjs';




@Component({
    selector: 'profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
    currentAccount: Account;
    loading = false;
    returnUrl: string;
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentAccount.subscribe(x => this.currentAccount = x);
    }







}
