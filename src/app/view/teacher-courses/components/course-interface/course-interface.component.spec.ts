import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseInterfaceComponent } from './course-interface.component';

describe('CourseInterfaceComponent', () => {
  let component: CourseInterfaceComponent;
  let fixture: ComponentFixture<CourseInterfaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseInterfaceComponent]
    });
    fixture = TestBed.createComponent(CourseInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
