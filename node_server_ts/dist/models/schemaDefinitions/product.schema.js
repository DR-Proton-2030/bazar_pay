"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const model_constant_1 = __importDefault(require("../../constants/model/model.constant"));
const schemaOption_1 = require("../../constants/model/schemaOption");
const productSchema = new mongoose_1.Schema({
    product_name: model_constant_1.default.optionalNullString,
    wholesalerSaler_id: model_constant_1.default.optionalNullString,
    product_buying_price: model_constant_1.default.optionalNullString,
    product_saling_price: model_constant_1.default.optionalNullString,
    unit: model_constant_1.default.optionalNullString,
    discount: model_constant_1.default.optionalNullNumber,
    current_stock: model_constant_1.default.optionalNullString,
    free: model_constant_1.default.optionalNullString,
    product_description: model_constant_1.default.optionalNullString,
    product_image: model_constant_1.default.optionalNullString,
    bar_code_photo: model_constant_1.default.optionalNullString,
    product_warenty: model_constant_1.default.optionalNullString,
    product_discount: model_constant_1.default.optionalNullString,
    product_bhat: model_constant_1.default.optionalNullString,
    Total: model_constant_1.default.optionalNullNumber,
}, schemaOption_1.GENERAL_SCHEMA_OPTIONS);
exports.default = productSchema;
