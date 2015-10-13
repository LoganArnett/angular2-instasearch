import {View, Component} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HomeComponent} from './home.component.ts';
import {UserComponent} from './user.component.ts';


@Component({ selector: 'my-app' })
@View({
  templateUrl: './app/views/app.html',
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/', as: 'Home', component: HomeComponent },
  { path: '/users', as: 'Users', component: UserComponent }
])
export class AppComponent { }
