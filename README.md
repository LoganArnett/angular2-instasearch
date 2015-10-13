# angular2-instasearch

Messing with Angular 2 and the Instagram API


### JSONP vs. HTTP

Had to utilize the JSONP request to avoid the Cross Origin issues and ran into
the roadblock of not knowing the JSONP callback for Angular 2. Fell back to the
Angular 1.x callback of **JSON_CALLBACK** but couldn't get that working. Found
out from the Angular team after filing an issue on the repo that is was now even
clearer and more obvious, the callback is now **JSONP_CALLBACK**.

So [this is the result](http://loganarnett.com/angular2-instasearch/src/#) of me just tinkering with the HTTP and JSONP options for
Angular 2.

![InstaSearch Screen Cast](http://cl.ly/image/401j1A2d382I/Screen%20Recording%202015-10-12%20at%2011.29%20PM.gif)
