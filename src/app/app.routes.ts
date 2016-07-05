import { provideRouter, RouterConfig }       from '@angular/router';

import { HeroesRoutes }        from './shared/';
import { HomeComponent, DashboardComponent }       from './components/';

export const routes : RouterConfig = [
  { path: '',  redirectTo: '/home', pathMatch : 'full' },
  { path: 'home',  component: HomeComponent, data : {menu : true}},
  { path: 'd3',  component: DashboardComponent, data : {menu : true} },
  ...HeroesRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
