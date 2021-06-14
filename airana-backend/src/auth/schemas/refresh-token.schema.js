"use strict";
exports.__esModule = true;
exports.RefreshTokenSchema = void 0;
var mongoose_1 = require("mongoose");
exports.RefreshTokenSchema = new mongoose_1.Schema({
    accountId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Account',
        required: true
    },
    refreshToken: {
        type: String,
        required: true
    },
    ip: {
        type: String,
        required: true
    },
    browser: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    }
}, {
    versionKey: false,
    timestamps: true
});
