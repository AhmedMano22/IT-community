import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherComponent } from './teacher.component';
import { MainComponent } from './components/main/main.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { TeacherSidebarComponent } from './components/teacher-sidebar/teacher-sidebar.component';



@NgModule({
  declarations: [
    TeacherComponent,
    MainComponent,
    TeacherSidebarComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    SharedModule,
  ]
})
export class TeacherModule {}
