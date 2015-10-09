import {Http} from 'angular2/http';
import {JSONP_BINDINGS, Jsonp, BaseRequestOptions, RequestOptions} from 'angular2/http';
import {Injectable} from 'angular2/angular2';

@Injectable()
export class InstaSearchService {
	constructor(private http: Http) { }
  tags: Array<Object>;
	getTags(): Promise<any> {

// https://api.instagram.com/v1/tags/basketball/media/recent?access_token=37506794.47ea4e0.dcf79b644ca54f39a74c52037598b1b6c&callback=?
    this.tags = [];
		let promise = this.http.get('https://api.github.com/users/loganarnett')
		    .map((response: any) =>
					response.json()
				).toPromise()
				// .then((tags: Array<Object>) => {
				//    this.tags.push(...tags)
				// 	 return this.tags
				// })
			// .then((data: any) => {
			// 	console.log(data)
			// })
		return promise;
	}

	private _fetchFailed(error: any) {
		console.error(error);
		return Promise.reject(error);
	}

	getTag(name: string) {
		return this.getTags()
		};
	}
	// constructor(http:Http) {
  //   http.request('https://api.instagram.com/v1/tags/basketball/media/recent?access_token=37506794.47ea4e0.dcf79b644ca54f39a74c52037598b1b6')
	// 	.subscribe((res: any) => {
  //     this.images = res.json();
	// 		console.log(res)
  //   })
  // }
