"use strict";
exports.__esModule = true;
exports.StatSchema = void 0;
var mongoose = require("mongoose");
exports.StatSchema = new mongoose.Schema({
    str: {
        type: Number,
        required: true,
        "default": 0
    },
    agi: {
        type: Number,
        required: true,
        "default": 0
    },
    dex: {
        type: Number,
        required: true,
        "default": 0
    },
    vit: {
        type: Number,
        required: true,
        "default": 0
    },
    int: {
        type: Number,
        required: true,
        "default": 0
    },
    per: {
        type: Number,
        required: true,
        "default": 0
    },
    wil: {
        type: Number,
        required: true,
        "default": 0
    },
    car: {
        type: Number,
        required: true,
        "default": 0
    },
    luk: {
        type: Number,
        required: true,
        "default": 0
    }
}
/*, {
    versionKey: false,
    timestamps: true,
}*/ );
