import { provideRouter }       from '@angular/router';

import { HeroesRoutes }        from './shared/';
import { HomeComponent }       from './components/';

export const routes = [
  { path: '',  redirectTo: '/home', terminal: true },
  { path: 'home',  component: HomeComponent },
  ...HeroesRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
