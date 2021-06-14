"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateAccountDto = void 0;
var class_validator_1 = require("class-validator");
var class_transformer_1 = require("class-transformer");
var CreateAccountDto = /** @class */ (function () {
    function CreateAccountDto() {
    }
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        class_validator_1.MinLength(3),
        class_validator_1.MaxLength(255)
    ], CreateAccountDto.prototype, "username");
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.MinLength(4),
        class_validator_1.MaxLength(20)
    ], CreateAccountDto.prototype, "name");
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.MinLength(4),
        class_validator_1.MaxLength(20)
    ], CreateAccountDto.prototype, "surname");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        class_validator_1.MinLength(5),
        class_validator_1.MaxLength(255),
        class_validator_1.IsEmail()
    ], CreateAccountDto.prototype, "email");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        class_validator_1.MinLength(8),
        class_validator_1.MaxLength(1024)
    ], CreateAccountDto.prototype, "password");
    __decorate([
        class_transformer_1.Type(function () { return Date; })
    ], CreateAccountDto.prototype, "birthdate");
    __decorate([
        class_validator_1.IsBoolean()
    ], CreateAccountDto.prototype, "rememberme");
    __decorate([
        class_validator_1.IsString()
    ], CreateAccountDto.prototype, "theme");
    __decorate([
        class_validator_1.IsString()
    ], CreateAccountDto.prototype, "photos");
    __decorate([
        class_validator_1.IsString()
    ], CreateAccountDto.prototype, "roles");
    return CreateAccountDto;
}());
exports.CreateAccountDto = CreateAccountDto;
