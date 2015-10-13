import {Http} from 'angular2/http';
import {JSONP_BINDINGS, Jsonp, BaseRequestOptions, RequestOptions} from 'angular2/http';
import {Injectable} from 'angular2/angular2';

@Injectable()
export class InstaSearchService {
	constructor(private jsonp: Jsonp) { }
  tags: Array<Object>;
	getRecent(hashtag:any): Promise<any> {

		let promise = this.jsonp.get('https://api.instagram.com/v1/tags/' + hashtag + '/media/recent?callback=JSONP_CALLBACK&access_token=37506794.47ea4e0.dcf79b644ca54f39a74c52037598b1b6')
		    .map((response: any) =>
					response.json()
				).toPromise()
		return promise;
	}

	private _fetchFailed(error: any) {
		console.error(error);
		return Promise.reject(error);
	}

	getHashTag(name: string) {
		return this.getRecent(name)
		};
	}
