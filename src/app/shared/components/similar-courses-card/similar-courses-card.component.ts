import { Component, Input } from '@angular/core';

@Component({
  selector: 'similar-courses-card',
  templateUrl: './similar-courses-card.component.html',
  styleUrls: ['./similar-courses-card.component.scss']
})
export class SimilarCoursesCardComponent {
  @Input() Course: any;
  isBookmarked = false;
  rate = 5;
  toggleBookmark() {
    this.isBookmarked = !this.isBookmarked;
  }
}
