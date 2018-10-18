import { Injectable } from '@angular/core';
import { AuthServerProvider } from '../common/auth/auth.jwt.services';

@Injectable({ providedIn: 'root' })
export class loginService {

  private isUserLoggedIn;
  private permissions: any [];

  constructor(private authServerProvider: AuthServerProvider) {
    this.isUserLoggedIn = false;
    sessionStorage.setItem('globalPermissions', JSON.stringify(['', 'login']));
  }

  login(credentials, callback?) {
    return new Promise ((resolve, reject) => {
      this.authServerProvider.FirstAuth(credentials).subscribe(data => {
        this.isUserLoggedIn = true;
        sessionStorage.setItem('isUserLoggedIn', 'true');
        this.permissions = ['/welcome', '/inspection/despatch', '/inspection/inspection', '/inspection/payment', 'VTP_REQ_CREATE_11'];
        sessionStorage.setItem('permissions', JSON.stringify(this.permissions));
        resolve(data);
      },
      err => {
        debugger;
          this.logout();
          console.log('error');
          reject(err);
      });

    });


  }

  logout() {
    this.isUserLoggedIn = false;
    sessionStorage.setItem('isUserLoggedIn', 'false');
    sessionStorage.setItem('permissions' , null);
    window.location.href = '/';
    // this.router.navigate(['/']);
  }

  isUserLoginIn() {
    const isUserLoggedIn = sessionStorage.getItem('isUserLoggedIn');
    return isUserLoggedIn;
  }

  hasPermission(url: string[]) {
    const permissions: any[] = JSON.parse(sessionStorage.getItem('permissions'));
    // let permissions: any[] = this.permissions;
    let approve = false;
    if (permissions) {
      url.forEach((e1) => permissions.forEach((e2) => {
          if (e1 === e2) {
              approve = true;
              return false;
          }
        }
      ));
    }

    // if(permissions === null){
    //   let globalPermissions: any[] = JSON.parse(sessionStorage.getItem('globalPermissions'));
    //   return  (globalPermissions.indexOf(url) > -1) ;
    // }
    // console.log('URL : ' + url + ' hasPremission : ' + (permissions.indexOf(url) > -1) );

    // console.log(permissions);
    // console.log('URL : ' + url + ' hasPremission : ' + approve );
    return approve ;
  }

}
