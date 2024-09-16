"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const model_constant_1 = __importDefault(require("../../constants/model/model.constant"));
const schemaOption_1 = require("../../constants/model/schemaOption");
const wholesaler_model_1 = __importDefault(require("../wholesaler.model"));
const product_model_1 = __importDefault(require("../product.model"));
const wholesalerListedproductSchema = new mongoose_1.Schema({
    product_object_id: model_constant_1.default.requiredObjectId,
    wholesaler_object_id: model_constant_1.default.requiredObjectId,
    buying_price: model_constant_1.default.requiredNumber,
    discount: model_constant_1.default.optionalNullNumber,
    marked_price: model_constant_1.default.requiredNumber,
    selling_price: model_constant_1.default.requiredNumber,
    current_stock: model_constant_1.default.requiredNumber,
    selling_status: Object.assign(Object.assign({}, model_constant_1.default.optionalNullString), { default: "PENDING_FOR_APPROVAL" })
}, Object.assign(Object.assign({}, schemaOption_1.GENERAL_SCHEMA_OPTIONS), { toJSON: { virtuals: true }, toObject: { virtuals: true } }));
const wholesalerVirtualReference = {
    ref: wholesaler_model_1.default,
    localField: "wholesaler_object_id",
    foreignField: "_id",
    justOne: true
};
const productVirtualReference = {
    ref: product_model_1.default,
    localField: "product_object_id",
    foreignField: "_id",
    justOne: true
};
wholesalerListedproductSchema.virtual("wholesaler", wholesalerVirtualReference);
wholesalerListedproductSchema.virtual("product", productVirtualReference);
exports.default = wholesalerListedproductSchema;
