import { provide, bind } from '@angular/core';
import { FORM_PROVIDERS, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ROUTER_PROVIDERS } from '@angular/router';

export const APP_PROVIDERS = [
    FORM_PROVIDERS,
    ROUTER_PROVIDERS,
    bind(LocationStrategy).toClass(HashLocationStrategy)
];