import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { CartComponent } from './components/cart/cart.component';
import { PaymentComponent } from './components/payment/payment.component';

const routes: Routes = [
  {path:'', component:CoursesComponent},
  {
    path:'details/:id',
    component:CourseDetailsComponent
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'payment',
    component:PaymentComponent
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
