import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

    api: string = environment.api;

  constructor(private http: HttpClient) {

   }

   public createAccount(user: User) {
   console.log('Sending create account request to: '+this.api+'/account/createAccount')
    return this.http.post(this.api + '/account/createAccount', user);
   }

}
