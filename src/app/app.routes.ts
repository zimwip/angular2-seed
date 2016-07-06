import { provideRouter, RouterConfig }       from '@angular/router';

import { HeroesRoutes }        from './shared/';
import { LoginComponent, HomeComponent, DashboardComponent }       from './components';
import { AuthGuard }       from './services';

export const routes : RouterConfig = [
  { path: '', redirectTo: '/login', pathMatch : 'full'},
  { path: 'login',  component: LoginComponent },
  { path: 'home',  component: HomeComponent, data : {menu : true}, canActivate: [AuthGuard]},
  { path: 'd3',  component: DashboardComponent, data : {menu : true} },
  ...HeroesRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
