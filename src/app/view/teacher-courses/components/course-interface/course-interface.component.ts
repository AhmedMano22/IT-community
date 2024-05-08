import { Component } from '@angular/core';

@Component({
  selector: 'course-interface',
  templateUrl: './course-interface.component.html',
  styleUrls: ['./course-interface.component.scss'],
})
export class CourseInterfaceComponent {
  imgFileName = '';
  vidFileName = '';
  noVidSelected = "COURSE_INTRO_VIDEO_NOT_SELECTED";

  constructor() {
    this.selectedCategoryOption = 'CHOOSE_COURSE_CATAGORY_PLACEHOLDER';
    this.selectedLevelOption = 'COURSE_CHOOSE_LEVEL_PLACEHOLDER';
  }
  selectedCategoryOption: string = '';
  selectedLevelOption: string = '';

  optionsCatagory = [
    {
      label: 'Placeholder',
      value: 'CHOOSE_COURSE_CATAGORY_PLACEHOLDER',
    },
    { label: '', value: 'option1' },
    { label: '', value: 'option2' },
    { label: '', value: 'option3' },
  ];

  optionsCourseLevels = [
    {
      label: 'Placeholder',
      value: 'COURSE_CHOOSE_LEVEL_PLACEHOLDER',
    },
    { label: '', value: 'option1' },
    { label: '', value: 'option2' },
    { label: '', value: 'option3' },
  ];

  onCategoryChange() {
    console.log('Selected option:', this.selectedCategoryOption);
  }

  onLevelChange() {
    console.log('Selected option:', this.selectedLevelOption);
  }

  onFileImageChange(event: any) {
    const file = event.target.files[0];
    this.imgFileName = file.name;
  }

  onFileVideoChange(event: any) {
    const file = event.target.files[0];
    this.vidFileName = file.name;
  }
}
