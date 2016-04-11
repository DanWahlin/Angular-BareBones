import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';

import { HomeComponent } from './home/home.component';
import { FeatureComponent } from './feature/feature.component';
import { APP_PROVIDERS } from './app.providers';

@Component({ 
  selector: 'app-container',
  template: `<router-outlet></router-outlet>`,
  directives: [ ROUTER_DIRECTIVES ],
  providers: [ APP_PROVIDERS ]
})
@RouteConfig([
  { path: '/', as: 'Home', component: HomeComponent, useAsDefault: true },
  { path: '/feature', as: 'Feature', component: FeatureComponent }
])
export class AppComponent {
  
  constructor() {

  }
  
}