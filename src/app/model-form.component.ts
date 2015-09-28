import {
  FORM_DIRECTIVES,
  Validators,
  NgFormModel,
  FormBuilder,
  NgIf,
  NgFor,
  Component,
  Directive,
  View,
  Host
} from 'angular2/angular2';

import { Hero } from './hero';

@Component({selector: 'show-error', properties: ['controlPath: control', 'errorTypes: errors']})
@View({
  template: `
    <div class="alert alert-danger" *ng-if="errorMessage !== null">{{errorMessage}}</div>
  `,
  directives: [NgIf]
})
//This class requires NgFormModel to be injected versus NgForm (as in show-error.component.ts)
export class ShowError {
  ngForm: NgFormModel;
  controlPath: string;
  errorTypes: string[];
  errors: any = {'required': 'This field is required'};

  constructor(@Host() ngForm: NgFormModel) { this.ngForm = ngForm; }

  get errorMessage(): string {
    var control: ng.AbstractControl = this.ngForm.form.find(this.controlPath);
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


@Component({selector: 'model-driven-form'})
@View({
  templateUrl: 'app/model-form.component.html',
  directives: [FORM_DIRECTIVES, NgFor, ShowError]
})
export class ModelFormComponent {
  form: ng.ControlGroup;
  model: Hero;  
  powers: string[];
  submitted: boolean = false;
  
  constructor(fb: FormBuilder) {
      this.model = new Hero(18, 'Dr IQ', 'Really Smart', 'Chuck Overstreet');
      
      this.powers = ['Really Smart', 'Super Flexible', 
                     'Hypersound', 'Weather Changer'];                     
                     
      this.form = fb.group({
        'name':     [this.model.name, Validators.required],
        'alterEgo': [this.model.alterEgo, Validators.required],
        'power':    [this.model.power, Validators.required]
      });
                     
  }

  onSubmit(): void {
    this.submitted = true;
  }
}