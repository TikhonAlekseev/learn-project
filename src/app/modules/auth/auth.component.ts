import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private authService:AuthService) { }

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
    this.authService.regist(this.userData)
  }

  login(){
    const {email,password} = this.userData;
    this.authService.login({ email,password })
  }
}
