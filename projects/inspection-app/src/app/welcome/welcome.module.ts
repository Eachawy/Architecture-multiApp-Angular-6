import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { welcomeComponent, Welcome_ROUTE } from '.';

import { layoutModule } from "../../../../../lib/common/layouts/layout.module";


@NgModule({
    declarations: [welcomeComponent],
    imports: [
        CommonModule,
        layoutModule,
        RouterModule.forChild([Welcome_ROUTE])
    ]
})

export class CisWelcomeModule { }