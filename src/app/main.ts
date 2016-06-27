import { bootstrap } from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

import { APP_ROUTER_PROVIDERS } from './app.routes';
import { AppComponent } from './app.component';

bootstrap(AppComponent, [ 
    APP_ROUTER_PROVIDERS,
    disableDeprecatedForms(),
    provideForms() 
]).then(
    success => console.log('AppComponent bootstrapped!'),
    error => console.log(error)
);
