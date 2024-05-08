import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FloatLabelModule } from "primeng/floatlabel"
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { CourseDetailsComponent } from './components/course-details/course-details.component';

@NgModule({
  declarations: [
    CoursesComponent,
    CourseDetailsComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    CoursesRoutingModule,
    FloatLabelModule,
    DropdownModule,
    FormsModule
  ]
})
export class CoursesModule { }
