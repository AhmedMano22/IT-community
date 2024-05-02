import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherNavComponent } from './teacher-nav.component';

describe('TeacherNavComponent', () => {
  let component: TeacherNavComponent;
  let fixture: ComponentFixture<TeacherNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeacherNavComponent]
    });
    fixture = TestBed.createComponent(TeacherNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
