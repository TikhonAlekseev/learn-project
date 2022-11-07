import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/service/messages.service';
import { RoomsService } from 'src/app/service/rooms.service';
import { IMessage, Room } from 'src/app/types';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor(
    private roomService: RoomsService,
    private messagesService: MessagesService
  ) {}

  public selectedRoom:Room = {id:"", name:""};

  public currentInputText: string = "";

  public messages: IMessage[] = [];

  ngOnInit(): void {

    //Подписываемся на наблюдение изменений выбранной комнаты
    this.roomService.selectedRoom.subscribe((value) => { this.selectedRoom = value })

    //Забираем все сообщения в данной комнате
    this.messages = this.messagesService.getMessages();
  }

  onSubmitMessage(e:Event){
    e.preventDefault()
    this.messagesService.onSubmitMessage(this.currentInputText, this.selectedRoom.id)
    this.currentInputText = "";
  }
}
