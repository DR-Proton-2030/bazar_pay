"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const model_constant_1 = __importDefault(require("../../constants/model/model.constant"));
const schemaOption_1 = require("../../constants/model/schemaOption");
const category_model_1 = __importDefault(require("../category.model"));
const SubcategorySchema = new mongoose_1.Schema({
    name: model_constant_1.default.requiredString,
    description: model_constant_1.default.optionalNullString,
    category_object_id: model_constant_1.default.requiredObjectId,
    sub_category_image: model_constant_1.default.optionalNullString
}, Object.assign(Object.assign({}, schemaOption_1.GENERAL_SCHEMA_OPTIONS), { toJSON: { virtuals: true }, toObject: { virtuals: true } }));
const categoryVirtualReference = {
    ref: category_model_1.default,
    localField: "category_object_id",
    foreignField: "_id",
    justOne: true
};
SubcategorySchema.virtual("categories", categoryVirtualReference);
exports.default = SubcategorySchema;
