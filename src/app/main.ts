import { bootstrap } from 'angular2/platform/browser';
import { bind, enableProdMode, provide } from 'angular2/core';

import { APP_PROVIDERS } from './shared/app.providers';
import { AppComponent } from './app.component';

//enableProdMode(); //Uncomment for production

bootstrap(AppComponent, [ APP_PROVIDERS ])
  .then(
    success => console.log('AppComponent bootstrapped!'),
    error => console.log(error)
);