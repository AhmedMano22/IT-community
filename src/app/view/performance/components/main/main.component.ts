import { Component } from '@angular/core';
import * as chartData from '../../../../core/interfaces/apex'
import { areaSpalineChart } from 'src/app/core/interfaces/apex-chart';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  public areaSpalineChart = chartData.areaSpalineChart
  public areaSpalineChart2 = areaSpalineChart

  active1 = true;
  active2 = false;
  case1() {
    this.active1 = true;
    this.active2 = false;

  }
  case2() {
    this.active1 = false;
    this.active2 = true;

  }
}
