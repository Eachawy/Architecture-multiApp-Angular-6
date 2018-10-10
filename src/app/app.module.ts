import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Injector } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { CISAppRoutingModule } from './app.routing.module';
import { appComponent } from './app.component';
import { Ng2Webstorage, LocalStorageService, SessionStorageService } from 'ngx-webstorage';

import { AuthInterceptor } from '../../lib/common/auth/auth.interceptor';
import { AuthExpiredInterceptor } from '../../lib/common/auth/auth.expired.inerceptor';
import { generalModule } from '../../lib/general/general.modul';




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
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
      deps: [LocalStorageService, SessionStorageService]
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthExpiredInterceptor,
      multi: true,
      deps: [Injector]
    }
  ],
  bootstrap: [appComponent]
})
export class AppModule { }
