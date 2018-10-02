import { Component, OnInit, Compiler } from "@angular/core";

@Component({
    selector:'inspection-despatch',
    templateUrl:'./despatch.component.html',
    styleUrls: ['./despatch.component.scss']
})
export class despatchComponent implements OnInit {


    constructor(private _compiler:Compiler) {
        this._compiler.clearCache();
    }


    ngOnInit() {

    }
}