import { Component, Input } from '@angular/core';
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { map,catchError } from 'rxjs/operators';

import { SuffixTab } from "../_class/index";
@Injectable({
  providedIn: 'root'
})
export class SuffixService {
  constructor(private http: HttpClient) { }
  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
  getSuffixTabs(): Observable<SuffixTab[]> {
    return this.http.get<SuffixTab[]>("https://airana.herokuapp.com/suffix").pipe(catchError(this.handleError));
  }
  /*onSelect(id: number): Observable<SuffixTab> {
    return this.http.get<SuffixTab>("https://airana.000webhostapp.com/assets/api/suffix/read_one.php?id=" + id).pipe(map(response => response));

  }*/
  public onSelect(surname:string, name: string): Observable<SuffixTab> {    
  if(surname==''||surname==null||surname==undefined){
    return this.http.get<SuffixTab>("https://airana.herokuapp.com/suffix/" + (name).replace(/_/g, " ")).pipe(catchError(this.handleError));
  }else{
    return this.http.get<SuffixTab>("https://airana.herokuapp.com/suffix/" + (surname).replace(/_/g, " ")+'/'+(name).replace(/_/g, " ")).pipe(catchError(this.handleError));
  }
   
  }
  update(surname:string, name: string,suffixTab:SuffixTab) {
    return this.http.put<SuffixTab>("https://airana.herokuapp.com/suffix"+  + (name).replace(/_/g, " ")+'/'+(surname).replace(/_/g, " "),suffixTab);
  }

}