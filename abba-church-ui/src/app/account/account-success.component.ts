import { Component, OnInit, Input } from '@angular/core';
import { User } from '../models/user';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-account-success',
  templateUrl: './account-success.component.html',
  styleUrls: ['./account-success.component.scss']
})
export class AccountSuccessComponent implements OnInit {

  language: string;
  @Input('user') user: User;

  constructor(protected languageService: LanguageService) {
  }

  ngOnInit() {
       this.languageService.getLangValue().subscribe((value) => {
             this.language = value;
           });
  }

}
