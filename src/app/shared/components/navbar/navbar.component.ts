import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  defaultLanguageFlag: string='';
  constructor( public translate: TranslateService){
    this.updateFlagAndLanguage(this.translate.currentLang);

  }

  // switchLanguage() {
  //   const currentLang = this.translate.currentLang;
  //   this.translate.use(currentLang === 'ar' ? 'en' : 'ar');
  // }
  switchLanguage(lang: string, flagUrl: string): void {
    this.translate.use(lang);
    this.defaultLanguageFlag = flagUrl;
    localStorage.setItem('app-lang', lang);
  }

  private updateFlagAndLanguage(lang: string): void {
    switch (lang) {
      case 'ar':
        this.defaultLanguageFlag = 'assets/images/flags/Saudi-flag.svg';
        break;
      case 'en':
        this.defaultLanguageFlag = 'assets/images/flags/united_kingdom_flag.png';
        break;

      default:
        this.defaultLanguageFlag = 'assets/images/flags/Saudi-flag.svg';
        break;
    }
    this.translate.use(lang);
  }




}
