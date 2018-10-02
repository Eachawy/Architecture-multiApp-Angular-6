import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { MaterializeModule } from "angular2-materialize";
import { RouterModule } from '@angular/router';
import { NavbarComponent, HeaderComponent, FooterComponent, MasterComponent } from '.';
import { coreModule } from "../core.module";

const layoutfiles = [NavbarComponent, HeaderComponent, FooterComponent, MasterComponent];
@NgModule({
    declarations: [layoutfiles],
    imports: [
        CommonModule,
        RouterModule, 
        coreModule,
        MaterializeModule
    ],
    exports: [layoutfiles]
})

export class layoutModule {}