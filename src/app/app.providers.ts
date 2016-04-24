import { provide, bind } from 'angular2/core';
import { FORM_PROVIDERS } from 'angular2/common';
import { ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy } from 'angular2/router';

export const APP_PROVIDERS = [
    FORM_PROVIDERS,
    ROUTER_PROVIDERS,
    bind(LocationStrategy).toClass(HashLocationStrategy)
];