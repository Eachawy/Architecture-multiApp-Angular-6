import { Component } from "@angular/core";



@Component({
    selector:'no-access',
    template:`
        <div>
            <h1> NO ACCESS </h1>
            <a routerLink="/welcome">Back To Home</a>
        </div>
    `,
    styles:[]
})
export class noAccessComponent {

    constructor(){

    }
}