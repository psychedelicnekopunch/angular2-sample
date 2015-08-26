if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="typings/angular2/angular2.d.ts" />
var angular2_1 = require('angular2/angular2');
var Messages = (function () {
    function Messages() {
        this.test = 'success';
    }
    Messages.prototype.get = function () {
        return this.test;
    };
    return Messages;
})();
var SampleLists = (function () {
    function SampleLists() {
        this.item = ['one', 'two', 'three', 'four', 'five'];
    }
    return SampleLists;
})();
// Annotation section
var MyAppComponent = (function () {
    function MyAppComponent(message, sampleLists) {
        this.title = 'masa69';
        this.mes = message.get();
        this.lists = sampleLists.item;
    }
    MyAppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app'
        }),
        angular2_1.View({
            template: "\n\t\t<h1>{{ title }}</h1>\n\t\t<p>{{ mes }}</p>\n\t\t<ul>\n\t\t\t<li *ng-for=\"#list of lists\">{{ list }}</li>\n\t\t</ul>\n\t",
            directives: [angular2_1.NgFor]
        }), 
        __metadata('design:paramtypes', [Messages, SampleLists])
    ], MyAppComponent);
    return MyAppComponent;
})();
angular2_1.bootstrap(MyAppComponent, [Messages, SampleLists]);
