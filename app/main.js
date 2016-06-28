System.register(['angular2/platform/browser', 'app/root/app-root'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, app_root_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_root_1_1) {
                app_root_1 = app_root_1_1;
            }],
        execute: function() {
            // import {provide} from 'angular2/core'
            /*bootstrap(RootComponent, [
                ROUTER_PROVIDERS, provide(APP_BASE_HREF, {useValue: '/'})
            ]); */
            browser_1.bootstrap(app_root_1.default);
        }
    }
});
