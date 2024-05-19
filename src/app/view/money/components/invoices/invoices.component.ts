import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss'],
})
export class InvoicesComponent {
  constructor() {}
  displayedColumns: string[] = [
    'CourseName',
    'BookedDate',
    'CourseCoupon',
    'Price',
    'Currency',
    'status',
  ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  CourseName: string;
  BookedDate: any;
  CourseCoupon: string;
  Price: string;
  Currency: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    CourseName: 'Math1',
    BookedDate: '14.12.2023',
    CourseCoupon: '',
    Price: '10$',
    Currency: 'USD',
    status: 'Paid',
  },
  {
    CourseName: 'Math2',
    BookedDate: '14.12.2023',
    CourseCoupon: '',
    Price: '10$',
    Currency: 'USD',
    status: 'Refunded',
  },
  {
    CourseName: 'Math3',
    BookedDate: '14.12.2023',
    CourseCoupon: 'GDBNW',
    Price: '10$',
    Currency: 'USD',
    status: 'Paid',
  },
  {
    CourseName: 'Math4',
    BookedDate: '14.12.2023',
    CourseCoupon: '',
    Price: '10$',
    Currency: 'USD',
    status: 'Paid',
  },
  {
    CourseName: 'Math5',
    BookedDate: '14.12.2023',
    CourseCoupon: 'DEEBY69',
    Price: '10$',
    Currency: 'USD',
    status: 'Paid',
  },
  {
    CourseName: 'Math6',
    BookedDate: '14.12.2023',
    CourseCoupon: '',
    Price: '10$',
    Currency: 'USD',
    status: 'Refunded',
  },
];
