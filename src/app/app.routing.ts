import { Routes, RouterModule } from '@angular/router';

import { BasicFormComponent } from './basicForm/basicForm.component';
import { TemplateFormComponent } from './templateForm/templateForm.component';
import { ReactiveFormComponent } from './reactiveForm/reactiveForm.component';
import { StarterFormComponent } from './starterForm/starterForm.component';
import { StarterReactiveFormComponent } from './starterReactiveForm/starterReactiveForm.component';

const app_routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: '/starterForm' },
  { path: 'starterform', component: StarterFormComponent    },
  { path: 'starterreactiveform', component: StarterReactiveFormComponent },
  { path: 'basicform',  component: BasicFormComponent },
  { path: 'templateform',  component: TemplateFormComponent },
  { path: 'reactiveform',     component: ReactiveFormComponent    }
];

export const app_routing = {
  routes: RouterModule.forRoot(app_routes),
  components: [ 
                StarterFormComponent, StarterReactiveFormComponent,
                BasicFormComponent, TemplateFormComponent, ReactiveFormComponent
              ]
};