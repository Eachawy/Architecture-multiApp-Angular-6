import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from "@angular/router";
import { LanguageService } from "../../language-service/language.service";
import { loginService } from '../../../user-context/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  languages : any[] ;
  themes : any [];
  navObj : any [];

  constructor(
      private languageService: LanguageService, 
      private renderer: Renderer2,
      private LoginService: loginService,
      private router: Router  ) {


    // this.router.errorHandler = (error: any) => {
    //   this.router.navigate(['Error']); // or redirect to default route
    // }
    this.router.events.subscribe((val) => {
       this.languageService.translatetitle();
    });

  }

  ngOnInit(){
    this.renderer.addClass(document.body, 'theme-light');

    this.navObj = [
      { 'name': 'Home', 'url': '/welcome', 'child':[]},
      { 'name': 'inspection', 'child': [
        { 'name': 'Despatch', 'url': '/inspection/despatch', 'child': [] },
        { 'name': 'inspection', 'url': '/inspection/inspection', 'child': [] },
        { 'name': 'payment', 'url': '/inspection/payment', 'child': [] }
      ] },
      { 'name': 'test', 'child': [
        { 'name': 'test 1', 'url': '/test/test_1'},
        { 'name': 'test 2', 'url': '/test/test_2' }
      ] },
    ];

    this.languages = [
          { "lang": "English", "type": "en" },
          { "lang": "Frinsh", "type": "fr" },
          { "lang": "Arabic", "type": "ar" }
        ];
    this.themes = [
      { "name": "theme-light"},
      { "name": "theme-dark" }
    ]
  }

    onChangeLanguage(type){
      this.languageService.changeLanguage(type);
    }
    onChangeThemes (theme: string){
      this.renderer.removeAttribute(document.body, "class");
      this.renderer.addClass(document.body, theme);
    }

    onLogOut () {
      this.LoginService.logout();
    }
}

