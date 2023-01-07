import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../service/socket.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{

  constructor(
    private socketService:SocketService
  ){}

  ngOnInit(){
    this.socketService.connection('ws://localhost:3000/socket');
  }

  ngOnDestroy(){
    this.socketService.socket?.complete();
  }
}
