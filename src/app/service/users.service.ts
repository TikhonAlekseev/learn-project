import { Injectable } from '@angular/core';
import { IUser, UserData } from '../types';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor() { }

  private currentUser = {
    name:"Пользователь",
    userId:"12",
  };

  public isAuth = false;

  public login(userData:UserData){
    console.log(userData,'login')
  }

  public logOut(){}

  public registration(userData:UserData){
    console.log(userData,'registration')
  }

  public getUser(){
    return this.currentUser
  }
}
