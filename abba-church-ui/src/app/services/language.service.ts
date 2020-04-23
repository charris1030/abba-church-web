import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private _language: BehaviorSubject<string>;
    language: string = 'pt-br';
  constructor() {
    this._language = new BehaviorSubject<string>('pt-br');
   }

  setLanguage(language: string) {
      this.language = language;
  }

  getLanguage() {
    return this.language;
  }

  getLangValue(): Observable<string> {
    return this._language.asObservable();
  }
  setLangValue(newLangValue: string): void {
    this._language.next(newLangValue);
  }
 
}