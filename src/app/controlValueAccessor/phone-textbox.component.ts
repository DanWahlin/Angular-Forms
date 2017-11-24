import { Component, Output, EventEmitter, forwardRef, OnChanges } from "@angular/core";
import { NgControl, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl, Validators } from "@angular/forms";
import { AbstractControl } from "@angular/forms/src/model";
import { ValidationErrors } from "@angular/forms/src/directives/validators";

@Component({ 
    selector: 'phone-textbox', 
    template: `
        <input type="text" class="form-control" [value]="value" 
               (input)="onChange($event.target.value)" 
               (blur)="onTouched($event)" [disabled]="disabled" />
    `,
    styleUrls: ['./component-styles.css'],
    providers: [
        { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => PhoneTextboxComponent), multi: true },
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => PhoneTextboxComponent), multi: true }
    ]
})
export class PhoneTextboxComponent implements ControlValueAccessor {
    private onChange = (_: any) => { };
    private onTouched = (_: any) => { };
    private onValidate = (_: any) => { };
    value: string;
    disabled = false;

    constructor() {  }

    writeValue(value: any) { this.value = value; }

    registerOnChange(fn: (value: any) => void) { this.onChange = fn; }

    registerOnTouched(fn: any) { this.onTouched = fn; }    

    setDisabledState(disabled: boolean) { this.disabled = disabled; }

    validate(ctrl: AbstractControl) : ValidationErrors { 
        let requiredErrors = Validators.required(ctrl);
        let patternErrors = Validators.pattern(/^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/)(ctrl);
        if (!requiredErrors && !patternErrors) {
            return null;
        }

        return {
          required: requiredErrors,
          phone: patternErrors
        };
    }
}