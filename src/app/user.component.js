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
var angular2_1 = require('angular2/angular2');
var instasearch_service_1 = require('./instasearch.service');
var UserComponent = (function () {
    function UserComponent(tagService) {
        this.tagService = tagService;
        this.greeting = 'Search By Hashtag';
        this.imageList = '';
        this.avatar = '';
        this.hashtag = '';
    }
    UserComponent.prototype.getTags = function (hashtag) {
        var _this = this;
        this.tagService.getHashTag(hashtag)
            .then(function (res) {
            _this.imageList = res.data;
        });
    };
    UserComponent = __decorate([
        angular2_1.Component({ selector: 'my-bench' }),
        angular2_1.View({
            templateUrl: './app/views/hashtag.html',
            directives: [angular2_1.FORM_DIRECTIVES, angular2_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [instasearch_service_1.InstaSearchService])
    ], UserComponent);
    return UserComponent;
})();
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map