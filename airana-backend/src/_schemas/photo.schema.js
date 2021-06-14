"use strict";
exports.__esModule = true;
exports.PhotoSchema = void 0;
var mongoose = require("mongoose");
exports.PhotoSchema = new mongoose.Schema({
    url: String,
    photo: String,
    tags: { type: Array(), "default": [] },
    date: { type: Date, "default": Date.now }
});
