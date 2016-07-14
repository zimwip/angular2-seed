import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import {DIRECTIVES, PIPES, PROVIDERS} from './platform/browser';
import { AppComponent, environment, APP_PROVIDERS, APP_SERVICES} from './app/';




if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
    ...PROVIDERS,
    ...DIRECTIVES,
    ...PIPES,
    ...APP_PROVIDERS,
    ...APP_SERVICES
]).catch(err => console.error(err));
