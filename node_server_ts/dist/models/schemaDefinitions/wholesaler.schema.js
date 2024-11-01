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
    owner_name: model_constant_1.default.requiredString,
    owner_phone: model_constant_1.default.requiredString,
    owner_email: model_constant_1.default.requiredString,
    approval_status: Object.assign(Object.assign({}, model_constant_1.default.optionalNullString), { default: "PENDING" }),
    trade_licensce_number: model_constant_1.default.requiredString,
    nid_number: model_constant_1.default.requiredString,
    logo: model_constant_1.default.requiredString,
    sign_board_photo: model_constant_1.default.requiredString,
    trade_licensce_photo: model_constant_1.default.requiredString,
    nid_photo: model_constant_1.default.requiredString,
    wholesaler_owner_photo: model_constant_1.default.requiredString
}, schemaOption_1.GENERAL_SCHEMA_OPTIONS);
exports.default = wholesalerSchema;
