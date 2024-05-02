import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  islogin:boolean=false;
  defaultLanguageFlag: string='';
  isLoginActive: boolean = true;
  isSignupActive: boolean = false;
  constructor( public translate: TranslateService){
    this.updateFlagAndLanguage(this.translate.currentLang);
    const storedLoginActive = localStorage.getItem('isLoginActive');
    this.isLoginActive = storedLoginActive === 'true';
    const storedSignupActive = localStorage.getItem('isSignupActive');
    this.isSignupActive = storedSignupActive === 'true';
  }


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
  toggleActiveButton(button: string) {
    if (button === 'login') {
      this.isLoginActive = true;
      this.isSignupActive = false;
      localStorage.setItem('isLoginActive', JSON.stringify(true));
      localStorage.setItem('isSignupActive', JSON.stringify(false));
    } else if (button === 'signup') {
      this.isLoginActive = false;
      this.isSignupActive = true;
      localStorage.setItem('isLoginActive', JSON.stringify(false));
      localStorage.setItem('isSignupActive', JSON.stringify(true));
    }
  }



}
