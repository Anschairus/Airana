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
exports.AccountService = void 0;
var common_1 = require("@nestjs/common");
var mongoose_1 = require("@nestjs/mongoose");
var uuid_1 = require("uuid");
var date_fns_1 = require("date-fns");
var bcrypt = require("bcrypt");
var AccountService = /** @class */ (function () {
    function AccountService(accountModel, forgotPasswordModel,
    authService) {
        this.accountModel = accountModel;
        this.forgotPasswordModel = forgotPasswordModel;
        this.authService = authService;
        this.HOURS_TO_VERIFY = 4;
        this.HOURS_TO_BLOCK = 6;
        this.LOGIN_ATTEMPTS_TO_BLOCK = 5;
    }
    AccountService.prototype.signUp = function (createAccountDto) {
        return __awaiter(this, void 0, void 0, function () {
            var account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        account = new this.accountModel(createAccountDto);
                        return [4 , this.isEmailUnique(account.email)];
                    case 1:
                        _a.sent();
                        this.setRegistrationInfo(account);
                        return [4 , account.save()];
                    case 2:
                        _a.sent();
                        return [2 , this.buildRegistrationInfo(account)];
                }
            });
        });
    };
    AccountService.prototype.verifyEmail = function (req, verifyUuidDto) {
        return __awaiter(this, void 0, void 0, function () {
            var account, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 , this.findByVerification(verifyUuidDto.verification)];
                    case 1:
                        account = _b.sent();
                        return [4 , this.setAccountAsVerified(account)];
                    case 2:
                        _b.sent();
                        _a = {
                            username: account.username,
                            email: account.email,
                            theme: account.theme,
                            rememberme: account.rememberme
                        };
                        return [4 , this.authService.createAccessToken(account._id, account.username, account.email, account.photos.profilePic, account.roles, account.theme, account.rememberme)];
                    case 3:
                        _a.accessToken = _b.sent();
                        return [4 , this.authService.createRefreshToken(req, account._id, account.username, account.email, account.photos.profilePic, account.roles, account.theme, account.rememberme)];
                    case 4: return [2 , (_a.refreshToken = _b.sent(),
                            _a)];
                }
            });
        });
    };
    AccountService.prototype.signIn = function (req, signInAccountDto) {
        return __awaiter(this, void 0, void 0, function () {
            var account, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 , this.findAccountByEmail(signInAccountDto.email)];
                    case 1:
                        account = _b.sent();
                        this.isAccountBlocked(account);
                        return [4 , this.checkPassword(signInAccountDto.password, account)];
                    case 2:
                        _b.sent();
                        return [4 , this.passwordsAreMatch(account)];
                    case 3:
                        _b.sent();
                        _a = {
                            username: account.username,
                            email: account.email,
                            roles: account.roles,
                            theme: account.theme,
                            rememberme: account.rememberme
                        };
                        return [4 , this.authService.createAccessToken(account._id, account.username, account.email, account.photos.profilePic, account.roles, account.theme, account.rememberme)];
                    case 4:
                        _a.accessToken = _b.sent();
                        return [4 , this.authService.createRefreshToken(req, account._id, account.username, account.email, account.photos.profilePic, account.roles, account.theme, account.rememberme)];
                    case 5: return [2 , (_a.refreshToken = _b.sent(),
                            _a)];
                }
            });
        });
    };
    AccountService.prototype.refreshAccessToken = function (refreshAccessTokenDto) {
        return __awaiter(this, void 0, void 0, function () {
            var accountId, account, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 , this.authService.findRefreshToken(refreshAccessTokenDto.refreshToken)];
                    case 1:
                        accountId = _b.sent();
                        return [4 , this.accountModel.findById(accountId)];
                    case 2:
                        account = _b.sent();
                        if (!account) {
                            throw new common_1.BadRequestException('Bad request');
                        }
                        _a = {};
                        return [4 , this.authService.createAccessToken(account._id, account.username, account.email, account.photos.profilePic, account.roles, account.theme, account.rememberme)];
                    case 3: return [2 , (_a.accessToken = _b.sent(),
                            _a)];
                }
            });
        });
    };
    AccountService.prototype.forgotPassword = function (req, createForgotPasswordDto) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 , this.findByEmail(createForgotPasswordDto.email)];
                    case 1:
                        _a.sent();
                        return [4 , this.saveForgotPassword(req, createForgotPasswordDto)];
                    case 2:
                        _a.sent();
                        return [2 , {
                                email: createForgotPasswordDto.email,
                                message: 'verification sent.'
                            }];
                }
            });
        });
    };
    AccountService.prototype.forgotPasswordVerify = function (req, verifyUuidDto) {
        return __awaiter(this, void 0, void 0, function () {
            var forgotPassword;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 , this.findForgotPasswordByUuid(verifyUuidDto)];
                    case 1:
                        forgotPassword = _a.sent();
                        return [4 , this.setForgotPasswordFirstUsed(req, forgotPassword)];
                    case 2:
                        _a.sent();
                        return [2 , {
                                email: forgotPassword.email,
                                message: 'now reset your password.'
                            }];
                }
            });
        });
    };
    AccountService.prototype.resetPassword = function (resetPasswordDto) {
        return __awaiter(this, void 0, void 0, function () {
            var forgotPassword;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 , this.findForgotPasswordByEmail(resetPasswordDto)];
                    case 1:
                        forgotPassword = _a.sent();
                        return [4 , this.setForgotPasswordFinalUsed(forgotPassword)];
                    case 2:
                        _a.sent();
                        return [4 , this.resetAccountPassword(resetPasswordDto)];
                    case 3:
                        _a.sent();
                        return [2 , {
                                email: resetPasswordDto.email,
                                message: 'password successfully changed.'
                            }];
                }
            });
        });
    };
    AccountService.prototype.getAllAccounts = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 , this.accountModel.find({})];
                    case 1: return [2 , _a.sent()];
                }
            });
        });
    };
    AccountService.prototype.isEmailUnique = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            var account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 , this.accountModel.findOne({ email: email, verified: true })];
                    case 1:
                        account = _a.sent();
                        if (account) {
                            throw new common_1.BadRequestException('Email most be unique.');
                        }
                        return [2 ];
                }
            });
        });
    };
    AccountService.prototype.setRegistrationInfo = function (account) {
        account.verification = uuid_1.v4();
        account.verificationExpires = date_fns_1.addHours(new Date(), this.HOURS_TO_VERIFY);
    };
    AccountService.prototype.buildRegistrationInfo = function (account) {
        var accountRegistrationInfo = {
            username: account.username,
            email: account.email,
            verified: account.verified
        };
        return accountRegistrationInfo;
    };
    AccountService.prototype.findByVerification = function (verification) {
        return __awaiter(this, void 0, void 0, function () {
            var account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 , this.accountModel.findOne({ verification: verification, verified: false, verificationExpires: { $gt: new Date() } })];
                    case 1:
                        account = _a.sent();
                        if (!account) {
                            throw new common_1.BadRequestException('Bad request.');
                        }
                        return [2 , account];
                }
            });
        });
    };
    AccountService.prototype.findByEmail = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            var account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 , this.accountModel.findOne({ email: email, verified: true })];
                    case 1:
                        account = _a.sent();
                        if (!account) {
                            throw new common_1.NotFoundException('Email not found.');
                        }
                        return [2 , account];
                }
            });
        });
    };
    AccountService.prototype.setAccountAsVerified = function (account) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        account.verified = true;
                        return [4 , account.save()];
                    case 1:
                        _a.sent();
                        return [2 ];
                }
            });
        });
    };
    AccountService.prototype.findAccountByEmail = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            var account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 , this.accountModel.findOne({ email: email, verified: true })];
                    case 1:
                        account = _a.sent();
                        if (!account) {
                            throw new common_1.NotFoundException('Wrong email or password.');
                        }
                        return [2 , account];
                }
            });
        });
    };
    AccountService.prototype.checkPassword = function (attemptPass, account) {
        return __awaiter(this, void 0, void 0, function () {
            var match;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 , bcrypt.compare(attemptPass, account.password)];
                    case 1:
                        match = _a.sent();
                        if (!!match) return [3 , 3];
                        return [4 , this.passwordsDoNotMatch(account)];
                    case 2:
                        _a.sent();
                        throw new common_1.NotFoundException('Wrong email or password.');
                    case 3: return [2 , match];
                }
            });
        });
    };
    AccountService.prototype.isAccountBlocked = function (account) {
        if (account.blockExpires > Date.now()) {
            throw new common_1.ConflictException('Account has been blocked try later.');
        }
    };
    AccountService.prototype.passwordsDoNotMatch = function (account) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        account.loginAttempts += 1;
                        return [4 , account.save()];
                    case 1:
                        _a.sent();
                        if (!(account.loginAttempts >= this.LOGIN_ATTEMPTS_TO_BLOCK)) return [3 , 3];
                        return [4 , this.blockAccount(account)];
                    case 2:
                        _a.sent();
                        throw new common_1.ConflictException('Account blocked.');
                    case 3: return [2 ];
                }
            });
        });
    };
    AccountService.prototype.blockAccount = function (account) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        account.blockExpires = date_fns_1.addHours(new Date(), this.HOURS_TO_BLOCK);
                        return [4 , account.save()];
                    case 1:
                        _a.sent();
                        return [2 ];
                }
            });
        });
    };
    AccountService.prototype.passwordsAreMatch = function (account) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        account.loginAttempts = 0;
                        return [4 , account.save()];
                    case 1:
                        _a.sent();
                        return [2 ];
                }
            });
        });
    };
    AccountService.prototype.saveForgotPassword = function (req, createForgotPasswordDto) {
        return __awaiter(this, void 0, void 0, function () {
            var forgotPassword;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 , this.forgotPasswordModel.create({
                            email: createForgotPasswordDto.email,
                            verification: uuid_1.v4(),
                            expires: date_fns_1.addHours(new Date(), this.HOURS_TO_VERIFY),
                            ip: this.authService.getIp(req),
                            browser: this.authService.getBrowserInfo(req),
                            country: this.authService.getCountry(req)
                        })];
                    case 1:
                        forgotPassword = _a.sent();
                        return [4 , forgotPassword.save()];
                    case 2:
                        _a.sent();
                        return [2 ];
                }
            });
        });
    };
    AccountService.prototype.findForgotPasswordByUuid = function (verifyUuidDto) {
        return __awaiter(this, void 0, void 0, function () {
            var forgotPassword;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 , this.forgotPasswordModel.findOne({
                            verification: verifyUuidDto.verification,
                            firstUsed: false,
                            finalUsed: false,
                            expires: { $gt: new Date() }
                        })];
                    case 1:
                        forgotPassword = _a.sent();
                        if (!forgotPassword) {
                            throw new common_1.BadRequestException('Bad request.');
                        }
                        return [2 , forgotPassword];
                }
            });
        });
    };
    AccountService.prototype.setForgotPasswordFirstUsed = function (req, forgotPassword) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        forgotPassword.firstUsed = true;
                        forgotPassword.ipChanged = this.authService.getIp(req);
                        forgotPassword.browserChanged = this.authService.getBrowserInfo(req);
                        forgotPassword.countryChanged = this.authService.getCountry(req);
                        return [4 , forgotPassword.save()];
                    case 1:
                        _a.sent();
                        return [2 ];
                }
            });
        });
    };
    AccountService.prototype.findForgotPasswordByEmail = function (resetPasswordDto) {
        return __awaiter(this, void 0, void 0, function () {
            var forgotPassword;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 , this.forgotPasswordModel.findOne({
                            email: resetPasswordDto.email,
                            firstUsed: true,
                            finalUsed: false,
                            expires: { $gt: new Date() }
                        })];
                    case 1:
                        forgotPassword = _a.sent();
                        if (!forgotPassword) {
                            throw new common_1.BadRequestException('Bad request.');
                        }
                        return [2 , forgotPassword];
                }
            });
        });
    };
    AccountService.prototype.setForgotPasswordFinalUsed = function (forgotPassword) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        forgotPassword.finalUsed = true;
                        return [4 , forgotPassword.save()];
                    case 1:
                        _a.sent();
                        return [2 ];
                }
            });
        });
    };
    AccountService.prototype.resetAccountPassword = function (resetPasswordDto) {
        return __awaiter(this, void 0, void 0, function () {
            var account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 , this.accountModel.findOne({
                            email: resetPasswordDto.email,
                            verified: true
                        })];
                    case 1:
                        account = _a.sent();
                        account.password = resetPasswordDto.password;
                        return [4 , account.save()];
                    case 2:
                        _a.sent();
                        return [2 ];
                }
            });
        });
    };
    AccountService = __decorate([
        common_1.Injectable(),
        __param(0, mongoose_1.InjectModel('Account')),
        __param(1, mongoose_1.InjectModel('ForgotPassword'))
    ], AccountService);
    return AccountService;
}());
exports.AccountService = AccountService;
