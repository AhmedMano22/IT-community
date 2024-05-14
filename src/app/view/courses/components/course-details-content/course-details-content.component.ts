import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'course-details-content',
  templateUrl: './course-details-content.component.html',
  styleUrls: ['./course-details-content.component.scss']
})
export class CourseDetailsContentComponent {
  courseItems = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    'سوف تتعلم في هذه الدوره ',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    'سوف تتعلم في هذه الدوره ',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    'سوف تتعلم في هذه الدوره ',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  ];
  rate = 5;
  course: any;
  id:any
  constructor(private cartSer:CartService,private courseService: ProductsService , private router:ActivatedRoute){
    this.id = this.router.snapshot.paramMap.get("id");
    console.log("id = ", this.id);
    this.getCourseById(this.id);
  }
  getCourseById(id: number) {
    this.courseService.getProductById(id).subscribe(course => {
      this.course = course;
      console.log("course is new  ",this.course);
      this.course =Object.assign(this.course,{quantity:1,total:this.course.price})

    });
  }
  addtocart(course:any){
   this.cartSer.addtocart(course);
   console.log("corse add to cart" , course);


  }
}
