"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AccountModule = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var account_schema_1 = require("./schemas/account.schema");
var common_1 = require("@nestjs/common");
var account_controller_1 = require("./account.controller");
var account_service_1 = require("./account.service");
var auth_module_1 = require("../../../../../../src/auth/auth.module");
var forgot_password_schema_1 = require("./schemas/forgot-password.schema");
var AccountModule = /** @class */ (function () {
    function AccountModule() {
    }
    AccountModule = __decorate([
        common_1.Module({
            imports: [
                mongoose_1.MongooseModule.forFeature([{ name: 'Account', schema: account_schema_1.AccountSchema }]),
                mongoose_1.MongooseModule.forFeature([{ name: 'ForgotPassword', schema: forgot_password_schema_1.ForgotPasswordSchema }]),
                auth_module_1.AuthModule,
            ],
            controllers: [account_controller_1.AccountController],
            providers: [account_service_1.AccountService]
        })
    ], AccountModule);
    return AccountModule;
}());
exports.AccountModule = AccountModule;
