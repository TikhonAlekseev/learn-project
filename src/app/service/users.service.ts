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

  public getUser(){
    return this.currentUser
  }
}
