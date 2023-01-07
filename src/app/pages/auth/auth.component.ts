import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent{

  constructor(private authService:AuthService){}

  hasAccount = false;

  title:string = this.hasAccount ? 'Авторизация': 'Регистрация'

  userData = {
    username:"",
    email:'',
    password:''
  }

  registration(){
    this.authService.regist(this.userData)
  }

  login(){
    const {email,password} = this.userData;
    this.authService.login({ email,password })
  }
}
