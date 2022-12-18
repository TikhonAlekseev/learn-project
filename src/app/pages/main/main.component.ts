import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private authService:AuthService){
    this.isAuth = this.authService.isAuth;
  }

  isAuth = false;

  ngOnInit(): void {
  }

}