import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AboutUsComponent implements OnInit {

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
