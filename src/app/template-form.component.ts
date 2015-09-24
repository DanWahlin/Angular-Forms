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