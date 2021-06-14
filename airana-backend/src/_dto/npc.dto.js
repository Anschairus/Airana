"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NpcDto = void 0;
var class_validator_1 = require("class-validator");
var class_transformer_1 = require("class-transformer");
var NpcDto = /** @class */ (function () {
    function NpcDto() {
    }
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString()
    ], NpcDto.prototype, "name");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString()
    ], NpcDto.prototype, "surname");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString()
    ], NpcDto.prototype, "status");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString()
    ], NpcDto.prototype, "career");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString()
    ], NpcDto.prototype, "powersource");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString()
    ], NpcDto.prototype, "powermethod");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString()
    ], NpcDto.prototype, "pranalanguages");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString()
    ], NpcDto.prototype, "specialization");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString()
    ], NpcDto.prototype, "pathresearch");
    __decorate([
        class_validator_1.IsObject()
    ], NpcDto.prototype, "birthplace");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString()
    ], NpcDto.prototype, "ethnicity");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString()
    ], NpcDto.prototype, "nationality");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsObject()
    ], NpcDto.prototype, "based");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsObject()
    ], NpcDto.prototype, "cpp");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsObject()
    ], NpcDto.prototype, "afiliations");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString()
    ], NpcDto.prototype, "user");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsNumber()
    ], NpcDto.prototype, "level");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsNumber()
    ], NpcDto.prototype, "xpobtained");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString()
    ], NpcDto.prototype, "alignement");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsNumber()
    ], NpcDto.prototype, "age");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_transformer_1.Type(function () { return Date; })
    ], NpcDto.prototype, "birthdate");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString()
    ], NpcDto.prototype, "haircolor");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString()
    ], NpcDto.prototype, "eyecolor");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString()
    ], NpcDto.prototype, "bloodtype");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsNumber()
    ], NpcDto.prototype, "height");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsNumber()
    ], NpcDto.prototype, "weight");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsObject()
    ], NpcDto.prototype, "race");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsNumber()
    ], NpcDto.prototype, "chest");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsNumber()
    ], NpcDto.prototype, "waist");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsNumber()
    ], NpcDto.prototype, "hip");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsNumber()
    ], NpcDto.prototype, "feet");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString()
    ], NpcDto.prototype, "titles");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsNumber()
    ], NpcDto.prototype, "hundredsoffollowers");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsNumber()
    ], NpcDto.prototype, "numberofawards");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsNumber()
    ], NpcDto.prototype, "honorableactions");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsNumber()
    ], NpcDto.prototype, "hundredsofhaters");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsNumber()
    ], NpcDto.prototype, "infamy");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsNumber()
    ], NpcDto.prototype, "cowardactions");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsNumber()
    ], NpcDto.prototype, "totalfame");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString()
    ], NpcDto.prototype, "contacts");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString()
    ], NpcDto.prototype, "phobias");
    __decorate([
        class_validator_1.IsObject()
    ], NpcDto.prototype, "stats");
    __decorate([
        class_validator_1.IsObject()
    ], NpcDto.prototype, "equip");
    __decorate([
        class_validator_1.IsObject()
    ], NpcDto.prototype, "aptitudes");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsObject()
    ], NpcDto.prototype, "image");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsNumber()
    ], NpcDto.prototype, "notes");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsNumber()
    ], NpcDto.prototype, "adminnotes");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsNumber()
    ], NpcDto.prototype, "role");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString()
    ], NpcDto.prototype, "ownhistory");
    return NpcDto;
}());
exports.NpcDto = NpcDto;
