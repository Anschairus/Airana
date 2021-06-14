"use strict";
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
exports.AccountSchema = void 0;
var mongoose = require("mongoose");
var bcrypt = require("bcrypt");
//import { PhotoSchema } from '../../schemas/photo.schema';
exports.AccountSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        unique: true,
        required: [true, 'USERNAME_IS_BLANK']
    },
    name: {
        type: String,
        minlength: 3,
        maxlength: 255,
        required: [true, 'NAME_IS_BLANK']
    },
    surname: {
        type: String,
        minlength: 3,
        maxlength: 255,
        required: [true, 'SURNAME_IS_BLANK']
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        maxlength: 255,
        minlength: 6,
        unique: true,
        required: [true, 'EMAIL_IS_BLANK']
    },
    password: {
        type: String,
        minlength: 5,
        maxlength: 1024,
        required: [true, 'PASSWORD_IS_BLANK']
    },
    birthdate: {
        type: Date,
        required: [true, 'BIRTHDATE_IS_BLANK']
    },
    rememberme: {
        type: Boolean,
        "default": false
    },
    bankAccountNumber: {
        type: String,
        maxlength: 32
    },
    bankAccountOwnerName: {
        type: String,
        minlength: 6,
        maxlength: 255
    },
    roles: {
        type: [String],
        "default": ['user']
    },
    theme: {
        type: String,
        "default": 'cpp-dark'
    },
    photos: {
        profilePic: {
            type: String,
            "default": 'http://localhost:4200/assets/img/npc/s-foto.jpg'
            /* profilePic: {}, //{ type:  mongoose.Schema.Types.ObjectId , ref: 'PhotoSchema'}
             gallery: [] //[{type:  mongoose.Schema.Types.ObjectId , ref: 'PhotoSchema'}]*/
        }
    },
    verification: {
        type: String,
        isUUID: true
    },
    verified: {
        type: Boolean,
        "default": false
    },
    verificationExpires: {
        type: Date,
        "default": Date.now
    },
    loginAttempts: {
        type: Number,
        "default": 0
    },
    blockExpires: {
        type: Date,
        "default": Date.now
    }
}, {
    versionKey: false,
    timestamps: true
});
exports.AccountSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function () {
        var hashed, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    if (!this.isModified('password')) {
                        return [2 , next()];
                    }
                    return [4 , bcrypt.hash(this['password'], 10)];
                case 1:
                    hashed = _a.sent();
                    // tslint:disable-next-line:no-string-literal
                    this['password'] = hashed;
                    return [2 , next()];
                case 2:
                    err_1 = _a.sent();
                    return [2 , next(err_1)];
                case 3: return [2 ];
            }
        });
    });
});
