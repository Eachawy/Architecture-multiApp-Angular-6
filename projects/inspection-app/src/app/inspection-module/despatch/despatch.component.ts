import { Component, OnInit, Compiler, ViewChild } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
@Component({
    selector: 'inspection-despatch',
    templateUrl: './despatch.component.html',
    styleUrls: ['./despatch.component.scss']
})
export class despatchComponent implements OnInit {

    @ViewChild ('f') TDForm: NgForm;
    username = 'Hello';


    DespatchFG: FormGroup;
    dataChassNumber = '465werwerw654';
    constructor(private _compiler: Compiler) {

     }



    ngOnInit () {
        this.DespatchFG = new FormGroup ({
            'chassis-no-1': new FormControl(''),
            'chassisNumber': new FormControl('hello')
        });
    }
    onSubmitFG () {
        console.log(this.DespatchFG.value);
    }
    onSubmit (form: any) {
        console.log(form.value);
        console.log(this.TDForm.value);
        console.log(this.username);
    }

    chassNumberValue ($event) {
        this.DespatchFG.patchValue({
            'chassisNumber': $event
        });
    }
}