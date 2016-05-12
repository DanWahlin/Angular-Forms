import { Component } from '@angular/core';
import { Routes, Router, ROUTER_DIRECTIVES } from '@angular/router';

import { APP_PROVIDERS } from './app.providers';
import { BasicFormComponent } from './basicForm/basicForm.component';
import { TemplateFormComponent } from './templateForm/templateForm.component';
import { ModelFormComponent } from './modelForm/modelForm.component';

@Component({ 
  moduleId: module.id,
  selector: 'app-container',
  templateUrl: 'app.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: APP_PROVIDERS
})
@Routes([
  { path: '/basicform',  component: BasicFormComponent },
  { path: '/templateform',  component: TemplateFormComponent },
  { path: '/modelform',     component: ModelFormComponent    }
])
export class AppComponent { 
  
  constructor(private router: Router) {
    this.router.navigate(['basicform']);
  }
  
}
