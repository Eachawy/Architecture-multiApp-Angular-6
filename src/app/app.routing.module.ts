import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { noAccessComponent } from "../../lib/general/no_access/noAccess.component";
import { notFoundPageComponent } from "../../lib/general/notFoundPage/notFoundPage.component";
import { loginComponent } from "../../lib/general/login/login.component";

import { AuthguardGuard } from "../../lib/common/auth/authguard.guard";

const applicationRout : Routes =[
    {
        path: '',
        component: loginComponent
    },
    {
        path: 'welcome',
        canActivate: [AuthguardGuard],
        loadChildren: './welcome/welcome.module#CisWelcomeModule'
    },
    {
        path: '**',
        component: notFoundPageComponent
    }



    // {
    //     path: 'no-access',
    //     component: noAccessComponent
    // }

]


@NgModule({
    imports:[
        RouterModule.forRoot(
            applicationRout
            ,
            { useHash: true}
        )
    ],
    exports: [RouterModule]
})

export class CISAppRoutingModule {}