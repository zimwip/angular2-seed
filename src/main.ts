import { bootstrap } from '@angular/platform-browser-dynamic';
import { Title } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS, JSONP_PROVIDERS } from '@angular/http';


import { AppComponent, environment, APP_ROUTER_PROVIDERS  } from './app/';

import { SolrService,
         WikipediaService,
         ElectronService,
         OpenDataService } from './app/services';


if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [Title,
    HTTP_PROVIDERS,
    JSONP_PROVIDERS,
    APP_ROUTER_PROVIDERS,
    SolrService,
    WikipediaService,
    ElectronService,
    OpenDataService
]).catch(err => console.error(err));
