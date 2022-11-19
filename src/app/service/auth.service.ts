import { Injectable } from '@angular/core';
import { UserData } from '../types';

export interface IAuthService {
  login:(user: UserData) => void;
  logout:(user: UserData) => void;
  regist:(user: UserData) => void;
  isAuth:boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService implements IAuthService{

  constructor() { }

  isAuth:boolean = false;

  login(user: UserData){
    console.log(user,'user')
  };

  logout(user: UserData){};

  regist(user: UserData){};
}
