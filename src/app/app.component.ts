import { Component, OnInit } from '@angular/core';
import { AuthService } from './service/auth.service';
import { SocketService } from './service/socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent  implements OnInit {

  constructor(
      private authService:AuthService,
      private socketService:SocketService
  ){}
  
  ngOnInit(){
    if(localStorage.getItem('token')){
      this.authService.checkAuth();
    }
  }

}
