import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent }     from './home/home.component';
import { FeatureComponent }   from './feature/feature.component';

const APP_ROUTES: RouterConfig = [
  { path: '',  pathMatch:'full', redirectTo: '/home' },
  { path: 'home',  component: HomeComponent },
  { path: 'feature', component: FeatureComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(APP_ROUTES)
];