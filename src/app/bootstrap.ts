import {bind, bootstrap} from 'angular2/angular2';
import {routerBindings, HashLocationStrategy, LocationStrategy} from 'angular2/router';
import {AppComponent} from './app.component';
import {HTTP_BINDINGS, JSONP_BINDINGS} from 'angular2/http';
import {InstaSearchService} from './instasearch.service';

bootstrap(AppComponent, [
	HTTP_BINDINGS,
	JSONP_BINDINGS,
	InstaSearchService,
	routerBindings(AppComponent),
	bind(LocationStrategy).toClass(HashLocationStrategy)
]);
