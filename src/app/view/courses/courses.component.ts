import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ProductsService } from 'src/app/core/services/products.service';
interface City {
  name: string;
}
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  cities: City[] | undefined;
  Cources:any;
  selectedCity: any = null;
  constructor(private translate: TranslateService , private productSer:ProductsService) {
    this.initializeTranslation();
  }
  ngOnInit() {
    this.cities = [
        { name: 'HIEGH_RATED'},
        { name: 'LOW_RATED'},
    ];
    this.productSer.getProducts().subscribe((res:any)=>{
      console.log("res:",res);
      this.Cources = res;
      this.Cources.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price})
      });

    });
}
  initializeTranslation(): void {
    const appLang = localStorage.getItem('app-lang') || 'ar';
    this.translate.setDefaultLang('ar');
    this.translate.use(appLang);
    document.documentElement.dir = appLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = appLang;
  }
  // Cources=[
  //   {
  //     image: 'assets/images/tutors/tutor1.png',
  //     tutor:'Mohamed Hassan',
  //     country:'Egypt',
  //     university:'Mansoura University',
  //     faculity:'Computer Science',
  //     coursesNumber:'3 courses',
  //     students:'15 Student',
  //     rate:5,
  //     reviewers:'13',
  //     tutorLanguages:'EN,AR',
  //   },
  //   {
  //     image: 'assets/images/tutors/tutor2.png',
  //     tutor:'tutor name',
  //     country:'Egypt',
  //     university:'Mansoura University',
  //     faculity:'Computer Science',
  //     coursesNumber:'3 courses',
  //     students:'15 Student',
  //     rate:5,
  //     reviewers:'13',
  //     tutorLanguages:'EN,AR',
  //   },
  //   {
  //     image: 'assets/images/tutors/tutor3.png',
  //     tutor:'tutor name',
  //     country:'Egypt',
  //     university:'Mansoura University',
  //     faculity:'Computer Science',
  //     coursesNumber:'3 courses',
  //     students:'15 Student',
  //     rate:5,
  //     reviewers:'13',
  //     tutorLanguages:'EN,AR',
  //   },
  //   {
  //     image: 'assets/images/tutors/tutor4.png',
  //     tutor:'tutor name',
  //     country:'Egypt',
  //     university:'Mansoura University',
  //     faculity:'Computer Science',
  //     coursesNumber:'3 courses',
  //     students:'15 Student',
  //     rate:5,
  //     reviewers:'13',
  //     tutorLanguages:'EN,AR',
  //   },
  //   {
  //     image: 'assets/images/tutors/tutor5.png',
  //     tutor:'tutor name',
  //     country:'Egypt',
  //     university:'Mansoura University',
  //     faculity:'Computer Science',
  //     coursesNumber:'3 courses',
  //     students:'15 Student',
  //     rate:5,
  //     reviewers:'13',
  //     tutorLanguages:'EN,AR',
  //   },
  //   {
  //     image: 'assets/images/tutors/tutor6.png',
  //     tutor:'tutor name',
  //     country:'Egypt',
  //     university:'Mansoura University',
  //     faculity:'Computer Science',
  //     coursesNumber:'3 courses',
  //     students:'15 Student',
  //     rate:5,
  //     reviewers:'13',
  //     tutorLanguages:'EN,AR',
  //   },
  //   {
  //     image: 'assets/images/tutors/tutor7.png',
  //     tutor:'tutor name',
  //     country:'Egypt',
  //     university:'Mansoura University',
  //     faculity:'Computer Science',
  //     coursesNumber:'3 courses',
  //     students:'15 Student',
  //     rate:5,
  //     reviewers:'13',
  //     tutorLanguages:'EN,AR',
  //   },
  //   {
  //     image: 'assets/images/tutors/tutor8.png',
  //     tutor:'tutor name',
  //     country:'Egypt',
  //     university:'Mansoura University',
  //     faculity:'Computer Science',
  //     coursesNumber:'3 courses',
  //     students:'15 Student',
  //     rate:5,
  //     reviewers:'13',
  //     tutorLanguages:'EN,AR',
  //   },
  //   {
  //     image: 'assets/images/tutors/tutor9.png',
  //     tutor:'tutor name',
  //     country:'Egypt',
  //     university:'Mansoura University',
  //     faculity:'Computer Science',
  //     coursesNumber:'3 courses',
  //     students:'15 Student',
  //     rate:5,
  //     reviewers:'13',
  //     tutorLanguages:'EN,AR',
  //   },
  //   {
  //     image: 'assets/images/tutors/tutor10.png',
  //     tutor:'tutor name',
  //     country:'Egypt',
  //     university:'Mansoura University',
  //     faculity:'Computer Science',
  //     coursesNumber:'3 courses',
  //     students:'15 Student',
  //     rate:5,
  //     reviewers:'13',
  //     tutorLanguages:'EN,AR',
  //   },
  //   {
  //     image: 'assets/images/tutors/tutor11.png',
  //     tutor:'tutor name',
  //     country:'Egypt',
  //     university:'Mansoura University',
  //     faculity:'Computer Science',
  //     coursesNumber:'3 courses',
  //     students:'15 Student',
  //     rate:5,
  //     reviewers:'13',
  //     tutorLanguages:'EN,AR',
  //   },
  //   {
  //     image: 'assets/images/tutors/tutor12.png',
  //     tutor:'tutor name',
  //     country:'Egypt',
  //     university:'Mansoura University',
  //     faculity:'Computer Science',
  //     coursesNumber:'3 courses',
  //     students:'15 Student',
  //     rate:5,
  //     reviewers:'13',
  //     tutorLanguages:'EN,AR',
  //   },

  // ]
}
