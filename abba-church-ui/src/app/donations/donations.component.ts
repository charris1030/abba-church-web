import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { LanguageService } from '../services/language.service';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DonationsComponent implements OnInit {

  language: string;


  constructor(private router: Router, protected languageService: LanguageService) {
     this.language = this.languageService.getLanguage();
  }

  ngOnInit() {
       this.languageService.getLangValue().subscribe((value) => {
              this.language = value;
            });
  }

}
