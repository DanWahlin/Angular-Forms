import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'starter-reactive-form',
    templateUrl: 'starterReactiveForm.component.html'
})
export class StarterReactiveFormComponent implements OnInit {
    customerForm: FormGroup;
    customer: any;
    message: string;
    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() { 
        this.customer = {
            firstName: 'Tina Reactive'
        };

        this.customerForm = this.formBuilder.group({
            firstName: [this.customer.firstName, Validators.required ]
        });
    }

    onSubmit() {
        this.message = 'You typed: ' + this.customer.firstName;
    }

}