import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat.component';
import { ChatUsersListComponent } from './components/chat-users-list/chat-users-list.component';
import { ChatBoxComponent } from './components/chat-box/chat-box.component';

const routes: Routes = [
  {
    path: '',
    component: ChatComponent,
    children: [
      { path: '', redirectTo: 'chat', pathMatch: 'full' },
      { path: 'chat-users-list', component: ChatUsersListComponent },
      { path: 'chat-box', component: ChatBoxComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }