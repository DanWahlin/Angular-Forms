import { Routes, RouterModule } from '@angular/router';

import { BasicFormComponent } from './basicForm/basicForm.component';
import { TemplateFormComponent } from './templateForm/templateForm.component';
import { ReactiveFormComponent } from './reactiveForm/reactiveForm.component';
import { StarterTemplateFormComponent } from './starterTemplateForm/starterTemplateForm.component';
import { StarterReactiveFormComponent } from './starterReactiveForm/starterReactiveForm.component';

const app_routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: '/startertemplateform' },
  { path: 'startertemplateform', component: StarterTemplateFormComponent    },
  { path: 'starterreactiveform', component: StarterReactiveFormComponent },
  { path: 'basicform',  component: BasicFormComponent },
  { path: 'templateform',  component: TemplateFormComponent },
  { path: 'reactiveform',     component: ReactiveFormComponent    }
];

export const app_routing = {
  routes: RouterModule.forRoot(app_routes),
  components: [ 
                StarterTemplateFormComponent, StarterReactiveFormComponent,
                BasicFormComponent, TemplateFormComponent, ReactiveFormComponent
              ]
};