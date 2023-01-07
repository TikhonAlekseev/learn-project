import { Injectable } from '@angular/core';
import { IMessage } from '../types';
import { BehaviorSubject, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SocketService } from './socket.service';
import { API_URL } from '../constants';
import { AuthService } from 'src/app/service/auth.service';

@Injectable({
  providedIn: 'root'
})

export class MessagesService {

  constructor(
    private http:HttpClient, 
    private socketService:SocketService,
    private authService:AuthService
  ) {}

  public messages = new BehaviorSubject<IMessage[]>([])

  public getMessages(roomId:string) {
    this.http.get<IMessage[]>(`${API_URL}/messages/${roomId}`).subscribe((value => {
      this.messages.next(value)
    }))
  }

  public onSubmitMessage(textMessage:string, roomId:string){
    const socket = this.socketService.socket;
    const userId = this.authService.currentUser.value.id

    //@ts-ignore
    socket?.next({text:textMessage, roomId, userId})
  }
}
