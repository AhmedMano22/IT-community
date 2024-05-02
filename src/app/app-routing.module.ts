import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path:'',
    loadChildren:()=>import('./view/home/home.module').then(m=> m.HomeModule)
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./view/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'Teacher',
    loadChildren: () =>
      import('./view/teacher/teacher.module').then((m) => m.TeacherModule),
  },
  {
    path: 'My-Cources',
    loadChildren: () =>
      import('./view/teacher-courses/teacher-courses.module').then((m) => m.TeacherCoursesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
