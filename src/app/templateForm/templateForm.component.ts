import { Component, OnInit } from '@angular/core';

//import { ShowError } from './showError.component';
import { Hero } from '../shared/hero';

@Component({
  selector: 'template-driven-form',
  templateUrl: './templateForm.component.html'
})
export class TemplateFormComponent implements OnInit {
  model: Hero;  
  powers: string[];
  submitted: boolean = false;
  
  constructor() { }
  
  ngOnInit() {
      this.model = new Hero(18, 'Tornado', 'Turbulent Breeze', 'Willie Wind');

      this.powers = ['Really Smart', 'Turbulent Breeze', 
                     'Super Hot', 'Weather Changer'];
  }

  onSubmit() {
    this.submitted = true;
  }
}