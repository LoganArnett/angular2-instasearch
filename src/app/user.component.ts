import {Component, FORM_DIRECTIVES, View} from 'angular2/angular2';
import {InstaSearchService} from './instasearch.service';

@Component({ selector: 'my-bench'})
@View({
	templateUrl: './app/views/form.html',
	directives: [FORM_DIRECTIVES]
})
export class UserComponent {
	public greeting = 'Search By User'
	public images = '';

	constructor(private tagService: InstaSearchService) {}

	getTags() {
        this.tagService.getTags()
    }
}
