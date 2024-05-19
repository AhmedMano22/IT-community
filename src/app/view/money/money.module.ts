import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material/material.module';
import { MoneyRoutingModule } from './money-routing.module';
import { InvoicesComponent } from './components/invoices/invoices.component';
import { MoneyComponent } from './money.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
@NgModule({
  declarations: [InvoicesComponent, MoneyComponent],
  imports: [CommonModule, MoneyRoutingModule, SharedModule, MaterialModule,MatPaginatorModule,MatTableModule],
})
export class MoneyModule {}
