import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FloatLabelModule } from "primeng/floatlabel"
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { CourseDetailsHeroSectionComponent } from './components/course-details-hero-section/course-details-hero-section.component';
import { CourseDetailsContentComponent } from './components/course-details-content/course-details-content.component';
import { RatingModule } from 'ngx-bootstrap/rating';
import { SimilarCoursesComponent } from './components/similar-courses/similar-courses.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent } from './components/cart/cart.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { PaymentComponent } from './components/payment/payment.component';
@NgModule({
  declarations: [
    CoursesComponent,
    CourseDetailsComponent,
    CourseDetailsHeroSectionComponent,
    CourseDetailsContentComponent,
    SimilarCoursesComponent,
    FooterComponent,
    CartComponent,
    PaymentComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    CoursesRoutingModule,
    FloatLabelModule,
    DropdownModule,
    FormsModule,
    RatingModule.forRoot(),
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CoursesModule { }
