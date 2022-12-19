import { Component, OnInit } from '@angular/core';
import { AuthService } from './service/auth.service';
import { SocketService } from './service/socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent  implements OnInit{

  constructor(
      private authService:AuthService,
      private socketService:SocketService
  ){
    this.isAuth = this.authService.isAuth;
  }
  ngOnInit(): void {
    this.socketService.connection('ws://localhost:3000/socket');
  }

  isAuth = false;
}
