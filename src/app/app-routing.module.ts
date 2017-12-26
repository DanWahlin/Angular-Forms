import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicFormComponent } from './basicForm/basicForm.component';
import { TemplateFormComponent } from './templateForm/templateForm.component';
import { ReactiveFormComponent } from './reactiveForm/reactiveForm.component';
import { StarterTemplateFormComponent } from './starterTemplateForm/starterTemplateForm.component';
import { StarterReactiveFormComponent } from './starterReactiveForm/starterReactiveForm.component';
import { UpdateOnComponent } from './updateOn/updateOn.component';
import { ControlValueAccessorComponent } from './controlValueAccessor/controlValueAccessor.component';
import { ReactiveDynamicFormComponent } from './reactiveDynamicForm/reactive-dynamic-form.component';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: '/startertemplateform' },
  { path: 'startertemplateform', component: StarterTemplateFormComponent    },
  { path: 'starterreactiveform', component: StarterReactiveFormComponent },
  { path: 'basicform',  component: BasicFormComponent },
  { path: 'templateform',  component: TemplateFormComponent },
  { path: 'reactiveform',     component: ReactiveFormComponent  },
  { path: 'updateon', component: UpdateOnComponent },
  { path: 'controlvalueaccessor', component: ControlValueAccessorComponent },
  { path: 'reactivedynamicform', component: ReactiveDynamicFormComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
  static components = [ 
    StarterTemplateFormComponent, StarterReactiveFormComponent,
    BasicFormComponent, TemplateFormComponent, ReactiveFormComponent,
    ControlValueAccessorComponent, UpdateOnComponent, ReactiveDynamicFormComponent
  ];
}

