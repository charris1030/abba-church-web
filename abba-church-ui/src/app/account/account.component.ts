import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../models/user';
import { LanguageService } from '../services/language.service';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AccountComponent implements OnInit {

  addUpdateAccountInProgress: boolean = false;
  accountCreationSuccess: boolean = false;
  accountAddUpdateSent: boolean = false;
  language: string;
  action: string = 'new';
  user: User = new User();
  createAccountResponse: any;
  color = 'primary';
  mode = 'indeterminate';

  constructor(private router: Router,
    private route: ActivatedRoute,
    protected languageService: LanguageService,
    public accountService: AccountService) {
      let action = this.route.snapshot.paramMap.get('action');
      this.action = action;
  }

  ngOnInit() {
       this.languageService.getLangValue().subscribe((value) => {
             this.language = value;
           });
  }

  /**
   * CH - calls API to create a new account for a user
   */
  public createAccount() {
    console.log("Creating new account for user:", this.user);
    this.accountAddUpdateSent = true;
    this.addUpdateAccountInProgress = true;
    this.accountService.createAccount(this.user).subscribe((resp: any)=>{
      console.log("Create New Account Response:", resp);
      if(resp) {
      this.createAccountResponse = resp;
      this.accountCreationSuccess = true;
      this.addUpdateAccountInProgress = false;
      } else {
        this.accountCreationSuccess = false;
        this.addUpdateAccountInProgress = false;
      }
    });

  }

}
