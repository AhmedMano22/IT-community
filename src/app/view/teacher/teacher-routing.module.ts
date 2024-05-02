import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherComponent } from './teacher.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: TeacherComponent,
    children: [
      { path: '', redirectTo: 'dash', pathMatch: 'full' },
      { path: 'dash', component: MainComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
