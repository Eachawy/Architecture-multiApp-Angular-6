import { Component, OnInit, Renderer2 } from "@angular/core";
import { Router } from "@angular/router";
import { loginService } from '../../../../../lib/user-context/login.service';

@Component({
    selector:'CIS-Home',
    templateUrl:'./welcome.component.html',
    styleUrls: ['./welcome.component.scss'],
})

export class welcomeComponent implements OnInit {

    pageTitle: any;

    constructor(
        private router: Router, 
        private loginservice: loginService  ) {
        
    }

    go(){
        this.loginservice.login();
        this.router.navigate(['/inspection/despatch']);
    }

    ngOnInit(){

    }


}
