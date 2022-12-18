import { Injectable } from '@angular/core';
import { WebSocketSubject } from 'rxjs/webSocket';
import { IMessage } from './../types';

@Injectable({
  providedIn: 'root'
})

export class SocketService {

  socket:WebSocketSubject<IMessage| {message:string}> | null = null;

  constructor() { }

  connection(url:string){
    this.socket = new WebSocketSubject(url);

    return this.socket;
  }
}
