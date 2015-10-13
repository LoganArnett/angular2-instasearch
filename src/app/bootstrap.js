var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var app_component_ts_1 = require('./app.component.ts');
var http_1 = require('angular2/http');
var instasearch_service_ts_1 = require('./instasearch.service.ts');
angular2_1.bootstrap(app_component_ts_1.AppComponent, [
    http_1.HTTP_BINDINGS,
    http_1.JSONP_BINDINGS,
    instasearch_service_ts_1.InstaSearchService,
    router_1.routerBindings(app_component_ts_1.AppComponent),
    angular2_1.bind(router_1.LocationStrategy).toClass(router_1.HashLocationStrategy)
]);
//# sourceMappingURL=bootstrap.js.map