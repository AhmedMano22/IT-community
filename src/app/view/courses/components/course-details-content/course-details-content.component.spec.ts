import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetailsContentComponent } from './course-details-content.component';

describe('CourseDetailsContentComponent', () => {
  let component: CourseDetailsContentComponent;
  let fixture: ComponentFixture<CourseDetailsContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseDetailsContentComponent]
    });
    fixture = TestBed.createComponent(CourseDetailsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
