import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { RatingModule } from 'ngx-bootstrap/rating';
import { TeacherNavComponent } from './components/teacher-nav/teacher-nav.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { FormsModule } from '@angular/forms';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '../../assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    NavbarComponent,
    UserProfileComponent,
    TeacherNavComponent,
    CourseCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedRoutingModule,
    RatingModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports:[
    NavbarComponent,
    UserProfileComponent,
    TeacherNavComponent,
    TranslateModule,
    CourseCardComponent
  ]
})
export class SharedModule {
  constructor(
    private translateService: TranslateService,

  ) {
    const appLang = localStorage.getItem('app-lang') ?? 'ar';
    this.translateService.setDefaultLang('ar');
    this.translateService.use(appLang);

    this.translateService.onLangChange.subscribe((event) => {
      document.documentElement.dir = event.lang === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = event.lang;
      localStorage.setItem('app-lang', event.lang);

    });
  }
}
