import { Component } from '@angular/core';
import { UsersService } from './service/users.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor(private usersService:UsersService){
    this.isAuth = this.usersService.isAuth;
  }
  title = 'Онлайн чат';

  isAuth = false;

}
