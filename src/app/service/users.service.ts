import { Injectable } from '@angular/core';
import { IUser } from '../types';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor() { }

  private users: IUser[] = []

  public getUsers(idRoom:string) {
    return this.users
  }
}
