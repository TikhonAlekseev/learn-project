import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanActivate {
  isAuth = false;

  constructor(
    private authSevice:AuthService, 
    private router:Router
  ){
    this.authSevice.isAuth.subscribe(value => {
      this.isAuth = value;
    })
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(!this.isAuth){
        this.router.navigate(['/login'])
        return false;
      }
      return true;
  }
}
