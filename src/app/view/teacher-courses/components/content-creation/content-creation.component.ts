import { Component } from '@angular/core';

@Component({
  selector: 'content-creation',
  templateUrl: './content-creation.component.html',
  styleUrls: ['./content-creation.component.scss']
})
export class ContentCreationComponent {
  // lectures: any[] = [];

  // constructor() {
  //   // Start with an initial lecture if necessary
  //   this.addLecture();
  // }
  // addLecture() {
  //   this.lectures.push({
  //     title: '', // You can add other properties as needed
  //   });
  // }
  // remove(index: number) {
  //   console.log("clicked",index);
  //   this.lectures.splice(index, 1);
  //   console.log(this.lectures);
  // }
  sections: any[] = [
    {
      title: 'DEPART1',
      lectures: [{}] // Initial lectures for the first section
    }
  ];

  addSection(): void {
    const newSection = {
      title: 'DEPART1',
      lectures: []
    };
    this.sections.push(newSection);
  }

  addLecture(sectionIndex: number): void {
    this.sections[sectionIndex].lectures.push({});
  }

  removeLecture(sectionIndex: number, lectureIndex: number): void {
    this.sections[sectionIndex].lectures.splice(lectureIndex, 1);
  }
}
