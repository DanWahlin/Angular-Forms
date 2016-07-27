import { provideRouter, RouterConfig } from '@angular/router';

import { BasicFormComponent } from './basicForm/basicForm.component';
import { TemplateFormComponent } from './templateForm/templateForm.component';
import { ModelFormComponent } from './modelForm/modelForm.component';

const APP_ROUTES: RouterConfig = [
  { path: '', pathMatch:'full', redirectTo: '/basicform' },
  { path: 'basicform',  component: BasicFormComponent },
  { path: 'templateform',  component: TemplateFormComponent },
  { path: 'modelform',     component: ModelFormComponent    }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(APP_ROUTES)
];