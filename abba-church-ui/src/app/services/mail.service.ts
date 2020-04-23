import { Injectable } from '@angular/core';
import { OnlineMember } from '../models/online-member';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MailService {

    api: string = environment.api;

  constructor(private http: HttpClient) {
   
   }

   public sendOnlineMemberRegistrationEmail(onlineMember: OnlineMember) {
    return this.http.post(this.api + "mail/sendOnlineMemberRegMail", onlineMember);
   }

}