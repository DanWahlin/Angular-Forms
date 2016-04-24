import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { APP_PROVIDERS } from './app.providers';
import { TemplateFormComponent } from './templateForm/template-form.component';
import { ModelFormComponent } from './modelForm/model-form.component'

@Component({ 
  selector: 'app-container',
  templateUrl: 'app/app.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: APP_PROVIDERS
})
@RouteConfig([
  { path: '/templateform',  name: 'TemplateForm',  component: TemplateFormComponent, useAsDefault: true },
  { path: '/modelform',     name: 'ModelForm',     component: ModelFormComponent    }
])
export class AppComponent { }
