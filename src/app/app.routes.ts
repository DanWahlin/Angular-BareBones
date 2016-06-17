import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent }     from './home/home.component';
import { FeatureComponent }   from './feature/feature.component';

const appRoutes = [
  { path: '',  terminal: true, component: HomeComponent },
  { path: 'feature', component: FeatureComponent }
];

const routes: RouterConfig = [
  ...appRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];