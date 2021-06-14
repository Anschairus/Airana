"use strict";
exports.__esModule = true;
exports.BulgeSchema = void 0;
var mongoose = require("mongoose");
exports.BulgeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        "default": 0
    },
    size: {
        type: Number,
        required: true,
        "default": 0
    },
    secret: {
        type: Boolean,
        required: true,
        "default": true
    },
    description: {
        type: String,
        required: false,
        "default": ''
    }
}
/*, {
    versionKey: false,
    timestamps: true,
}*/ );
