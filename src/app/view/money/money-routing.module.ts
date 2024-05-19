import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoneyComponent } from './money.component';
import { InvoicesComponent } from './components/invoices/invoices.component';

const routes: Routes = [
  {
    path: '',
    component: MoneyComponent,
    children: [
      { path: '', redirectTo: 'invoices', pathMatch: 'full' },
      { path: 'invoices', component: InvoicesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoneyRoutingModule {}
