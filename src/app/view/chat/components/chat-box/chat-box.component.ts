import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss'],
})
export class ChatBoxComponent {
  selectedFile: File | undefined;

  onFileChange(event: any) {
    this.selectedFile = event.target.files[0];
  }

  getUploadedImageUrl(file: File): string {
    return URL.createObjectURL(file);
  }

  messages: any[] = []; // An empty array to hold messages
  content: string = '';

  sendMessage(content: string): void {
    const date = new Date();
    const hours = date.getHours() % 12 || 12;
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const amOrPm = hours >= 12 ? 'PM' : 'AM';

    const timestamp = `${hours}:${minutes} ${amOrPm}`;

    const newMessage = {
      userImage: '../../../../../assets/images/user/avatar-01.png',
      timestamp: timestamp,
      content: content,
      file: this.selectedFile,
    };

    if (content || this.selectedFile) {
      // Check if content or file is not empty
      this.messages.push(newMessage);
      this.content = '';
      this.selectedFile = undefined; // Clear selected file after sending
    }
  }

  @Input() selectedUser: any;
  @Output() back = new EventEmitter<void>();


  }

