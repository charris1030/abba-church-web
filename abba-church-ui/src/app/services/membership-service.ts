import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { OnlineMember } from '../models/online-member';

@Injectable({
  providedIn: 'root'
})
export class MembershipService {

    api: string = environment.api;

  constructor(private http: HttpClient) {
   
   }

}