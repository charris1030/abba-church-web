import { Component, ElementRef, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('navSide', { static: false }) public navSide: ElementRef;

  title = 'Abba Church';
  language: string;
  showLanguageMenu: boolean = false;
  showLocations: boolean = false;

  constructor(public router: Router, public languageService: LanguageService) {
    this.language = this.languageService.getLanguage();
   }

  ngAfterViewInit() {
    console.log(this.navSide);
}

ngOnInit(): void {
  this.language = 'pt-br';
}

openSideNav() {
  this.navSide.nativeElement.style.width = "350px";
}

closeSideNav() {
  this.navSide.nativeElement.style.width = "0";
}

showLanguageOptions() {
  this.showLanguageMenu = !this.showLanguageMenu;
}

changeLanguage(lang: string) {
  console.warn("Changing Language to ", lang);
  this.languageService.setLanguage(lang);
  this.language = lang;
  this.showLanguageMenu = false;
}

showLocationOptions() {
  this.showLocations = !this.showLocations;
}

}