// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-chat',
//   templateUrl: './chat.component.html',
//   styleUrls: ['./chat.component.scss'],
// })
// export class ChatComponent {
//   selectedUser: any;
//    openChat(user: any) {
//     this.selectedUser = user;
//   }
// }

import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent {
  selectedUser: any;
  isChatBoxVisibleOnSmallScreen: boolean = false;
  isSmallScreen: boolean = window.innerWidth <= 767;

  openChat(user: any) {
    this.selectedUser = user;
    this.isChatBoxVisibleOnSmallScreen = true;
  }

  backToUserList() {
    this.isChatBoxVisibleOnSmallScreen = false;
  }
}
