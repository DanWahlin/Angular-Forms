import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'starter-form',
    templateUrl: 'starterForm.component.html'
})
export class StarterFormComponent implements OnInit {
    customer: any;
    message: string;

    constructor() { }

    ngOnInit() { 
        this.customer = {
            firstName: 'Fred'
        };
    }

    onSubmit() {
        this.message = 'You typed: ' + this.customer.firstName;
    }

}