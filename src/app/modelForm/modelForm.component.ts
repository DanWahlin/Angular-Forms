import { Component, OnInit, Host } from 'angular2/core';
import { ControlGroup, NgFormModel, FormBuilder, Validators } from 'angular2/common';

import { ValidationService } from '../shared/validation.service';
import { ShowModelError } from '../shared/showModelError.component';
import { Hero } from '../shared/hero';

@Component({
  selector: 'model-driven-form',
  templateUrl: 'app/modelForm/modelForm.component.html',
  directives: [ShowModelError]
})
export class ModelFormComponent implements OnInit {
  form: ControlGroup;
  model: Hero;  
  powers: string[];
  submitted: boolean = false;
  
  constructor(private _formBuilder: FormBuilder) { }
  
  ngOnInit() {
      this.model = new Hero(18, 'Dr IQ', 'Really Smart', 'Chuck Overstreet', 'iq@superhero.com');
      
      this.powers = ['Really Smart', 'Super Flexible', 
                     'Hypersound', 'Weather Changer'];                     
                     
      this.form = this._formBuilder.group({
        name:     [this.model.name, Validators.required],
        alterEgo: [this.model.alterEgo, Validators.required],
        email:    [this.model.email, Validators.compose([Validators.required, ValidationService.emailValidator])],
        power:    [this.model.power, Validators.required]
      });
  }

  onSubmit()  {
    this.submitted = true;
  }
}