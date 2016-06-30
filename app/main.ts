import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS, APP_BASE_HREF} from 'angular2/router';
import RootComponent from 'app/root/app-root';
import {provide} from "angular2/core";

bootstrap(RootComponent, [
    ROUTER_PROVIDERS, provide(APP_BASE_HREF, {useValue: '/'})
]);