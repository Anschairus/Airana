import { Component, Input } from '@angular/core';
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { map,catchError } from 'rxjs/operators';

import { AfiliationTab } from "../_class/index";
@Injectable({
  providedIn: 'root'
})
export class AfiliationService {
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
  getAfiliationTabs(): Observable<AfiliationTab[]> {
    return this.http.get<AfiliationTab[]>("https://airana.herokuapp.com/afiliation").pipe(catchError(this.handleError));
  }
  /*onSelect(id: number): Observable<AfiliationTab> {
    return this.http.get<AfiliationTab>("https://airana.000webhostapp.com/assets/api/afiliation/read_one.php?id=" + id).pipe(map(response => response));

  }*/
  public onSelect(surname:string, name: string): Observable<AfiliationTab> {    
  if(surname==''||surname==null||surname==undefined){
    return this.http.get<AfiliationTab>("https://airana.herokuapp.com/afiliation/" + (name).replace(/_/g, " ")).pipe(catchError(this.handleError));
  }else{
    return this.http.get<AfiliationTab>("https://airana.herokuapp.com/afiliation/" + (surname).replace(/_/g, " ")+'/'+(name).replace(/_/g, " ")).pipe(catchError(this.handleError));
  }
   
  }
  update(surname:string, name: string,afiliationTab:AfiliationTab) {
    return this.http.put<AfiliationTab>("https://airana.herokuapp.com/afiliation"+  + (name).replace(/_/g, " ")+'/'+(surname).replace(/_/g, " "),afiliationTab);
  }

}