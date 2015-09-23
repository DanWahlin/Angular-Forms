import {
  NgIf,
  NgFor,
  Component,
  Directive,
  NgControl,
  View,
  Host,
  Binding,
  FORM_DIRECTIVES,
  Validators,
  NgForm,
} from 'angular2/angular2';

//import {RegExpWrapper, print, isPresent, CONST_EXPR} from 'angular2/src/core/facade/lang';

import { Hero } from './hero';

/**
 * Custom validator.
 */
// function creditCardValidator(c: any) {
//   if (isPresent(c.value) && RegExpWrapper.test(/^\d{16}$/g, c.value)) {
//     return null;
//   } else {
//     return {"invalidCreditCard": true};
//   }
// }

// const creditCardValidatorBinding =
//     CONST_EXPR(new Binding(NG_VALIDATORS, {toValue: creditCardValidator, multi: true}));

// @Directive({selector: '[credit-card]', bindings: [creditCardValidatorBinding]})
// class CreditCardValidator {
// }

function isPresent(obj: any): boolean {
  return obj !== undefined && obj !== null;
}

@Component({selector: 'show-error', properties: ['controlPath: control', 'errorTypes: errors']})
@View({
  template: `
    <div class="alert alert-danger" *ng-if="errorMessage !== null">{{errorMessage}}</div>
  `,
  directives: [NgIf]
})
class ShowError {
  ngForm: NgForm;
  controlPath: string;
  errorTypes: string[];

  constructor(@Host() ngForm: NgForm) { 
    this.ngForm = ngForm; 
  }

  get errorMessage(): string {
    var control = this.ngForm.form.find(this.controlPath);
    if (isPresent(control) && control.touched) {
      for (var i = 0; i < this.errorTypes.length; ++i) {
        if (control.hasError(this.errorTypes[i])) {
          return this._errorMessage(this.errorTypes[i]);
        }
      }
    }
    return null;
  }

  private _errorMessage(code: string): string {
    var config: any = {'required': this.controlPath + ' is required'};
    return config[code];
  }
}


@Component({selector: 'template-driven-form'})
@View({
  templateUrl: 'app/template-form.component.html',
  directives: [FORM_DIRECTIVES, NgFor, ShowError]
})
export class TemplateFormComponent {
  model: Hero;  
  submittedModel: Hero;
  powers: string[];
  
  constructor() {
      this.model = new Hero({
        'id': 18,
        'name': 'Dr IQ',
        'alterEgo': 'Chuck Overstreet',
        'power': 'Really Smart'
      });
      
      this.powers = ['Really Smart', 'Super Flexible', 
                     'Super Hot', 'Weather Changer'];
                     
      this.initSubmittedModel();
  }
  
  initSubmittedModel() {
    this.submittedModel = new Hero({id:0, name:'Not a hero yet'});
  }
  
  showForm(): void {
    this.initSubmittedModel();
  }

  onSubmit(): void {
    this.submittedModel = this.model.clone();
  }
}