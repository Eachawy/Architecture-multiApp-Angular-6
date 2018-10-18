import {
    Component,
    OnInit,
    forwardRef,
    Input,
    ViewChild,
    ElementRef,
    Renderer2, } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
selector: 'input-custom',
template: `
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
`,
styles: [],
providers: [
    [
        { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => inputCustompanel), multi: true },
        // { provide: NG_VALIDATORS, useExisting: forwardRef(() => chassisNumberPanel), multi: true }
      ]
  ]
})

export class inputCustompanel implements OnInit, ControlValueAccessor {

    value = '';
    @Input() type = 'text';
    @Input() id: string;
    @Input() placeholder = '';
    @Input() disabled: boolean;

    // ------------------------------------------------
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

    ngOnInit () { }

}
