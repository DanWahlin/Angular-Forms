import { Routes, RouterModule } from '@angular/router';

import { BasicFormComponent } from './basicForm/basicForm.component';
import { TemplateFormComponent } from './templateForm/templateForm.component';
import { ModelFormComponent } from './modelForm/modelForm.component';

const app_routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: '/basicform' },
  { path: 'basicform',  component: BasicFormComponent },
  { path: 'templateform',  component: TemplateFormComponent },
  { path: 'modelform',     component: ModelFormComponent    }
];

export const app_routing = RouterModule.forRoot(app_routes);