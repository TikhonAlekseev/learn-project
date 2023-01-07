import { Component, Input, OnInit } from '@angular/core';
import { IMessage } from 'src/app/types';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'chat-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})

export class MessageComponent implements OnInit {

  @Input() data!:IMessage

  isCurrentUser = false;

  constructor(private authService:AuthService){}

  ngOnInit(): void {
    this.isCurrentUser = this.authService.currentUser.value.id === this.data.user.id;
  }
}
