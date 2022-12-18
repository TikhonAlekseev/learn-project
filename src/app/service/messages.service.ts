import { Injectable } from '@angular/core';
import { IMessage } from '../types';

@Injectable({
  providedIn: 'root'
})

export class MessagesService {

  constructor() { }

  private messages: IMessage[] = [
    {
      id: '1',
      userId: '1',
      text: "Привет!",
      date:'',
      roomId:'1'
    },
  ]

  public getMessages():IMessage[]  {
    return this.messages
  }
  
  public onSubmitMessage(textMessage:string, roomId:string){
    let socket = this.socketService.socket;
  
    socket?.next({text:textMessage, roomId})


  }
}
