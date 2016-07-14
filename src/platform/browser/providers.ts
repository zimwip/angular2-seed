/*
 * These are globally available services in any component or any other service
 */

// Angular 2
import { Title } from '@angular/platform-browser';
import {FORM_PROVIDERS, LocationStrategy, HashLocationStrategy, PathLocationStrategy} from '@angular/common';

// Angular 2 Http
import {HTTP_PROVIDERS, JSONP_PROVIDERS} from '@angular/http';
import {APP_ROUTER_PROVIDERS} from '../../app/app.routes';


// Angular 2 forms
import {disableDeprecatedForms, provideForms} from '@angular/forms';

/*
 * Application Providers/Directives/Pipes
 * providers/directives/pipes that only live in our browser environment
 */
export const APPLICATION_PROVIDERS = [
  // new Angular 2 forms
  Title,
  disableDeprecatedForms(),
  provideForms(),
  ...HTTP_PROVIDERS,
  ...JSONP_PROVIDERS,
  ...APP_ROUTER_PROVIDERS,
  {provide: LocationStrategy, useClass: PathLocationStrategy}
];

export const PROVIDERS = [
  ...APPLICATION_PROVIDERS
];
