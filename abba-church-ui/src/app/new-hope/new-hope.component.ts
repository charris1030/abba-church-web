import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-new-hope',
  templateUrl: './new-hope.component.html',
  styleUrls: ['./new-hope.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class NewHopeComponent implements OnInit {
  titheLink: string;
  language: string;
 constructor(public languageService: LanguageService) {
 this.language = this.languageService.getLanguage();
 }

  ngOnInit() {
  this.titheLink = 'https://tithe.ly/give?c=1302804';
      this.languageService.getLangValue().subscribe((value) => {
              this.language = value;
            });
  }
openDonate() {
       window.open(this.titheLink, '_blank');
   }

   /**
    * CH - changes language on click of option
    * @param lang
    */
   changeLanguage(lang: string) {
     if(lang === 'en-us') {
       this.language = 'en-us';
     } else {
       this.language = 'pt-br';
     }
   }

   /**
    * CH - invoked on click of address in browser to open app on mobile device
    */
   openAddress() {
     if /* if we're on iOS, open in Apple Maps */
     ((navigator.platform.indexOf("iPhone") != -1) ||
      (navigator.platform.indexOf("iPad") != -1) ||
      (navigator.platform.indexOf("iPod") != -1)) {
       window.open("maps://maps.google.com/maps?daddr=42.346200,-71.560260&amp;ll=", '_blank');
      } else /* else use Google */
         window.open("https://maps.google.com/maps?daddr=42.346200,-71.560260&amp;ll=", '_blank');
   }

   /**
    * CH - invoked on click of facebook logo to open in browser or app if on mobile device
    */
   openFb() {
     if /* if we're on iOS, open in Facebook App */
     ((navigator.platform.indexOf("iPhone") != -1) ||
      (navigator.platform.indexOf("iPad") != -1) ||
      (navigator.platform.indexOf("iPod") != -1)) {
       window.open("fb://page/abbamarlboro", '_blank');
      } else /* else open in web browser */
         window.open("https://www.facebook.com/abbamarlboro/", '_blank');
   }
   }





