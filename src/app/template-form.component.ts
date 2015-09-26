import {
  NgFor,
  Component,
  View,
  FORM_DIRECTIVES,
} from 'angular2/angular2';

import { ShowError } from './show-error.component';
import { Hero } from './hero';

@Component({selector: 'template-driven-form'})
@View({
  templateUrl: 'app/template-form.component.html',
  directives: [FORM_DIRECTIVES, NgFor, ShowError]
})
export class TemplateFormComponent {
  model: Hero;  
  submittedModel: Hero;
  powers: string[];
  submitted: boolean = false;
  
  constructor() {
      this.model = new Hero(18,'Dr IQ', 'Really Smart', 'Chuck Overstreet');

      this.powers = ['Really Smart', 'Super Flexible', 
                     'Super Hot', 'Weather Changer'];
                     
      this.initSubmittedModel();
  }
  
  initSubmittedModel() {
    this.submitted = false;
  }
  
  showForm(): void {
    this.initSubmittedModel();
  }

  onSubmit(): void {
    this.submitted = true;
  }
}