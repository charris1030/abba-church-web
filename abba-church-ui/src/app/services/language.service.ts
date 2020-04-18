import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

    language: string = 'pt-br';
  constructor() { }

  setLanguage(language: string) {
      this.language = language;
  }

  getLanguage(): string {
      return this.language;
  }
 
}