import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent {


  course: any;
  id:any
  constructor(private courseService: ProductsService , private router:ActivatedRoute) {
    this.id = this.router.snapshot.paramMap.get("id");

   }

}
