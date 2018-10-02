import { Component, OnInit } from "@angular/core";
import { LanguageService } from "../../language-service/language.service";
import { Router } from "@angular/router";

@Component({
    selector:'titelpage',
    template:`
        <h1> {{TitelPage}} </h1>
    `,
    styles:[]
})

export class titlePageComponent implements OnInit {
    
    public TitelPage: string;
    
    constructor(private languageService: LanguageService) {
        
    }

    ngOnInit(){
        this.titPageInit();
    }



    titPageInit (){
        this.languageService.pageTitle.subscribe(pt => {
            setTimeout(() => {
                this.TitelPage = pt;
            }, 0);
        });
    }

}