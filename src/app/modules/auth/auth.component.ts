import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private usersService:UsersService) { }

  ngOnInit(): void {
  }
  
  isRegist = false;

  title:string = this.isRegist ? 'Авторизация': 'Регистрация'

  userData = {
    name:"",
    email:'',
    password:''
  }

  registration(){
    this.usersService.registration(this.userData)
  }

  login(){
    const {email,password} = this.userData;
    this.usersService.login({ email,password })
  }
}
