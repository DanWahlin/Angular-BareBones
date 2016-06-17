import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

import { APP_PROVIDERS } from './app.providers';

@Component({ 
  selector: 'app-container',
  template: `<router-outlet></router-outlet>`,
  directives: [ ROUTER_DIRECTIVES ],
  providers: [ APP_PROVIDERS ]
})
export class AppComponent {
  
  constructor() {

  }
  
}