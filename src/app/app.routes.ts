import { provideRouter, RouterConfig }       from '@angular/router';

import { HeroesRoutes }        from './shared/';
import { LoginComponent, HomeComponent, DashboardComponent }  from './components';
import { AuthGuard }       from './services';

export const routes : RouterConfig = [
  { path: '', redirectTo: '/login', pathMatch : 'full'},
  { path: 'login',  component: LoginComponent },
  { path: 'home',  component: HomeComponent, data : {menu : true, section : 'main',  label : 'Home'}, canActivate: [AuthGuard]},
  { path: 'dashboard',  component: DashboardComponent, data : {menu : true, section : 'main', label : 'Dashboard'} },
  { path: 'home2',  component: HomeComponent, data : {menu : true, section : 'label',  label : 'Home 2'}, canActivate: [AuthGuard]},
  ...HeroesRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
