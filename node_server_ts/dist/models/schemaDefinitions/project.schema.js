"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schemaOption_1 = require("../../constants/model/schemaOption");
const model_constant_1 = __importDefault(require("../../constants/model/model.constant"));
const projectSchema = new mongoose_1.Schema({
    project_name: model_constant_1.default.requiredString,
    builder_object_id: model_constant_1.default.requiredObjectId,
    state: model_constant_1.default.requiredString,
    address_lat: model_constant_1.default.optionalNullNumber,
    address_long: model_constant_1.default.optionalNullNumber,
    formatted_address: model_constant_1.default.requiredString,
    layout_model_object_id: model_constant_1.default.optionalNullObjectId,
    number_of_plots: model_constant_1.default.requiredNumber,
    price_per_sq: model_constant_1.default.requiredNumber,
    total_sq_feet: model_constant_1.default.requiredNumber,
    description: model_constant_1.default.requiredString,
    average_rating: model_constant_1.default.optionalNullNumber,
    no_of_ratings: model_constant_1.default.optionalNullNumber,
    is_active: model_constant_1.default.optionalBoolean,
    layout_image: model_constant_1.default.requiredString
}, Object.assign(Object.assign({}, schemaOption_1.GENERAL_SCHEMA_OPTIONS), { toJSON: { virtuals: true }, toObject: { virtuals: true } }));
const builderVirtualReference = {
    ref: "builder",
    localField: "builder_object_id",
    foreignField: "_id",
    justOne: true
};
projectSchema.virtual("builder", builderVirtualReference);
exports.default = projectSchema;
