import { bootstrap } from 'angular2/platform/browser';
import { bind, enableProdMode, provide } from 'angular2/core';
import { FORM_PROVIDERS } from 'angular2/common';
import { ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy } from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';

import { AppComponent } from './app.component';

//enableProdMode(); //Uncomment for production

bootstrap(AppComponent, [ 
    FORM_PROVIDERS, 
    ROUTER_PROVIDERS, 
    HTTP_PROVIDERS, 
    bind(LocationStrategy).toClass(HashLocationStrategy)
]).then(
    success => console.log('AppComponent bootstrapped!'),
    error => console.log(error)
);