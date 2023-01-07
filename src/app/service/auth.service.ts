import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccessUserData, UserData } from '../types';
import { API_URL } from '../constants';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor( 
    private http:HttpClient,
    private router:Router
  ){}

  currentUser = new BehaviorSubject({ id:'', username:'', email:'' })

  isAuth = new BehaviorSubject(false);

  private setCurrentUser(data:AccessUserData) {
    this.isAuth.next(true);
    this.currentUser.next({ id:data['id'], username:data["username"], email:data["email"] });
    this.router.navigate([''])
    localStorage.setItem('token', JSON.stringify(data?.['accessToken']))
  }

  login(user: UserData){
    this.http.post<AccessUserData>(`${API_URL}/auth/login`,user, { withCredentials:true }).subscribe((data) => {
      if(data?.['accessToken']){
        this.setCurrentUser(data);
      }else{
        console.log("Ошибка авторизации")
      }
    })
  };

  logout(){
    this.http.get<AccessUserData>(`${API_URL}/auth/logout`).subscribe((data) => {
      if(data){
        localStorage.removeItem("token")
        this.router.navigate(['login'])
      }else{
        console.log("Ошибка выхода")
      }
    })
  };

  regist(user: UserData){
    this.http.post<AccessUserData>(`${API_URL}/auth/registration`, user, { withCredentials:true }).subscribe((data) => {
      if(data?.['accessToken']){
        this.setCurrentUser(data);
      }else{
        console.log("Ошибка регистрации")
      }
    })
  };

    checkAuth(){
          this.http.get<AccessUserData>(`${API_URL}/auth/refresh`, { withCredentials:true }).subscribe((data) => {
          this.setCurrentUser(data);
    })
  }
}
