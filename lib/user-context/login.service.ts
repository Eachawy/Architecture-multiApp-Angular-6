import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class loginService {

  private isUserLoggedIn;
  private permissions:any [];

  constructor() {
    this.isUserLoggedIn = false;
    sessionStorage.setItem('globalPermissions', JSON.stringify(['','login']));
  }

  login() {
    this.isUserLoggedIn = true;
    sessionStorage.setItem('isUserLoggedIn', 'true');
    this.permissions = ['/welcome', '/inspection/despatch', '/inspection/inspection', '/inspection/payment', 'VTP_REQ_CREATE_11'];
    sessionStorage.setItem('permissions', JSON.stringify(this.permissions));
  }

  logout() {
    this.isUserLoggedIn = false;
    sessionStorage.setItem('isUserLoggedIn', 'false');
    sessionStorage.setItem('permissions' , null);
    
  }

  isUserLoginIn() {
    const isUserLoggedIn = sessionStorage.getItem('isUserLoggedIn');
    return isUserLoggedIn;
  }
  
  hasPermission(url: string[]) {
    let permissions: any[] = JSON.parse(sessionStorage.getItem('permissions'));
    //let permissions: any[] = this.permissions;
    let approve: boolean = false;
    if (permissions){
      url.forEach((e1)=>permissions.forEach((e2)=> {
          if(e1 === e2){
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
    //console.log('URL : ' + url + ' hasPremission : ' + (permissions.indexOf(url) > -1) );

    // console.log(permissions);
    // console.log('URL : ' + url + ' hasPremission : ' + approve );
    
    return approve ;
  }

}
