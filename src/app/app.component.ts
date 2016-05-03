import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes, Router } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FeatureComponent } from './feature/feature.component';
import { APP_PROVIDERS } from './app.providers';

@Component({ 
  selector: 'app-container',
  template: `<router-outlet></router-outlet>`,
  directives: [ ROUTER_DIRECTIVES ],
  providers: [ APP_PROVIDERS ]
})
@Routes([
  { path: '/', component: HomeComponent },
  { path: '/feature', component: FeatureComponent }
])
export class AppComponent {
  
  constructor(private router: Router) {
    router.navigate(['/']);
  }
  
}