import {
  NgFor,
  Component,
  View,
  FORM_DIRECTIVES,
} from 'angular2/angular2';

//import { ShowError } from './show-error.component';
import { Hero } from './hero';

@Component({
  selector: 'template-driven-form',
  templateUrl: 'app/template-form.component.html',
  directives: [FORM_DIRECTIVES, NgFor]
})
export class TemplateFormComponent {
  model: Hero;  
  powers: string[];
  submitted: boolean = false;
  
  constructor() {
      this.model = new Hero(18, 'Tornado', 'Turbulent Breeze', 'Willie Wind');

      this.powers = ['Really Smart', 'Turbulent Breeze', 
                     'Super Hot', 'Weather Changer'];
  }

  onSubmit() {
    this.submitted = true;
  }
}