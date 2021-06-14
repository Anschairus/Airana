"use strict";
exports.__esModule = true;
exports.ModifiersSchema = void 0;
var mongoose = require("mongoose");
exports.ModifiersSchema = new mongoose.Schema({
    hp: {
        type: Number,
        required: true,
        "default": 0
    },
    ep: {
        type: Number,
        required: true,
        "default": 0
    },
    atk: {
        type: Number,
        required: true,
        "default": 0
    },
    ratk: {
        type: Number,
        required: true,
        "default": 0
    },
    hit: {
        type: Number,
        required: true,
        "default": 0
    },
    block: {
        type: Number,
        required: true,
        "default": 0
    },
    flee: {
        type: Number,
        required: true,
        "default": 0
    },
    def: {
        type: Number,
        required: true,
        "default": 0
    },
    can: {
        type: Number,
        required: true,
        "default": 0
    },
    ini: {
        type: Number,
        required: true,
        "default": 0
    },
    matk: {
        type: Number,
        required: true,
        "default": 0
    },
    psy: {
        type: Number,
        required: true,
        "default": 0
    },
    psyatk: {
        type: Number,
        required: true,
        "default": 0
    },
    critrate: {
        type: Number,
        required: true,
        "default": 0
    },
    focus: {
        type: Number,
        required: true,
        "default": 0
    },
    sympathy: {
        type: Number,
        required: true,
        "default": 0
    },
    sanity: {
        type: Number,
        required: true,
        "default": 0
    },
    aspd: {
        type: Number,
        required: true,
        "default": 0
    },
    mspd: {
        type: Number,
        required: true,
        "default": 0
    }
}
/*, {
    versionKey: false,
    timestamps: true,
}*/ );
