import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-money',
  templateUrl: './money.component.html',
  styleUrls: ['./money.component.scss'],
})
export class MoneyComponent {
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
