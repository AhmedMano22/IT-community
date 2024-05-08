import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetailsHeroSectionComponent } from './course-details-hero-section.component';

describe('CourseDetailsHeroSectionComponent', () => {
  let component: CourseDetailsHeroSectionComponent;
  let fixture: ComponentFixture<CourseDetailsHeroSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseDetailsHeroSectionComponent]
    });
    fixture = TestBed.createComponent(CourseDetailsHeroSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
