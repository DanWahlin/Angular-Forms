import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { APP_PROVIDERS } from './app.providers';
import { BasicFormComponent } from './basicForm/basicForm.component';
import { TemplateFormComponent } from './templateForm/templateForm.component';
import { ModelFormComponent } from './modelForm/modelForm.component';

@Component({ 
  selector: 'app-container',
  templateUrl: 'app/app.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: APP_PROVIDERS
})
@RouteConfig([
  { path: '/basicForm',  name: 'BasicForm',  component: BasicFormComponent, useAsDefault: true },
  { path: '/templateform',  name: 'TemplateForm',  component: TemplateFormComponent },
  { path: '/modelform',     name: 'ModelForm',     component: ModelFormComponent    }
])
export class AppComponent { }
