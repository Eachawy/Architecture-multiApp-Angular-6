import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MaterializeModule } from "angular2-materialize";

import { CISAppRoutingModule } from './app.routing.module';
import { appComponent } from './app.component';


import { generalModule } from "../../lib/general/general.modul";




@NgModule({
  declarations: [
    appComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterializeModule,
    CISAppRoutingModule,
    generalModule,
  ],
  providers: [],
  bootstrap: [appComponent]
})
export class AppModule { }
