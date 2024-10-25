"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const model_constant_1 = __importDefault(require("../../constants/model/model.constant"));
const schemaOption_1 = require("../../constants/model/schemaOption");
const category_model_1 = __importDefault(require("../category.model"));
const brand_model_1 = __importDefault(require("../brand.model"));
const subcategory_model_1 = __importDefault(require("../subcategory.model"));
const productStatus_1 = require("../../constants/productStatus");
const productSchema = new mongoose_1.Schema({
    product_name: model_constant_1.default.optionalNullString,
    unit: model_constant_1.default.optionalNullString,
    product_description: model_constant_1.default.optionalNullString,
    product_image: [model_constant_1.default.optionalNullString],
    brand_object_id: model_constant_1.default.requiredObjectId,
    subcategory_object_id: model_constant_1.default.requiredObjectId,
    category_object_id: model_constant_1.default.requiredObjectId,
    profit_percentage: model_constant_1.default.optionalNullNumber,
    product_status: Object.assign(Object.assign({}, model_constant_1.default.optionalNullString), { default: productStatus_1.PRODUCT_STATUS.active })
}, Object.assign(Object.assign({}, schemaOption_1.GENERAL_SCHEMA_OPTIONS), { toJSON: { virtuals: true }, toObject: { virtuals: true } }));
const categoryVirtualReference = {
    ref: category_model_1.default,
    localField: "category_object_id",
    foreignField: "_id",
    justOne: true
};
const brandVirtualReference = {
    ref: brand_model_1.default,
    localField: "brand_object_id",
    foreignField: "_id",
    justOne: true
};
const subCategoryVirtualReference = {
    ref: subcategory_model_1.default,
    localField: "subcategory_object_id",
    foreignField: "_id",
    justOne: true
};
productSchema.virtual("category", categoryVirtualReference);
productSchema.virtual("subcategory", subCategoryVirtualReference);
productSchema.virtual("brand", brandVirtualReference);
exports.default = productSchema;
