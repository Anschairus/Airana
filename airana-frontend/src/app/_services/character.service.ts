import { Component, Input } from '@angular/core';
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { map,catchError } from 'rxjs/operators';

import { CharacterTab } from "../_class/index";
@Injectable({
  providedIn: 'root'
})
export class CharacterService {
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
  getCharacterTabs(): Observable<CharacterTab[]> {
    return this.http.get<CharacterTab[]>("https://airana.herokuapp.com/pc").pipe(catchError(this.handleError));
  }
  getOwnCharacterTabs(accessToken:string): Observable<CharacterTab[]> {
    return this.http.get<CharacterTab[]>("https://airana.herokuapp.com/pc/"+accessToken).pipe(catchError(this.handleError));
  }
  /*onSelect(id: number): Observable<CharacterTab> {
    return this.http.get<CharacterTab>("https://airana.000webhostapp.com/assets/api/character/read_one.php?id=" + id).pipe(map(response => response));

  }*/
  public onSelect(surname:string, name: string): Observable<CharacterTab> {    
  if(surname==''||surname==null||surname==undefined){
    return this.http.get<CharacterTab>("https://airana.herokuapp.com/pc/" + (name).replace(/_/g, " ")).pipe(catchError(this.handleError));
  }else{
    return this.http.get<CharacterTab>("https://airana.herokuapp.com/pc/" + (surname).replace(/_/g, " ")+'/'+(name).replace(/_/g, " ")).pipe(catchError(this.handleError));
  }
   
  }
  update(surname:string, name: string,characterTab:CharacterTab) {
    return this.http.put<CharacterTab>("https://airana.herokuapp.com/pc"+  + (name).replace(/_/g, " ")+'/'+(surname).replace(/_/g, " "),characterTab);
  }

}