import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Room } from '../types';

@Injectable({
  providedIn: 'root'
})

export class RoomsService {

  constructor() { }

  //Создал строку для выбранной комнаты в виде объекта за изменением которого наблюдают компоненты
  public selectedRoom = new Subject<Room>();

  private rooms = [
    {id:"1", name:"Первая комната"},
    {id:"2", name:"Вторая комната"},
    {id:"3", name:"Третья комната"},
    {id:"4", name:"Четвертая комната"},
    {id:"5", name:"Пятая комната"},
    {id:"6", name:"Шестая комната"},
    {id:"7", name:"Седьмая комната"},
    {id:"8", name:"Восьмая комната"},
    {id:"9", name:"Девятая комната"},
  ];

  public getAllRooms(): Room[] {
    return this.rooms
  }

  public onSelectRoom(id:string):void {
    this.selectedRoom.next(this.rooms.find(item => item.id === id) as Room)
  }

  public onCreatedRoom(nameRoom:string){
    this.rooms.push({
      id:`${this.rooms.length + 1}`,
      name:nameRoom,
    })
  }

  public onRemoveRoom(id:string){
    this.rooms = this.rooms.filter(room => room.id !== id )
  }
}
