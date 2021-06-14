"use strict";
exports.__esModule = true;
exports.EquipSchema = void 0;
var mongoose = require("mongoose");
var stat_schema_1 = require("./stat.schema");
var aptitudes_schema_1 = require("./aptitudes.schema");
var modifiers_schema_1 = require("./modifiers.schema");
exports.EquipSchema = new mongoose.Schema({
    stats: {
        _id: false,
        type: stat_schema_1.StatSchema,
        required: true,
        "default": function () { return ({}); }
    },
    modifiers: {
        _id: false,
        type: modifiers_schema_1.ModifiersSchema,
        required: true,
        "default": function () { return ({}); }
    },
    aptitudes: {
        _id: false,
        type: aptitudes_schema_1.AptitudesSchema,
        required: true,
        "default": function () { return ({}); }
    },
    rarity: {
        type: String,
        required: true,
        "default": 'common'
    },
    lvl: {
        type: Number,
        required: true,
        "default": 0
    },
    ilvl: {
        type: Number,
        required: true,
        "default": 0
    },
    description: {
        type: String,
        required: false,
        "default": ''
    },
    skill: {
        type: [mongoose.Schema.Types.ObjectId],
        required: false
    }
}
/*, {
    versionKey: {
        type: false,
    timestamps: {
        type: true,
}*/ );
