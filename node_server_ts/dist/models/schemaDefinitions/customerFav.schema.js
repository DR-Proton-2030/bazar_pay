"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schemaOption_1 = require("../../constants/model/schemaOption");
const model_constant_1 = __importDefault(require("../../constants/model/model.constant"));
const customerFavProjectSchema = new mongoose_1.Schema({
    customer_object_id: model_constant_1.default.optionalNullObjectId,
    project_object_id: model_constant_1.default.optionalNullObjectId,
}, schemaOption_1.GENERAL_SCHEMA_OPTIONS);
exports.default = customerFavProjectSchema;
