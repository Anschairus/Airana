"use strict";
exports.__esModule = true;
exports.ForgotPasswordSchema = void 0;
var mongoose_1 = require("mongoose");
exports.ForgotPasswordSchema = new mongoose_1.Schema({
    email: {
        required: [true, 'EMAIL_IS_BLANK'],
        type: String,
        requierd: true
    },
    verification: {
        type: String,
        isUUID: true,
        requierd: true
    },
    firstUsed: {
        type: Boolean,
        "default": false
    },
    finalUsed: {
        type: Boolean,
        "default": false
    },
    expires: {
        type: Date,
        requierd: true
    },
    ip: {
        type: String,
        requierd: true
    },
    browser: {
        type: String,
        requierd: true
    },
    country: {
        type: String,
        requierd: true
    },
    ipChanged: {
        type: String
    },
    browserChanged: {
        type: String
    },
    countryChanged: {
        type: String
    }
}, {
    versionKey: false,
    timestamps: true
});
