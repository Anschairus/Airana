import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Account } from '../_class/account.class';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentAccountSubject: BehaviorSubject<Account>;
    public currentAccount: Observable<Account>;

    constructor(private http: HttpClient) {
        this.currentAccountSubject = new BehaviorSubject<Account>(JSON.parse(localStorage.getItem('currentAccount')));
        this.currentAccount = this.currentAccountSubject.asObservable();
    }

    public get currentAccountValue(): Account {
        return this.currentAccountSubject.value;
    }

    login(accountemail: string, password: string) {
        return this.http.post<any>(`https://airana.herokuapp.com/account/signin`, { "email": accountemail, "password": password })
            .pipe(map(account => {
                // login successful if there's a jwt token in the response
                if (account && account.accessToken) {
                    // store account details and jwt token in local storage to keep account logged in between page refreshes
                    localStorage.setItem('currentAccount', JSON.stringify(account));
                    this.currentAccountSubject.next(account);
                }

                return account;
            }));
    }

    logout() {
        // remove account from local storage to log account out
        localStorage.removeItem('currentAccount');
        this.currentAccountSubject.next(null);
    }
}