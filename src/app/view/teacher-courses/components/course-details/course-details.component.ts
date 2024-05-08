import { Component } from '@angular/core';

@Component({
  selector: 'course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss'],
})
export class CourseDetailsComponent {
  lessons = [
    {
      img: '../../../../../assets/images/teacher/lesson.png',
      title: 'Maths - Introduction',
      time: '1:57',
    },
    {
      img: '../../../../../assets/images/teacher/lesson.png',
      title: 'Maths - Introduction',
      time: '1:57',
    },
    {
      img: '../../../../../assets/images/teacher/lesson.png',
      title: 'Maths - Introduction',
      time: '1:57',
    },
    {
      img: '../../../../../assets/images/teacher/lesson.png',
      title: 'Maths - Introduction',
      time: '1:57',
    },
  ];

  courseItems = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    'سوف تتعلم في هذه الدوره ',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    'سوف تتعلم في هذه الدوره ',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    'سوف تتعلم في هذه الدوره ',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  ];

  similarCourseCards = [
    {
      imageCard: '../../../../../assets/images/teacher/course-card-img1.png',
      title: 'The three Musketeers',
      price: '44.0$',
    },
    {
      imageCard: '../../../../../assets/images/teacher/course-card-img2.png',
      title: 'The three Musketeers',
      price: '44.0$',
      rating: 5,
    },
    {
      imageCard: '../../../../../assets/images/teacher/course-card-img3.png',
      title: 'The three Musketeers',
      price: '44.0$',
      rating: 5,
    },
    {
      imageCard: '../../../../../assets/images/teacher/course-card-img4.png',
      title: 'The three Musketeers',
      price: '44.0$',
      rating: 5,
    },
  ];

  price: string = '';
  teacher: string = '';
  rating: string = '';
  duration: string = '';
  lessonsCount: string = '';
  projectsCount: string = '';
  certificate: string = '';
}
