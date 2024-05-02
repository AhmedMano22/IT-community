import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherCoursesRoutingModule } from './teacher-courses-routing.module';
import { TeacherCoursesComponent } from './teacher-courses.component';
import { CourseInterfaceComponent } from './components/course-interface/course-interface.component';
import { TargetsComponent } from './components/targets/targets.component';
import { ContentCreationComponent } from './components/content-creation/content-creation.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { PricingComponent } from './components/pricing/pricing.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { PublishComponent } from './components/publish/publish.component';


@NgModule({
  declarations: [
    TeacherCoursesComponent,
    CourseInterfaceComponent,
    TargetsComponent,
    ContentCreationComponent,
    PricingComponent,
    WelcomeComponent,
    PublishComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TeacherCoursesRoutingModule,
    SharedModule
  ]
})
export class TeacherCoursesModule { }
