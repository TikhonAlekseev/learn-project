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
  public selectedIdRoom: string = '';
  public title: string = "Список групп";
  public nameNewRoom: string = ""
  
  ngOnInit(): void {
    this.roomService.getAllRooms();
    this.roomService.rooms.subscribe((value) => { this.rooms = value});
  }

  public handleSelectRoom(id: string){
    this.roomService.onSelectRoom(id);
  }

  public handleCreateRoom(){
    if(!this.nameNewRoom){
      alert("Неправильно введено название группы")
      return
    }

    this.roomService.onCreatedRoom(this.nameNewRoom)
    this.nameNewRoom = "";
  }

  public handleRemoveRoom(event:Event, id: string){
    event.stopPropagation();
    this.roomService.onRemoveRoom(id)
    this.roomService.rooms.subscribe((value) => this.rooms = value );
  }
}
