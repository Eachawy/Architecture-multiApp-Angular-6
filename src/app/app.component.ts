import { Component } from "@angular/core";
import { Router } from "@angular/router";
@Component({
    selector:'root',
    template: `<router-outlet></router-outlet>`
})
export class appComponent {
    // constructor(private router: Router){
    //     this.router.errorHandler = (error: any) => {
    //         this.router.navigate(['Error']);
    //     }
    // }
}