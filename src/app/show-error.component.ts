import {
  FORM_DIRECTIVES,
  NgForm,
  FormBuilder,
  NgIf,
  Component,
  View,
  Host
} from 'angular2/angular2';

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
export class ShowError {
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