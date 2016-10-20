import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }     from './home/home.component';
import { FeatureComponent }   from './feature/feature.component';

const routes: Routes = [
  { path: '',  pathMatch:'full', redirectTo: '/home' },
  { path: 'home',  component: HomeComponent },
  { path: 'feature', component: FeatureComponent }
];

export const appRouting = {
  routes: RouterModule.forRoot(routes),
  components: [ HomeComponent, FeatureComponent ]
};