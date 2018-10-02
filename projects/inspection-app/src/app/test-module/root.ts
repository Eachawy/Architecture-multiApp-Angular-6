import { Component } from "@angular/core";

@Component({
    selector:'root',
    template:`
        <master>
            <router-outlet></router-outlet>
        </master>
    `
})
export class rootComponent {}