import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'test_1',
    template: `
        <div>
            <p>
                {{ "Despatch.CDespatch" | translate }} test 1
            </p>
        </div>
    `,
    styles: []
})
export class test_1Component implements OnInit {


    constructor() {
    }


    ngOnInit() {

    }
}