import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Room } from '../types';
import { MessagesService } from 'src/app/service/messages.service';
import { SocketService } from './socket.service';

@Injectable({
  providedIn: 'root'
})

export class RoomsService {

  constructor(
    private http:HttpClient,
    private messagesService: MessagesService,
  ) { }
 
  public selectedRoom = new BehaviorSubject<string>("");
  public rooms = new BehaviorSubject<Room[]>([]);

  public getAllRooms(): void {
    this.http.get<Room[]>('http://localhost:3000/api/rooms').subscribe((value)=>{
    this.rooms.next(value);
    });
  }

  public onSelectRoom(id:string):void {
    this.selectedRoom.next(id)
    this.messagesService.getMessages(id)
  }

  public onCreatedRoom(nameRoom:string){
    this.http.post(`http://localhost:3000/api/rooms/add`,{ name:nameRoom }).subscribe(() => {
      this.getAllRooms()
    })
  }

  public onRemoveRoom(id:string){
    this.http.delete(`http://localhost:3000/api/rooms/remove/${id}`).subscribe(() => {
      this.getAllRooms()
    })
  }
}
