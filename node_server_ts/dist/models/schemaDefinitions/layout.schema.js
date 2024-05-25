"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schemaOption_1 = require("../../constants/model/schemaOption");
const model_constant_1 = __importDefault(require("../../constants/model/model.constant"));
const layoutSchema = new mongoose_1.Schema({
    project_object_id: model_constant_1.default.requiredObjectId,
    x: model_constant_1.default.requiredNumber,
    y: model_constant_1.default.requiredNumber,
    is_booked: model_constant_1.default.optionalBoolean,
    facing: model_constant_1.default.optionalNullString
}, Object.assign(Object.assign({}, schemaOption_1.GENERAL_SCHEMA_OPTIONS), { toJSON: { virtuals: true }, toObject: { virtuals: true } }));
const projectVirtualReference = {
    ref: "project",
    localField: "builder_object_id",
    foreignField: "_id",
    justOne: true
};
exports.default = layoutSchema;
