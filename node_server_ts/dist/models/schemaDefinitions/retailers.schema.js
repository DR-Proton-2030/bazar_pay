"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const model_constant_1 = __importDefault(require("../../constants/model/model.constant"));
const schemaOption_1 = require("../../constants/model/schemaOption");
const retailerSchema = new mongoose_1.Schema({
    retailer_name: model_constant_1.default.requiredString,
    contact_name: model_constant_1.default.requiredString,
    contact_email: model_constant_1.default.requiredString,
    contact_phone: model_constant_1.default.requiredString,
    trade_license_number: model_constant_1.default.requiredString,
    nid_number: model_constant_1.default.requiredString,
    sign_board_photo: model_constant_1.default.requiredString,
    retailer_owner_photo: model_constant_1.default.requiredString,
    trade_license_photo: model_constant_1.default.requiredString,
    nid_photo: model_constant_1.default.requiredString,
    logo: model_constant_1.default.requiredString
}, schemaOption_1.GENERAL_SCHEMA_OPTIONS);
exports.default = retailerSchema;
