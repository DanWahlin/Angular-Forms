import { Component, Host } from '@angular/core';
import { NgForm } from '@angular/forms';

//Example usage: <show-error control="name" [errors]="['required']"></show-error>
@Component({
  selector: 'show-error', 
  inputs: ['controlPath: control', 'errorTypes: errors'],
  template: `
    <div class="alert alert-danger" *ng-if="errorMessage !== null">{{errorMessage}}</div>
  `
})
export class ShowError {
  ngForm: NgForm;
  controlPath: string;
  errorTypes: string[];
  errors: any = {'required': 'This field is required'};

  constructor(@Host() ngForm: NgForm) { 
    this.ngForm = ngForm; 
  }

  get errorMessage(): string {
    var control = this.ngForm.form.get(this.controlPath);
    if (control !== undefined && control !== null && control.touched) {
      for (let errorType of this.errorTypes) {
        if (control.hasError(errorType)) {
          return this._errorMessage(errorType);
        }
      }
    }
    return null;
  }

  private _errorMessage(errorType: string): string {
    return this.errors[errorType];
  }
}