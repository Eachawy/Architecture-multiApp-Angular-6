import { Component, OnInit, Renderer2 } from "@angular/core";
import { Router } from "@angular/router";
import { loginService } from '../../user-context/login.service';
import { LanguageService } from '../../common/language-service/language.service';

@Component({
    selector:'CIS-Home',
    templateUrl:'./login.component.html',
    styleUrls: ['./login.component.scss'],
})

export class loginComponent implements OnInit {

    pageTitle: any;

    constructor(
        public languageService: LanguageService,
        private router: Router, 
        private loginservice: loginService  ) {
        
    }

    go(){
        this.loginservice.login();
        this.router.navigate(['/welcome']);
    }

    ngOnInit(){
    }


}
