import { Component, OnInit } from '@angular/core';
import { Hero } from '../shared/hero';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ValidationService } from '../shared/validation.service';

@Component({
    selector: 'update-on-form',
    templateUrl: './updateOn.component.html'
})
export class UpdateOnComponent implements OnInit {
    model: Hero;  
    submittedModel: Hero; 
    heroForm: FormGroup;
    powers: string[];
    templateSubmitted = false;
    reactiveSubmitted = false;
    
    constructor(private formBuilder: FormBuilder) { }
    
    ngOnInit() {
        this.model = new Hero(18, 'Dr IQ', 'Really Smart', 'Chuck Overstreet', 'iq@superhero.com');
  
        this.powers = ['Really Smart', 'Turbulent Breeze', 
                       'Super Hot', 'Weather Changer'];

        //This currently doesn't work when using FormBuilder to create a FormGroup that has updateOn
        //https://github.com/angular/angular/issues/19163
        // this.heroForm = this.formBuilder.group({
        //     //Can individually add updateOn to FormControls
        //     //name:     [this.model.name, { validators: Validators.required, updateOn: 'blur' }],
        //     name:     [this.model.name, Validators.required ],
        //     alterEgo: [this.model.alterEgo, Validators.required],
        //     email:    [this.model.email, [Validators.required, ValidationService.emailValidator]],
        //     power:    [this.model.power, Validators.required]
        // }, { updateOn: 'blur' });

        this.heroForm = new FormGroup({
            //Can individually add updateOn to FormControls
            //name:   new FormControl(this.model.name, { validators: Validators.required, updateOn: 'blur' }),
            name:     new FormControl(this.model.name, Validators.required ),
            alterEgo: new FormControl(this.model.alterEgo, Validators.required),
            email:    new FormControl(this.model.email, { validators: [Validators.required, ValidationService.emailValidator] }),
            power:    new FormControl(this.model.power, Validators.required)
        }, { updateOn: 'blur' });
    }

    updateOnForAll() {
        //this.heroForm.setValue({ updateOn: 'blue'});
    }
  
    submit() {
      this.templateSubmitted = true;
    }

    reactiveSubmit() {
        this.reactiveSubmitted = true;
        this.submittedModel = this.heroForm.value;
      }

}