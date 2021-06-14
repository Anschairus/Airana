"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthModule = void 0;
var common_1 = require("@nestjs/common");
var auth_service_1 = require("./auth.service");
var jwt_strategy_1 = require("./strategies/jwt.strategy");
var passport_1 = require("@nestjs/passport");
var jwt_1 = require("@nestjs/jwt");
var mongoose_1 = require("@nestjs/mongoose");
var account_schema_1 = require("../../../../../../src/account/schemas/account.schema");
var refresh_token_schema_1 = require("./schemas/refresh-token.schema");
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        common_1.Module({
            imports: [
                mongoose_1.MongooseModule.forFeature([
                    { name: 'Account', schema: account_schema_1.AccountSchema },
                    { name: 'RefreshToken', schema: refresh_token_schema_1.RefreshTokenSchema },
                ]),
                passport_1.PassportModule,
                jwt_1.JwtModule.register({
                    secret: process.env.JWT_SECRET,
                    signOptions: { expiresIn: process.env.JWT_EXPIRATION }
                }),
            ],
            providers: [auth_service_1.AuthService, jwt_strategy_1.JwtStrategy],
            exports: [auth_service_1.AuthService]
        })
    ], AuthModule);
    return AuthModule;
}());
exports.AuthModule = AuthModule;
