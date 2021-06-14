"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.AuthService = void 0;
var common_1 = require("@nestjs/common");
var mongoose_1 = require("@nestjs/mongoose");
var jsonwebtoken_1 = require("jsonwebtoken");
var account_interface_1 = require("../../../../../../src/account/interfaces/account.interface");
var uuid_1 = require("uuid");
var request_ip_1 = require("request-ip");
var cryptr_1 = require("cryptr");
var AuthService = /** @class */ (function () {
    function AuthService(accountModel, refreshTokenModel, jwtService) {
        this.accountModel = accountModel;
        this.refreshTokenModel = refreshTokenModel;
        this.jwtService = jwtService;
        this.cryptr = new cryptr_1["default"](process.env.ENCRYPT_JWT_SECRET);
    }
    AuthService.prototype.createAccessToken = function (accountId, username, email, photos, roles, theme, rememberme) {
        return __awaiter(this, void 0, void 0, function () {
            var accessToken;
            return __generator(this, function (_a) {
                accessToken = jsonwebtoken_1.sign({ accountId: accountId, username: username, email: email, photos: photos, roles: roles, theme: theme, rememberme: rememberme }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRATION });
                return [2 , this.encryptText(accessToken)];
            });
        });
    };
    AuthService.prototype.createRefreshToken = function (req, accountId, username, email, photos, roles, theme, rememberme) {
        return __awaiter(this, void 0, void 0, function () {
            var refreshToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        refreshToken = new this.refreshTokenModel({
                            accountId: accountId, username: username, email: email, photos: photos, roles: roles, theme: theme, rememberme: rememberme,
                            refreshToken: uuid_1.v4(),
                            ip: this.getIp(req),
                            browser: this.getBrowserInfo(req),
                            country: this.getCountry(req)
                        });
                        return [4 , refreshToken.save()];
                    case 1:
                        _a.sent();
                        return [2 , refreshToken.refreshToken];
                }
            });
        });
    };
    AuthService.prototype.findRefreshToken = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            var refreshToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 , this.refreshTokenModel.findOne({ refreshToken: token })];
                    case 1:
                        refreshToken = _a.sent();
                        if (!refreshToken) {
                            throw new common_1.UnauthorizedException('Account has been logged out.');
                        }
                        return [2 , refreshToken.accountId];
                }
            });
        });
    };
    AuthService.prototype.validateAccount = function (jwtPayload) {
        return __awaiter(this, void 0, void 0, function () {
            var account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 , this.accountModel.findOne({ _id: jwtPayload.accountId, verified: true })];
                    case 1:
                        account = _a.sent();
                        if (!account) {
                            throw new common_1.UnauthorizedException('Account not found.');
                        }
                        return [2 , account];
                }
            });
        });
    };
    //   ┬┬ ┬┌┬┐  ┌─┐─┐ ┬┌┬┐┬─┐┌─┐┌─┐┌┬┐┌─┐┬─┐
    //   ││││ │   ├┤ ┌┴┬┘ │ ├┬┘├─┤│   │ │ │├┬┘
    //  └┘└┴┘ ┴   └─┘┴ └─ ┴ ┴└─┴ ┴└─┘ ┴ └─┘┴└─
    AuthService.prototype.jwtExtractor = function (request) {
        var token = null;
        if (request.header('x-token')) {
            token = request.get('x-token');
        }
        else if (request.headers.authorization) {
            token = request.headers.authorization.replace('Bearer ', '').replace(' ', '');
        }
        else if (request.body.token) {
            token = request.body.token.replace(' ', '');
        }
        if (request.query.token) {
            token = request.body.token.replace(' ', '');
        }
        var cryptr = new cryptr_1["default"](process.env.ENCRYPT_JWT_SECRET);
        if (token) {
            try {
                token = cryptr.decrypt(token);
            }
            catch (err) {
                throw new common_1.BadRequestException('Bad request.');
            }
        }
        return token;
    };
    // ***********************
    // ╔╦╗╔═╗╔╦╗╦ ╦╔═╗╔╦╗╔═╗
    // ║║║║╣  ║ ╠═╣║ ║ ║║╚═╗
    // ╩ ╩╚═╝ ╩ ╩ ╩╚═╝═╩╝╚═╝
    // ***********************
    AuthService.prototype.returnJwtExtractor = function () {
        return this.jwtExtractor;
    };
    AuthService.prototype.getIp = function (req) {
        return request_ip_1.getClientIp(req);
    };
    AuthService.prototype.getBrowserInfo = function (req) {
        return req.header['user-agent'] || 'XX';
    };
    AuthService.prototype.getCountry = function (req) {
        return req.header['cf-ipcountry'] ? req.header['cf-ipcountry'] : 'XX';
    };
    AuthService.prototype.encryptText = function (text) {
        return this.cryptr.encrypt(text);
    };
    AuthService = __decorate([
        common_1.Injectable(),
        __param(0, mongoose_1.InjectModel('Account')),
        __param(1, mongoose_1.InjectModel('RefreshToken'))
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
