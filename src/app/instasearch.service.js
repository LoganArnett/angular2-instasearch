var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var http_1 = require('angular2/http');
var angular2_1 = require('angular2/angular2');
var InstaSearchService = (function () {
    function InstaSearchService(_jsonp) {
        this._jsonp = _jsonp;
    }
    InstaSearchService.prototype.getTags = function () {
        var _this = this;
        var promise = this._jsonp.get('https://api.instagram.com/v1/tags/basketball/media/recent?access_token=37506794.47ea4e0.dcf79b644ca54f39a74c52037598b1b6c&callback=JSON_CALLBACK')
            .subscribe(function (res) {
            res.json();
        })
            .then(function (data) {
            console.log(data);
        })
            .then(function (_) { return _; }, function (e) { return _this._fetchFailed(e); });
        return promise;
    };
    InstaSearchService.prototype._fetchFailed = function (error) {
        console.error(error);
        return Promise.reject(error);
    };
    InstaSearchService.prototype.getTag = function (name) {
        return this.getTags();
    };
    ;
    InstaSearchService = __decorate([
        angular2_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Jsonp])
    ], InstaSearchService);
    return InstaSearchService;
})();
exports.InstaSearchService = InstaSearchService;
// constructor(http:Http) {
//   http.request('https://api.instagram.com/v1/tags/basketball/media/recent?access_token=37506794.47ea4e0.dcf79b644ca54f39a74c52037598b1b6')
// 	.subscribe((res: any) => {
//     this.images = res.json();
// 		console.log(res)
//   })
// }
//# sourceMappingURL=instasearch.service.js.map