import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarCoursesCardComponent } from './similar-courses-card.component';

describe('SimilarCoursesCardComponent', () => {
  let component: SimilarCoursesCardComponent;
  let fixture: ComponentFixture<SimilarCoursesCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimilarCoursesCardComponent]
    });
    fixture = TestBed.createComponent(SimilarCoursesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
