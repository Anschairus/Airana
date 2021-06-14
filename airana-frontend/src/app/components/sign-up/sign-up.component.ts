import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

import { AccountService } from '../../_services/index';




@Component({
    selector: 'sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss'],
    providers: [DatePipe] // like this you inject pipe,services
})
export class SignUpComponent {

    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private accountService: AccountService,
        private datePipe:DatePipe) { }

    register() {
        this.loading = true;
        this.model.theme='cpp-dark';
        
        //this.datePipe.transform(this.model.birthdate, 'fullTime');
        this.accountService.create(this.model)
            .subscribe(
                data => {
                    this.router.navigate(['account/sign-in']);
                },
                error => {
                    this.loading = false;
                });
    }
}
