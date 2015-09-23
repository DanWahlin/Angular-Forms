import { bootstrap, bind, FORM_BINDINGS } from 'angular2/angular2';
import { ROUTER_BINDINGS, LocationStrategy, HashLocationStrategy } from 'angular2/router';
import {AppComponent} from './app.component';

bootstrap(AppComponent, [
	ROUTER_BINDINGS,
	FORM_BINDINGS,
 	bind(LocationStrategy).toClass(HashLocationStrategy)
]).then(
    success => console.log('AppComponent bootstrapped!'),
    error => console.log(error)
);
