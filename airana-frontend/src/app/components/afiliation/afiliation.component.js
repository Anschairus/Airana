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
import { NpcService } from "../../_services";
var NpcsComponent = /** @class */ (function () {
    function NpcsComponent(npcService) {
        this.npcService = npcService;
        this.title = "NPC";
        this.isDesc = false;
        this.column = "guild";
        this.searchText = "";
        this.loaded = false;
    }
    NpcsComponent.prototype.getCharacterTabs = function () {
        var _this = this;
        this.characterTabs = this.npcService
            .getCharacterTabs()
            .subscribe(function (characterTabs) {
                _this.characterTabs = characterTabs;
                _this.loaded = true;
            });
    };
    NpcsComponent.prototype.ngOnInit = function () {
        this.getCharacterTabs();
    };
    NpcsComponent.prototype.onSelect = function (characterTab) {
        var _this = this;
        this.selectedCharacterTab = this.npcService
            .onSelect(characterTab)
            .subscribe(function (selectedCharacterTab) {
                _this.selectedCharacterTab = selectedCharacterTab;
            });
    };
    NpcsComponent.prototype.sort = function (property) {
        this.isDesc = !this.isDesc; // change the direction
        this.column = property;
        this.direction = this.isDesc ? -1 : 1;
    };
    NpcsComponent.prototype.characterImg = function (characterTab) {
        if (characterTab.image === "" || characterTab.image == null) {
            return "assets/img/character/" + "foto.jpg";
        }
        else {
            return "assets/img/character/" + characterTab.image;
        }
    };
    NpcsComponent.prototype.ft = function (height) {
        return (Math.floor(height * 0.032808) +
            "' " +
            (((height * 0.032808 - Math.floor(height * 0.032808)) * 12).toFixed(0) +
                '"'));
    };
    NpcsComponent.prototype.lb = function (weight) {
        return (weight * 2.20462262).toPrecision(3) + " lb";
    };
    NpcsComponent = __decorate([
        Component({
            selector: "npcs",
            templateUrl: "./npcs.component.html",
            styleUrls: ["./npcs.component.css"]
        }),
        __metadata("design:paramtypes", [NpcService])
    ], NpcsComponent);
    return NpcsComponent;
}());
export { NpcsComponent };
//# sourceMappingURL=npcs.component.js.map