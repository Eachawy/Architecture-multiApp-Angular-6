import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { layoutModule } from '../../../../../lib/common/layouts/layout.module';
import { rootComponent, testRoute, test_1Component, test_2Component } from '.';
import { coreModule } from "../../../../../lib/common";


@NgModule({
    declarations: [
        rootComponent, test_1Component, test_2Component
    ],
    imports: [
        CommonModule,
        layoutModule,
        RouterModule.forChild(testRoute),
        coreModule
        
    ],
    entryComponents: [rootComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class testModule { }