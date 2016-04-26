import { Component, OnInit, Host } from 'angular2/core';

@Component({
  selector: 'basic-template-driven-form',
  templateUrl: 'app/basicForm/basicForm.component.html'
})
export class BasicFormComponent implements OnInit {
  form: any;
  powers: string[];
  submitted: boolean = false;
  
  constructor() { }
  
  ngOnInit() {
    this.powers = ['Really Smart', 'Turbulent Breeze', 
                'Super Hot', 'Weather Changer'];
  }

  onSubmit(form: any)  {
    this.submitted = true;
    this.form = form;
  }
}