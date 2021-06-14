import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Account } from "../_class";

@Injectable({ providedIn: 'root' })
export class AccountService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Account[]>(`https://airana.herokuapp.com/account/data`);
  }

  getById(id: number) {
    // return this.http
    //   .get("https://airana.000webhostapp.com/assets/api/account/read_one.php?id=" + id)
    //   .map((response: Response) => response.json());
  }

  create(account:any) {
    return this.http.post("https://airana.herokuapp.com/account", account);
  }

  update(account: Account) {
   // return this.http.post("https://airana.000webhostapp.com/assets/api/account/update.php" + account.id, account);
  }

  delete(id: string) {
   // return this.http.delete("https://airana.000webhostapp.com/assets/api/account/delete.php" + id);
  }
  updateTheme(account: Account) {
   // return this.http.post<any>(`https://airana.000webhostapp.com/assets/api/account/update_account.php`, account);
  }
}
