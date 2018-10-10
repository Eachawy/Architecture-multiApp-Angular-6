import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { MultiSelectModule } from 'primeng/multiselect';
import { Ng2Webstorage } from 'ngx-webstorage';
import { HttpClientModule } from '@angular/common/http';

const primengRef = [
    CommonModule,
    FormsModule,
    AutoCompleteModule,
    MultiSelectModule,
    Ng2Webstorage,
    HttpClientModule
]


@NgModule({
    imports: [...primengRef, Ng2Webstorage.forRoot({ prefix: 'SVIS', separator: '-' })],
    exports: [...primengRef],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})


export class sharedLibModule {}