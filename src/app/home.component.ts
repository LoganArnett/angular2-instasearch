import {Component, FORM_DIRECTIVES, View} from 'angular2/angular2';

@Component({selector: 'my-home'})
@View({
	templateUrl: './app/views/home.html',
	directives: [FORM_DIRECTIVES]
})

export class HomeComponent {}
