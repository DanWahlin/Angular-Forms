import { bootstrap, bind, FORM_PROVIDERS } from 'angular2/angular2';
import { ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy } from 'angular2/router';
import {AppComponent} from './app.component';

bootstrap(AppComponent, [
	ROUTER_PROVIDERS,
	FORM_PROVIDERS,
 	bind(LocationStrategy).toClass(HashLocationStrategy)
]).then(
    success => console.log('AppComponent bootstrapped!'),
    error => console.log(error)
);
