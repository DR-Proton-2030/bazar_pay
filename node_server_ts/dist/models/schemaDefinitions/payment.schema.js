"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const model_constant_1 = __importDefault(require("../../constants/model/model.constant"));
const schemaOption_1 = require("../../constants/model/schemaOption");
const paymentSchema = new mongoose_1.Schema({
    wholesaler_object_id: model_constant_1.default.requiredObjectId,
    retailer_object_id: model_constant_1.default.requiredObjectId,
    wholesaler_listed_product_object_id: model_constant_1.default.requiredObjectId,
    amount: model_constant_1.default.requiredNumber,
    payment_method: model_constant_1.default.requiredString,
    payment_status: model_constant_1.default.requiredString,
    transaction_id: model_constant_1.default.optionalNullString
}, Object.assign(Object.assign({}, schemaOption_1.GENERAL_SCHEMA_OPTIONS), { toJSON: { virtuals: true }, toObject: { virtuals: true } }));
// const wholesalerVirtualReference: VirtualTypeOptions<IProduct> = {
//   ref: wholesalerModel,
//   localField: "wholesaler_object_id",
//   foreignField: "_id",
//   justOne: true,
// };
// productSchema.virtual("wholesaler", wholesalerVirtualReference);
exports.default = paymentSchema;
