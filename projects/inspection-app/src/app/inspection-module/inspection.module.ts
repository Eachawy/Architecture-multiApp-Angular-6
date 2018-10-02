import { NgModule, CUSTOM_ELEMENTS_SCHEMA, OnDestroy } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { layoutModule } from '../../../../../lib/common/layouts/layout.module';
import { rootComponent, inspectionRoute, despatchComponent, paymentComponent, inspectionComponent } from '.';
import { coreModule } from "../../../../../lib/common";


@NgModule({
    declarations: [
        rootComponent,
        despatchComponent,
        paymentComponent,
        inspectionComponent
    ],
    imports: [
        CommonModule,
        layoutModule,
        RouterModule.forChild(inspectionRoute),
        coreModule
        
    ],
    entryComponents: [rootComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class inspectionModule implements OnDestroy {

    ngOnDestroy(){
        console.log('Destroy');
    }
 }