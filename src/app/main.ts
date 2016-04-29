import { bootstrap } from '@angular/platform-browser-dynamic';
import { bind } from '@angular/core';
import { FORM_PROVIDERS } from '@angular/common';
import { ROUTER_PROVIDERS } from '@angular/router';
import {AppComponent} from './app.component';

bootstrap(AppComponent).then(
    success => console.log('AppComponent bootstrapped!'),
    error => console.log(error)
);
