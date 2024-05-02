import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  constructor(private translate: TranslateService) {
    this.initializeTranslation();
  }
  initializeTranslation(): void {
    const appLang = localStorage.getItem('app-lang') || 'ar';
    this.translate.setDefaultLang('ar');
    this.translate.use(appLang);
    document.documentElement.dir = appLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = appLang;
  }
}
