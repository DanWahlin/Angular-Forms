import { Routes, RouterModule } from '@angular/router';

import { BasicFormComponent } from './basicForm/basicForm.component';
import { TemplateFormComponent } from './templateForm/templateForm.component';
import { ReactiveFormComponent } from './reactiveForm/reactiveForm.component';
import { StarterFormComponent } from './starterForm/starterForm.component';

const app_routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: '/basicform' },
  { path: 'starterform',     component: StarterFormComponent    },
  { path: 'basicform',  component: BasicFormComponent },
  { path: 'templateform',  component: TemplateFormComponent },
  { path: 'reactiveform',     component: ReactiveFormComponent    }
];

export const app_routing = RouterModule.forRoot(app_routes);