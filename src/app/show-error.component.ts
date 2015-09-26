import {
  FORM_DIRECTIVES,
  NgForm,
  FormBuilder,
  NgIf,
  Component,
  View,
  Host
} from 'angular2/angular2';

//Example usage: <show-error control="name" [errors]="['required']"></show-error>
@Component({selector: 'show-error', properties: ['controlPath: control', 'errorTypes: errors']})
@View({
  template: `
    <div class="alert alert-danger" *ng-if="errorMessage !== null">{{errorMessage}}</div>
  `,
  directives: [NgIf]
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