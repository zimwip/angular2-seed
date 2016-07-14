export * from './environment';
export * from './app.routes';
export * from './app.component';

// App
import { AppState } from './app.state';

import { Authentication, AuthGuard,
         SolrService,
         WikipediaService,
         ElectronService,
         OpenDataService } from './services';


// Application wide providers
export const APP_PROVIDERS = [
  AppState
];

// Application wide providers
export const APP_SERVICES = [
  Authentication,
  AuthGuard,
  SolrService,
  WikipediaService,
  ElectronService,
  OpenDataService
];
