import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  language: string = "pt-br";

  constructor(private router: Router, protected languageService: LanguageService) {
    this.language = this.languageService.getLanguage();
  }

  ngOnInit() {
      this.languageService.getLangValue().subscribe((value) => {
                 this.language = value;
               });
  }

}
