import { Component } from '@angular/core';

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
  rate = 5
}
