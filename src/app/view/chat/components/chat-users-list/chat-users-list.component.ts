import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-chat-users-list',
  templateUrl: './chat-users-list.component.html',
  styleUrls: ['./chat-users-list.component.scss'],
})
export class ChatUsersListComponent {
  users: any[] = [
    {
      id: 1,
      userImage: '../../../../../assets/images/user/avatar-01.png',
      userName: 'Deeby',
      lastMsg: "Hey there buddy, how's it going",
    },
    {
      id: 2,
      userImage: '../../../../../assets/images/user/avatar-01.png',
      userName: 'Deeby2',
      lastMsg: "Hey there buddy, how's it going",
    },
    {
      id: 3,
      userImage: '../../../../../assets/images/user/avatar-01.png',
      userName: 'Deeby3',
      lastMsg: "Hey there buddy, how's it going",
    },
  ];

  @Output() userSelected = new EventEmitter<any>();

  selectUser(user: any) {
    this.userSelected.emit(user);
  }
}
