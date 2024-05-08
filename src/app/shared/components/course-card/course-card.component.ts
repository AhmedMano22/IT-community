import { Component, Input } from '@angular/core';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent {
  @Input() Course: any;
  isBookmarked = false;

  toggleBookmark() {
    this.isBookmarked = !this.isBookmarked;
  }
}
