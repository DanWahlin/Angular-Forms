import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'update-on-form',
    templateUrl: './updateOn.component.html'
})
export class UpdateOnComponent implements OnInit {
    customer: any;
    message: string;

    constructor() { }

    ngOnInit() { 
        this.customer = {
            firstName: 'Fred Template'
        };
    }

    onSubmit() {
        this.message = 'You typed: ' + this.customer.firstName;
    }

}