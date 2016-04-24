import {
  Component,
  OnInit,
  Host
} from 'angular2/core';

import { ControlGroup, NgFormModel, FormBuilder, Validators } from 'angular2/common';

import { Hero } from '../shared/hero';

@Component({
  selector: 'show-error', 
  inputs: ['controlPath: control', 'errorTypes: errors'],
  template: `
    <div class="alert alert-danger" *ng-if="errorMessage !== null">{{errorMessage}}</div>
  `
})
//This class requires NgFormModel to be injected versus NgForm (as in show-error.component.ts)
export class ShowError {
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


@Component({
  selector: 'model-driven-form',
  templateUrl: 'app/modelForm/model-form.component.html',
  directives: [ShowError]
})
export class ModelFormComponent {
  form: ControlGroup;
  model: Hero;  
  powers: string[];
  submitted: boolean = false;
  
  constructor(private _formBuilder: FormBuilder) {
      this.model = new Hero(18, 'Dr IQ', 'Really Smart', 'Chuck Overstreet');
      
      this.powers = ['Really Smart', 'Super Flexible', 
                     'Hypersound', 'Weather Changer'];                     
                     
      this.form = this._formBuilder.group({
        name:     [this.model.name, Validators.required],
        alterEgo: [this.model.alterEgo, Validators.required],
        power:    [this.model.power, Validators.required]
      });
                     
  }

  onSubmit(): void {
    this.submitted = true;
  }
}