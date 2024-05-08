import { Component } from '@angular/core';

@Component({
  selector: 'similar-courses',
  templateUrl: './similar-courses.component.html',
  styleUrls: ['./similar-courses.component.scss']
})
export class SimilarCoursesComponent {

similarCourseCards = [
  {
    imageCard: '../../../../../assets/images/teacher/course-card-img1.png',
    title: 'The three Musketeers',
    price: '44.0$',
    isBookmarked: false,
  },
  {
    imageCard: '../../../../../assets/images/teacher/course-card-img2.png',
    title: 'The three Musketeers',
    price: '44.0$',
    isBookmarked: false,
  },
  {
    imageCard: '../../../../../assets/images/teacher/course-card-img3.png',
    title: 'The three Musketeers',
    price: '44.0$',
    isBookmarked: false,
  },
  {
    imageCard: '../../../../../assets/images/teacher/course-card-img4.png',
    title: 'The three Musketeers',
    price: '44.0$',
    isBookmarked: false,
  },
];

  rate=5;
  price: string = '';
  teacher: string = '';
  rating: string = '';
  duration: string = '';
  lessonsCount: string = '';
  projectsCount: string = '';
  certificate: string = '';
}
