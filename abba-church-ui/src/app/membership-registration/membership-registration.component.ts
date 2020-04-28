import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OnlineMember } from '../models/online-member';
import { MailService } from '../services/mail.service';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-membership-registration',
  templateUrl: './membership-registration.component.html',
  styleUrls: ['./membership-registration.component.scss']
})
export class MembershipRegistrationComponent implements OnInit {

  onlineMember: OnlineMember = new OnlineMember();
  sendEmailResponse: any;
  language: string;

  constructor(private router: Router, private mailService: MailService, protected languageService: LanguageService ) {


  }

  ngOnInit() {
   this.languageService.getLangValue().subscribe((value) => {
                this.language = value;
              });
  }

  public submitReg() {
    console.log("Sending Online Member Registration Email: ", this.onlineMember.email);
    this.mailService.sendOnlineMemberRegistrationEmail(this.onlineMember).subscribe((data: any)=>{
      console.log(data);
      this.sendEmailResponse = data;
    })
  }

}
