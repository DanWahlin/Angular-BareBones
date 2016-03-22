import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';

import { HomeComponent } from './home/home.component';
import { FeatureComponent } from './feature/feature.component';

@Component({ 
  selector: 'app-container',
  template: `<router-outlet></router-outlet>`,
  directives: [ ROUTER_DIRECTIVES ],
})
@RouteConfig([
  { path: '/', as: 'Home', component: HomeComponent, useAsDefault: true },
  { path: '/feature', as: 'Feature', component: FeatureComponent }
])
export class AppComponent {
  
  constructor() {

  }
  
}