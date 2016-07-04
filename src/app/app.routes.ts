import { provideRouter, RouterConfig }       from '@angular/router';

import { HeroesRoutes }        from './shared/';
import { HomeComponent, DashboardComponent }       from './components/';

export const routes : RouterConfig = [
  { path: '',  redirectTo: '/home', terminal: true },
  { path: 'home',  component: HomeComponent },
  { path: 'd3',  component: DashboardComponent },
  ...HeroesRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
