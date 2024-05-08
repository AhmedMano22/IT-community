import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarCoursesComponent } from './similar-courses.component';

describe('SimilarCoursesComponent', () => {
  let component: SimilarCoursesComponent;
  let fixture: ComponentFixture<SimilarCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimilarCoursesComponent]
    });
    fixture = TestBed.createComponent(SimilarCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
