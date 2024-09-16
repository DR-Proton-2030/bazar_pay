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
const retailer_model_1 = __importDefault(require("../retailer.model"));
const payment_model_1 = __importDefault(require("../payment.model"));
const wholesalerListedproduct_model_1 = __importDefault(require("../wholesalerListedproduct.model"));
const orderSchema = new mongoose_1.Schema({
    product_object_id: model_constant_1.default.requiredObjectId,
    wholesaler_object_id: model_constant_1.default.requiredObjectId,
    retailer_object_id: model_constant_1.default.requiredObjectId,
    wholesaler_listed_product_object_id: model_constant_1.default.requiredObjectId,
    payment_object_id: model_constant_1.default.optionalNullObjectId,
    order_date: model_constant_1.default.optionalNullDate,
    order_quantity: model_constant_1.default.optionalNullNumber,
    order_status: Object.assign(Object.assign({}, model_constant_1.default.optionalNullString), { default: "PENDING" }),
    possible_delivery_date: model_constant_1.default.optionalNullDate,
    possible_delivery_time: model_constant_1.default.optionalNullString
}, Object.assign(Object.assign({}, schemaOption_1.GENERAL_SCHEMA_OPTIONS), { toJSON: { virtuals: true }, toObject: { virtuals: true } }));
const wholesalerVirtualReference = {
    ref: wholesaler_model_1.default,
    localField: "wholesaler_object_id",
    foreignField: "_id",
    justOne: true
};
const wholesalerProductVirtualReference = {
    ref: wholesalerListedproduct_model_1.default,
    localField: "wholesaler_listed_product_object_id",
    foreignField: "_id",
    justOne: true
};
const productVirtualReference = {
    ref: product_model_1.default,
    localField: "product_object_id",
    foreignField: "_id",
    justOne: true
};
const retailerVirtualReference = {
    ref: retailer_model_1.default,
    localField: "retailer_object_id",
    foreignField: "_id",
    justOne: true
};
const paymentVirtualReference = {
    ref: payment_model_1.default,
    localField: "payment_object_id",
    foreignField: "_id",
    justOne: true
};
orderSchema.virtual("wholesaler", wholesalerVirtualReference);
orderSchema.virtual("product", productVirtualReference);
orderSchema.virtual("retailer", retailerVirtualReference);
orderSchema.virtual("wholesalerListedProduct", wholesalerProductVirtualReference);
orderSchema.virtual("payment", paymentVirtualReference);
exports.default = orderSchema;
