import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/service/messages.service';
import { RoomsService } from 'src/app/service/rooms.service';
import { SocketService } from 'src/app/service/socket.service';
import { IMessage, Room } from 'src/app/types';
import { WebSocketSubject } from 'rxjs/webSocket';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor(
    private roomService: RoomsService,
    private messagesService: MessagesService,
    private socketService:SocketService
  ) {}

  public selectedRoom:string = "";

  public currentInputText: string = "";

  public messages:IMessage[] = [];

  ngOnInit(): void {
    this.messagesService.messages.subscribe(value => this.messages = value)
    this.roomService.selectedRoom.subscribe(value => this.selectedRoom = value)
    this.socketService.socket?.subscribe((value) => {
      // @ts-ignore
      this.messagesService.messages.next(value)
    });
  }

  onSubmitMessage(e:Event){
    e.preventDefault()
    console.log(this.selectedRoom)
    this.messagesService.onSubmitMessage(this.currentInputText, this.selectedRoom)

    this.currentInputText = "";
  }
}
