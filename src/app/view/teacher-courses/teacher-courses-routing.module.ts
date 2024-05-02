import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherCoursesComponent } from './teacher-courses.component';

const routes: Routes = [
  {
    path: '',
    component: TeacherCoursesComponent,

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherCoursesRoutingModule { }
