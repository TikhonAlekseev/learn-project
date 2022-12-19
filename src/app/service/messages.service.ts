import { Injectable } from '@angular/core';
import { IMessage } from '../types';
import { BehaviorSubject, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SocketService } from './socket.service';
import { API_URL } from '../constants';

@Injectable({
  providedIn: 'root'
})

export class MessagesService {

  constructor(
    private http:HttpClient, 
    private socketService:SocketService
  ) { }

  public messages = new BehaviorSubject<IMessage[]>([])

  public getMessages(roomId:string):void {
    this.http.get<IMessage[]>(`${API_URL}/messages/${roomId}`).subscribe((value => {
      this.messages.next(value)
    }))
  }

  public onSubmitMessage(textMessage:string, roomId:string){
    let socket = this.socketService.socket;
  
    socket?.next({text:textMessage, roomId})
  }
}
