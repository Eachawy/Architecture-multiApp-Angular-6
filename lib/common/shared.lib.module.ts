import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { MultiSelectModule } from 'primeng/multiselect';

const primengRef = [
    CommonModule,
    FormsModule,
    AutoCompleteModule,
    MultiSelectModule
]


@NgModule({
    imports: [...primengRef],
    exports: [...primengRef],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})


export class sharedLibModule {}