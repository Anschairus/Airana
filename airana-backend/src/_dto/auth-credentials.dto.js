"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthCredentialsDto = void 0;
var class_validator_1 = require("class-validator");
var class_transformer_1 = require("class-transformer");
var AuthCredentialsDto = /** @class */ (function () {
    function AuthCredentialsDto() {
    }
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.MinLength(3),
        class_validator_1.MaxLength(20)
    ], AuthCredentialsDto.prototype, "username");
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.MinLength(4),
        class_validator_1.MaxLength(20)
    ], AuthCredentialsDto.prototype, "name");
    __decorate([
        class_validator_1.IsString()
    ], AuthCredentialsDto.prototype, "surname");
    __decorate([
        class_validator_1.IsEmail(),
        class_validator_1.MinLength(3)
    ], AuthCredentialsDto.prototype, "email");
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.MinLength(8, { message: 'Password is too short (8 characters min)' }),
        class_validator_1.MaxLength(20, { message: 'Password is too long (20 characters max)' })
    ], AuthCredentialsDto.prototype, "password");
    __decorate([
        class_transformer_1.Type(function () { return Date; })
    ], AuthCredentialsDto.prototype, "birthdate");
    __decorate([
        class_validator_1.IsBoolean()
    ], AuthCredentialsDto.prototype, "rememberme");
    __decorate([
        class_validator_1.IsNumber()
    ], AuthCredentialsDto.prototype, "accessrank");
    __decorate([
        class_transformer_1.Type(function () { return Date; })
    ], AuthCredentialsDto.prototype, "created");
    __decorate([
        class_validator_1.IsString()
    ], AuthCredentialsDto.prototype, "theme");
    return AuthCredentialsDto;
}());
exports.AuthCredentialsDto = AuthCredentialsDto;
