import { bootstrap, bind, FORM_BINDINGS } from 'angular2/angular2';
import { routerBindings, LocationStrategy, HashLocationStrategy } from 'angular2/router';
import {AppComponent} from './app.component';

bootstrap(AppComponent, [
	routerBindings(AppComponent),
	FORM_BINDINGS,
 	bind(LocationStrategy).toClass(HashLocationStrategy)
]).then(
    success => console.log('AppComponent bootstrapped!'),
    error => console.log(error)
);
