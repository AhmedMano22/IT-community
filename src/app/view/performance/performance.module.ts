import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerformanceRoutingModule } from './performance-routing.module';
import { PerformanceComponent } from './performance.component';
import { MainComponent } from './components/main/main.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PerformanceComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    NgApexchartsModule,
    PerformanceRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class PerformanceModule { }
