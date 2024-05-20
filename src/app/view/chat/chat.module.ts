import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import { ChatUsersListComponent } from './components/chat-users-list/chat-users-list.component';
import { ChatBoxComponent } from './components/chat-box/chat-box.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ChatComponent,
    ChatUsersListComponent,
    ChatBoxComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    FormsModule,
    SharedModule,

  ]
})
export class ChatModule { }
