import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from '../_services';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentAccount = this.authenticationService.currentAccountValue;
        if (currentAccount) {
            // check if route is restricted by role
            if (route.data.roles && currentAccount.roles.includes(route.data.roles[0])===false) {
                // role not authorised so redirect to home page
                
               this.router.navigate(['/']);
                return false;
            }
            // authorised so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['account/sign-in'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}