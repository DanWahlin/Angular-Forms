import { Component, Output, EventEmitter, forwardRef } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR, AbstractControl, Validators, NG_VALIDATORS } from "@angular/forms";

@Component({ 
    selector: 'required-textbox', 
    template: `
        <input type="text" class="form-control" [value]="value" 
               (input)="onChange($event.target.value)" 
               (blur)="onTouched($event)" [disabled]="disabled" />
    `,
    styleUrls: ['./component-styles.css'],
    providers: [
        { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => RequiredTextboxComponent), multi: true },
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => RequiredTextboxComponent), multi: true }
    ]
})
export class RequiredTextboxComponent implements ControlValueAccessor {
    private onChange = (_: any) => { };
    private onTouched = (_: any) => { };
    value: string;
    disabled = false;

    constructor() {  }

    writeValue(value: any) { this.value = value; }

    registerOnChange(fn: (value: any) => void) { this.onChange = fn; }

    registerOnTouched(fn: any) { this.onTouched = fn; }

    setDisabledState(disabled: boolean) { this.disabled = disabled; }

    validate(ctrl: AbstractControl) { return Validators.required(ctrl); }
}