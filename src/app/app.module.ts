import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { BasicFormComponent } from './basicForm/basicForm.component';
import { ReactiveFormComponent } from './reactiveForm/reactiveForm.component';
import { TemplateFormComponent } from './templateForm/templateForm.component';
import { app_routing } from './app.routing';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, app_routing ],
  declarations: [ AppComponent, BasicFormComponent, ReactiveFormComponent, TemplateFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }