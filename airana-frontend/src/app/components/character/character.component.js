var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { CharacterService } from "../../_services/index";
var VerionRankComponent = /** @class */ (function () {
    function VerionRankComponent(characterService) {
        this.characterService = characterService;
        this.title = "Verion Ranks";
        this.isDesc = false;
        this.column = "name";
        this.searchText = "";
        this.loaded = false;
    }
    VerionRankComponent.prototype.getCharacterTabs = function () {
        var _this = this;
        this.characterTabs = this.characterService
            .getCharacterTabs()
            .subscribe(function (characterTabs) {
            _this.characterTabs = characterTabs;
            _this.loaded = true;
        });
    };
    VerionRankComponent.prototype.ngOnInit = function () {
        this.getCharacterTabs();
    };
    VerionRankComponent.prototype.onSelect = function (characterTab) {
        this.selectedCharacterTab = characterTab;
    };
    VerionRankComponent.prototype.sort = function (property) {
        this.isDesc = !this.isDesc; //change the direction
        this.column = property;
        this.direction = this.isDesc ? 1 : -1;
    };
    VerionRankComponent.prototype.characterImg = function (characterTab) {
        if (characterTab.image == "" || characterTab.image == null) {
            return "assets/img/character/" + "foto.jpg";
        }
        else {
            return "assets/img/character/" + characterTab.image;
        }
    };
    VerionRankComponent.prototype.ft = function (height) {
        return (Math.floor(height * 0.032808) +
            "' " +
            (((height * 0.032808 - Math.floor(height * 0.032808)) * 12).toPrecision(1) +
                '"'));
    };
    VerionRankComponent.prototype.lb = function (weight) {
        return (weight * 2.20462262).toPrecision(3) + " lb";
    };
    VerionRankComponent = __decorate([
        Component({
            selector: "character",
            templateUrl: "./character.component.html",
            styleUrls: ["./character.component.css"]
        }),
        __metadata("design:paramtypes", [CharacterService])
    ], VerionRankComponent);
    return VerionRankComponent;
}());
export { VerionRankComponent };
//# sourceMappingURL=character.component.js.map