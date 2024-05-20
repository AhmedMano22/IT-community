import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatUsersListComponent } from './chat-users-list.component';

describe('ChatUsersListComponent', () => {
  let component: ChatUsersListComponent;
  let fixture: ComponentFixture<ChatUsersListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatUsersListComponent]
    });
    fixture = TestBed.createComponent(ChatUsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
