import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { Room } from '../types';
import { MessagesService } from 'src/app/service/messages.service';
import { API_URL } from '../constants';

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
    this.http.get<Room[]>(`${API_URL}/rooms`).subscribe((value)=>{
    this.rooms.next(value);
    });
  }

  public onSelectRoom(id:string):void {
    this.selectedRoom.next(id)
    this.messagesService.getMessages(id)
  }

  public onCreatedRoom(nameRoom:string){
    this.http.post(`${API_URL}/rooms/add`,{ name:nameRoom }).subscribe(() => {
      this.getAllRooms()
    })
  }

  public onRemoveRoom(id:string){
    this.http.delete(`${API_URL}/rooms/remove/${id}`).subscribe(() => {
      this.getAllRooms()
    })
  }
}
