var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
var YourStoriesComponent = /** @class */ (function () {
    function YourStoriesComponent() {
        this.title = 'Your Stories';
        this.stories = [{
                "name": "emissaries of the void",
                "mode": "airana"
            }];
    }
    YourStoriesComponent.prototype.storyHref = function (u) {
        return (u.replace(/\s+/g, "-")).toLowerCase();
    };
    YourStoriesComponent = __decorate([
        Component({
            selector: 'your-stories',
            templateUrl: './your-stories.component.html',
            styleUrls: ['./your-stories.component.css']
        })
    ], YourStoriesComponent);
    return YourStoriesComponent;
}());
export { YourStoriesComponent };
//# sourceMappingURL=your-stories.component.js.map