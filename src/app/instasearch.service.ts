import {Http} from 'angular2/http';
import {JSONP_BINDINGS, Jsonp} from 'angular2/http';
import {Injectable} from 'angular2/angular2';

@Injectable()
export class InstaSearchService {
	constructor(private _jsonp: Jsonp) { }

	getTags(): Promise<any> {

		let promise = this._jsonp.get('https://api.instagram.com/v1/tags/basketball/media/recent?access_token=37506794.47ea4e0.dcf79b644ca54f39a74c52037598b1b6c&callback=JSON_CALLBACK')
				.subscribe((res:any) => {
				 res.json()
				})
			.then((data: any) => {
				console.log(data)
			})
		// //TODO: fix catch
		// //.catch(e => this._fetchFailed(e)) // want we want to say
		// // baroque way to ensure promise stays Promise<Hero[]>
		// .then<Character[]>(_ => _, e => this._fetchFailed(e));
			.then((_: any) => _, (e: any) => this._fetchFailed(e));
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
