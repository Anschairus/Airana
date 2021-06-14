import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../_services';

@Injectable({
    providedIn: 'root'
  })
  export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) {}
  
    intercept(
      request: HttpRequest<any>,
      next: HttpHandler
    ): Observable<HttpEvent<any>> {
      // add authorization header with jwt token if available
      const currentAccount = this.authenticationService.currentAccountValue;
      if (currentAccount && currentAccount.accessToken) {
       
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${currentAccount.accessToken}`
          }
        });
      }
  
      return next.handle(request);
    }
  }
  
  export const jwtInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
  };