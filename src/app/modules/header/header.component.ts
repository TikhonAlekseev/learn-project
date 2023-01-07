import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService) { }

  public username:string = "";
  public isAuth:boolean = false;

  ngOnInit(): void {
    this.authService.isAuth.subscribe((value => this.isAuth = value ))
    this.authService.currentUser.subscribe((user) => {
      this.username = user.username;
    })
  }

  handleLogout = () => {
    this.authService.logout();
  }
}
