import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild} from '@angular/router';
import { Observable } from 'rxjs';
import { loginService } from '../../user-context/login.service';

@Injectable({providedIn:'root'})
export class AuthguardGuard implements CanActivate, CanActivateChild {
  constructor(private loginservice: loginService , private router: Router){

  }

  private isUserLoginIn : any;
  private hasPermission : any;
  private pass : boolean = false;

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    this.onCheckAccess(state);
    return this.pass;
  }

  canActivateChild(
      next: ActivatedRouteSnapshot, 
      state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {


    this.onCheckAccess(state);
    return this.pass;
    //return this.canActivate(next, state);
  }


  onCheckAccess (state : any){
    this.isUserLoginIn = this.loginservice.isUserLoginIn();
    this.hasPermission = this.loginservice.hasPermission([state.url]);
    // console.log('next' + next);
    // console.log('url' + state.url);
    // console.log('router' + this.router);
    // return isUserLoginIn && hasPermission;
    if (!JSON.parse(this.isUserLoginIn)) {
      this.router.navigate(['/']);
      this.pass = false;
      console.log('Log-out');
      return false;
    }

    if (!this.hasPermission) {
        this.router.navigate(['/no-access']);
        this.pass = false;
        console.log('has no permission on this componant');
        return false;
      }

    this.pass = true;
  }


}
