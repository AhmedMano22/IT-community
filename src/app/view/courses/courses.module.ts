import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FloatLabelModule } from "primeng/floatlabel"
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { CourseDetailsHeroSectionComponent } from './components/course-details-hero-section/course-details-hero-section.component';
import { CourseDetailsContentComponent } from './components/course-details-content/course-details-content.component';
import { RatingModule } from 'ngx-bootstrap/rating';
import { SimilarCoursesComponent } from './components/similar-courses/similar-courses.component';
import { FooterComponent } from './components/footer/footer.component';
@NgModule({
  declarations: [
    CoursesComponent,
    CourseDetailsComponent,
    CourseDetailsHeroSectionComponent,
    CourseDetailsContentComponent,
    SimilarCoursesComponent,
    FooterComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    CoursesRoutingModule,
    FloatLabelModule,
    DropdownModule,
    FormsModule,
    RatingModule.forRoot(),
  ]
})
export class CoursesModule { }
