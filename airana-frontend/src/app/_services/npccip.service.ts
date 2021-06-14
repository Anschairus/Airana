import { Component, Input } from '@angular/core';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import "rxjs/add/operator/map";
import 'rxjs/add/operator/catch';

import { CharacterTab } from "../_class";
@Injectable()
export class NpccipService {
  constructor(private http: HttpClient) { }
  getCharacterTabs(): Observable<CharacterTab[]> {
    return this.http.get<CharacterTab[]>("https://airana.000webhostapp.com/assets/api/npc/read_admin.php").pipe(map(response => response));

  }
  onSelect(characterTab: CharacterTab): Observable<CharacterTab> {
    return this.http.get<CharacterTab>("https://airana.000webhostapp.com/assets/api/npc/read_one.php?id=" + characterTab).pipe(map(response => response));

  }

}
