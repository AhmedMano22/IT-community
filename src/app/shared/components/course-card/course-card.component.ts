import { Component, Input } from '@angular/core';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent {
  @Input() Course: any;
  isBookmarked = false;
  rate = 5
  toggleBookmark() {
    this.isBookmarked = !this.isBookmarked;
  }
}
