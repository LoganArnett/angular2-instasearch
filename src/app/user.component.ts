import {Component, FORM_DIRECTIVES, View, CORE_DIRECTIVES} from 'angular2/angular2';
import {InstaSearchService} from './instasearch.service';

@Component({ selector: 'my-bench'})
@View({
	templateUrl: './app/views/hashtag.html',
	directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})
export class UserComponent {
	public greeting = 'Search By Hashtag'
	public imageList = '';
	public avatar = '';
	public hashtag = '';

	constructor(private tagService: InstaSearchService) {}

	getTags(hashtag:any) {
        this.tagService.getHashTag(hashtag)
				.then((res) => {
          this.imageList = res.data
        });
    }
}
