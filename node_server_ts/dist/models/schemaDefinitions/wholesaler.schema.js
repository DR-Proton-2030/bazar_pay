"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const model_constant_1 = __importDefault(require("../../constants/model/model.constant"));
const schemaOption_1 = require("../../constants/model/schemaOption");
const wholesalerSchema = new mongoose_1.Schema({
    wholesaler_name: model_constant_1.default.requiredString,
    contact_full_name: model_constant_1.default.requiredString,
    contact_phone_number: model_constant_1.default.requiredString,
    contact_email: model_constant_1.default.requiredString,
    trade_licensce_number: model_constant_1.default.requiredString,
    nid_number: model_constant_1.default.requiredString,
    logo: model_constant_1.default.requiredString,
    business_type: model_constant_1.default.optionalNullString,
    sign_board_photo: model_constant_1.default.requiredString,
    owner_photo: model_constant_1.default.requiredString,
    trade_licensce_photo: model_constant_1.default.requiredString,
    nid_photo: model_constant_1.default.requiredString,
    visiting_card_photo: model_constant_1.default.requiredString,
    product_category: model_constant_1.default.optionalNullString
}, schemaOption_1.GENERAL_SCHEMA_OPTIONS);
exports.default = wholesalerSchema;
