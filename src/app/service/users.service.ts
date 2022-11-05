import { Injectable } from '@angular/core';
import { IUser } from '../types';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor() { }

  private currentUser = {
    name:"Пользователь",
    userId:"12",
  };

  private isAuth = false;

  public login(){}

  public logOut(){}

  public getUser(){
    return this.currentUser
  }
}
