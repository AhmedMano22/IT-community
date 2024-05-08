import { Component } from '@angular/core';

@Component({
  selector: 'course-details-hero-section',
  templateUrl: './course-details-hero-section.component.html',
  styleUrls: ['./course-details-hero-section.component.scss']
})
export class CourseDetailsHeroSectionComponent {
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

}
