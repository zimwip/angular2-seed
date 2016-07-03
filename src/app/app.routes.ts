import { provideRouter, RouterConfig }       from '@angular/router';

import { HeroesRoutes }        from './shared/';
import { HomeComponent, D3AreaComponent }       from './components/';

export const routes : RouterConfig = [
  { path: '',  redirectTo: '/home', terminal: true },
  { path: 'home',  component: HomeComponent },
  { path: 'd3',  component: D3AreaComponent },
  ...HeroesRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
