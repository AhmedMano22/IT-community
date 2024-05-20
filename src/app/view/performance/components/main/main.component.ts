import { Component } from '@angular/core';
import * as chartData from '../../../../core/interfaces/apex'
import { areaSpalineChart } from 'src/app/core/interfaces/apex-chart';
import { ChartOptions } from '../../../../core/interfaces/apex';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
   primary_color =  "rgb(99, 98, 231)";
   secondary_color =  "rgb(255, 197, 0)";
   main_color = "#FF6652";
   selectedLevelOption: number ;
   constructor() {
    this.selectedLevelOption = 1;
  }
  // public areaSpalineChart = chartData.areaSpalineChart
  // public areaSpalineChart2 = areaSpalineChart
  areaSpalineChart: ChartOptions | any = {
    chart: {
      height: 350,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    series: [
      {
        name: "series1",
        data: [31, 40, 28, 155, 42, 109, 100,130,124],

      },
      {
        name: "series2",
        data: [11, 32, 45, 100, 34, 52, 41,55,60],
      },
      {
        name: "series3",
        data: [37, 40, 51, 15, 22, 19, 80,110,54],
      },
    ],

    xaxis: {
      categories: ["Jan", "Feb",  "Mar",  "Apr",  "May",  "Jun",  "Jul",  "Aug", "Sep"]
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
    colors: [this.primary_color, this.secondary_color,this.main_color],
  };
  areaSpalineChart2: ChartOptions | any = {
    chart: {
      height: 350,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    series: [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "series2",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
      {
        name: "series3",
        data: [50, 32, 20, 12, 44, 52, 21],
      },
    ],

    xaxis: {
      type: "datetime",
      categories: ["2022-09-19T00:00:00", "2022-09-19T01:30:00", "2022-09-19T02:30:00", "2022-09-19T03:30:00", "2022-09-19T04:30:00", "2022-09-19T05:30:00", "2022-09-19T06:30:00"],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
    colors: [this.primary_color, this.secondary_color,this.main_color],
  };
  optionsCourseLevels = [

    { label: 'YEAR', value: 'YEAR' ,id:1 },
    { label: '6MONTH', value: '6MONTH',id:2 },
    { label: 'MONTH', value: 'MONTH',id:3 },
  ];
  onLevelChange() {
    console.log('Selected option:', this.selectedLevelOption);
  }


  active1 = true;
  active2 = false;
  active3 = false;
  case1() {
    this.active1 = true;
    this.active2 = false;
    this.active3 = false;
  }
  case2() {
    this.active1 = false;
    this.active2 = true;
    this.active3 = false;
  }
  case3() {
    this.active1 = false;
    this.active2 = false;
    this.active3 = true;
  }
}
