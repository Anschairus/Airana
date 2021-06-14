var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
var QuickMatchComponent = /** @class */ (function () {
    function QuickMatchComponent() {
        this.title = 'Quick Match';
        this.a = 0;
        this.config = [{
                "name": "Baneforth",
                "settings": [
                    {
                        "name": "Start Mode",
                        "value": [
                            "Normal", "First Attacker", "Trap"
                        ]
                    }, {
                        "name": "First Attackant",
                        "value": "CharactersOptions"
                    }, {
                        "name": "Trap Alert Level",
                        "value": "25"
                    }, {
                        "name": "Number of teams",
                        "value": 2
                    }
                ]
            }
        ];
    }
    QuickMatchComponent.prototype.changeA = function (a) {
        if (this.a == 2) {
            this.a = 0;
        }
        else {
            this.a = this.a + 1;
        }
    };
    QuickMatchComponent = __decorate([
        Component({
            selector: 'quick-match',
            templateUrl: './quick-match.component.html',
            styleUrls: ['./quick-match.component.css']
        })
    ], QuickMatchComponent);
    return QuickMatchComponent;
}());
export { QuickMatchComponent };
//# sourceMappingURL=quick-match.component.js.map