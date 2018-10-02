import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from "@angular/core";
import { MaterializeModule } from "angular2-materialize";


import { insComponent } from "../app/ins.component";
import { InsRoutingModule } from "./ins.router";
// import { noAccessComponent } from "../../../../lib/general/no_access/noAccess.component";
// import { notFoundPageComponent } from "../../../../lib/general/notFoundPage/notFoundPage.component";

import { generalModule } from "../../../../lib/general/general.modul";



@NgModule({
  declarations: [
    insComponent,
    // noAccessComponent,
    // notFoundPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterializeModule,
    generalModule,
    InsRoutingModule
    
  ],
  providers: [],
  bootstrap: [insComponent]
})
export class AppModule { }
