import { provide, bind } from 'angular2/core';
import { NgLocalization } from 'angular2/common';
import { HTTP_PROVIDERS, Http, XHRBackend, RequestOptions, ConnectionBackend } from 'angular2/http';
import { FORM_PROVIDERS } from 'angular2/common';
import { ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy } from 'angular2/router';

import { DataService } from './data.service';

export const APP_PROVIDERS = [
    DataService,
    FORM_PROVIDERS,
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    bind(LocationStrategy).toClass(HashLocationStrategy)
];