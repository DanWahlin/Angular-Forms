import { Component, Host } from '@angular/core';
import { NgFormModel } from '@angular/common';

@Component({
  selector: 'show-model-error', 
  inputs: ['controlPath: control', 'errorTypes: errors'],
  template: `
    <div class="alert alert-danger" *ng-if="errorMessage !== null">{{errorMessage}}</div>
  `
})
//This class requires NgFormModel to be injected versus NgForm (as in show-error.component.ts)
export class ShowModelError {
  ngForm: NgFormModel;
  controlPath: string;
  errorTypes: string[];
  errors: any = {'required': 'This field is required'};

  constructor(@Host() ngForm: NgFormModel) { this.ngForm = ngForm; }

  get errorMessage(): string {
    var control = this.ngForm.form.find(this.controlPath);
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