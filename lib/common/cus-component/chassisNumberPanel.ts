import {
        Component,
        OnInit,
        forwardRef,
        Input,
        ViewChild,
        ElementRef,
        Renderer2,
        Output,
        EventEmitter, } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';

import * as $ from 'jquery';


@Component({
    selector: 'chassisNumber',
    template: `
        <div  *ngIf="multiple" class="chassisNumberStyle">
            <input type="text" maxlength="17" (input)="onKeydown($event)" tabIndex="1" >
            <input type="text" maxlength="1" (input)="onKeydown($event)" tabIndex="2" [disabled]="disabled">
            <input type="text" maxlength="1" (input)="onKeydown($event)" tabIndex="3" [disabled]="disabled">
            <input type="text" maxlength="1" (input)="onKeydown($event)" tabIndex="4" [disabled]="disabled">
            <input type="text" maxlength="1" (input)="onKeydown($event)" tabIndex="5" [disabled]="disabled">
            <input type="text" maxlength="1" (input)="onKeydown($event)" tabIndex="6" [disabled]="disabled">
            <input type="text" maxlength="1" (input)="onKeydown($event)" tabIndex="7" [disabled]="disabled">
            <input type="text" maxlength="1" (input)="onKeydown($event)" tabIndex="8" [disabled]="disabled">
            <input type="text" maxlength="1" (input)="onKeydown($event)" tabIndex="9" [disabled]="disabled">
            <input type="text" maxlength="1" (input)="onKeydown($event)" tabIndex="10" [disabled]="disabled">
            <input type="text" maxlength="1" (input)="onKeydown($event)" tabIndex="11" [disabled]="disabled">
            <input type="text" maxlength="1" (input)="onKeydown($event)" tabIndex="12" [disabled]="disabled">
            <input type="text" maxlength="1" (input)="onKeydown($event)" tabIndex="13" [disabled]="disabled">
            <input type="text" maxlength="1" (input)="onKeydown($event)" tabIndex="14" [disabled]="disabled">
            <input type="text" maxlength="1" (input)="onKeydown($event)" tabIndex="15" [disabled]="disabled">
            <input type="text" maxlength="1" (input)="onKeydown($event)" tabIndex="16" [disabled]="disabled">
            <input type="text" maxlength="1" (input)="onKeydown($event)" tabIndex="17" [disabled]="disabled">
        </div>
        <div *ngIf="!multiple">
            <input
                #inputElement
                [value]="value"
                [type]="type"
                [id]="id"
                [placeholder]="placeholder"
                [disabled]="disabled"
                (change)="onChange($event)"
                (keyup)="onKeyup($event)"
                (blur)="onBlur($event)">
        </div>
    `,
    styles: ['.chassisNumberStyle input {width: calc(91% / 18);margin-right:0.5%; text-align:center;}'],
    providers: [
        [
            { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => chassisNumberPanel), multi: true },
            // { provide: NG_VALIDATORS, useExisting: forwardRef(() => chassisNumberPanel), multi: true }
          ]
      ]
})

export class chassisNumberPanel implements OnInit, ControlValueAccessor {

    value = '';
    @Input() type: string;
    @Input() id: string;
    @Input() placeholder: string;
    chassisNumber = '';

    @Input() multiple: Boolean;
    @Output() selected = new EventEmitter<string>();
    @Input() disabled: boolean;


    // ------------------------------------------------ Implementation Custom component
    constructor (private _renderer: Renderer2) {}


    @ViewChild('inputElement') private _inputElement: ElementRef;
    get inputElement(): ElementRef { return this._inputElement; }
    private _onChange = (_: any) => {};
    private _onTouched = () => {};
    writeValue(obj: any): void { this.value = obj; }
    registerOnChange(fn: any): void { this._onChange = fn; }
    registerOnTouched(fn: any): void { this._onTouched = fn; }
    setDisabledState?(isDisabled: boolean): void { this._renderer.setProperty(this._inputElement.nativeElement, 'disabled', isDisabled); }
    onChange(event: any) { this._onChange(event.target.value); }
    onKeyup(event: any) { this._onChange(event.target.value); }
    onBlur(event: any) { this._onTouched(); }
    // ------------------------------------------------





    ngOnInit () {




     }
    onKeydown($event) {
        const pasteChassNumber = $('[tabindex="1"]').val().toString().replace(/\s/g, '');
        if ( pasteChassNumber.length > 1 ) {
            this.splitString (pasteChassNumber);
        } else {
            if ($event.target.tabIndex < 17 ) {
                $event.target.value = $event.target.value.toUpperCase();
                $('[tabindex="' + ($event.target.tabIndex + 1) + '"]').prop('disabled', false).focus();
                this.cubesData ();
            } else {
                $event.target.value = $event.target.value.toUpperCase();
                $('[tabindex="' + $event.target.tabIndex + '"]').blur();
                this.cubesData ();
            }
        }
    }
    splitString (CNum) {
        let CAV;
        for (let i = 0; i < CNum.length; i++) {
            CAV = CNum.charAt(i).toUpperCase();
             if (CAV === '1' || CAV === 'I' || CAV === 'Q' || CAV === '0' || CAV === 'O' ) {
                $('[tabindex="' + i + '"]').addClass('higlight');
            } else {
                $('[tabindex="' + i + '"]').removeClass('higlight');
            }
            this.chassisNumber += CAV;
            $('[tabindex="' + (i + 1) + '"]').val(CAV);
            $('[tabindex="' + (i + 1) + '"]').prop('disabled', false);
        }
        $('[tabindex="1"]').blur();
        this.chassNumberValue();
    }
    cubesData () {
        this.chassisNumber = '';
        for (let i = 0; i < 17; i++) {
           this.chassisNumber += $('.chassisNumberStyle input').eq(i).val();
        }
        this.chassNumberValue();
    }
    chassNumberValue () { this.selected.emit(this.chassisNumber); }


}
