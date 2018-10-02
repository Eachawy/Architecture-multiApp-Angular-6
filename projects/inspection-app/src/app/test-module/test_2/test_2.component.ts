import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'test_2',
    template: `
        <div>
            <p>
                {{ "Despatch.CDespatch" | translate }} test 2
            </p>
        </div>
    `,
    styles: []
})
export class test_2Component implements OnInit {


    constructor() {
    }


    ngOnInit() {

    }
}