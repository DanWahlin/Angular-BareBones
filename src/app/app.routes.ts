import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent }     from './home/home.component';
import { FeatureComponent }   from './feature/feature.component';

const routes: RouterConfig = [
  { path: '',  terminal: true, redirectTo: '/home' },
  { path: 'home',  terminal: true, component: HomeComponent },
  { path: 'feature', component: FeatureComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];