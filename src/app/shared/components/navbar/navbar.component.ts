import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor( public translate: TranslateService){}
  switchLanguage() {
    const currentLang = this.translate.currentLang;
    this.translate.use(currentLang === 'ar' ? 'en' : 'ar');
  }
}
