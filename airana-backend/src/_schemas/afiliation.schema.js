"use strict";
exports.__esModule = true;
exports.AfiliationSchema = void 0;
var mongoose = require("mongoose");
exports.AfiliationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        "default": 0
    },
    rank: {
        type: String,
        required: true,
        "default": 0
    },
    evil: {
        type: Boolean,
        required: true,
        "default": true
    },
    description: {
        type: String,
        required: [true, 'AFILIATION DESCRIPTION IS REQUIERED'],
        "default": ''
    },
    joindate: {
        type: Date,
        required: false,
        "default": '1900-01-01'
    }
}
/*, {
    versionKey: false,
    timestamps: true,
}*/ );
