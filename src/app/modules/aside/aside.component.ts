import { Component, Input, OnInit, Output } from '@angular/core';
import { RoomsService } from 'src/app/service/rooms.service';
import { Room } from 'src/app/types';


@Component({
  selector: 'aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})

export class AsideComponent implements OnInit {

  constructor(private roomService: RoomsService) { }

  public rooms: Room[] = []

  public selectedRoom: string = '';

  public title: string = "Список групп";

  public nameNewRoom: string = ""
  
  ngOnInit(): void {
    this.rooms = this.roomService.getAllRooms();
  }

  public handleSelectRoom(id: string){
    this.roomService.onSelectRoom(id);
  }

  public handleCreateRoom(){
    this.roomService.onCreatedRoom(this.nameNewRoom)
  }

  public handleRemoveRoom(id: string){
    this.roomService.onRemoveRoom(id)
    this.rooms = this.roomService.getAllRooms();
  }
}
