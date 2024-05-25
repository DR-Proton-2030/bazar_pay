"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schemaOption_1 = require("../../constants/model/schemaOption");
const model_constant_1 = __importDefault(require("../../constants/model/model.constant"));
const retailersdSchema = new mongoose_1.Schema({
    fullName: model_constant_1.default.optionalNullString,
    email: model_constant_1.default.optionalNullString,
    phone: model_constant_1.default.optionalNullString,
    gender: Object.assign({ type: String, enum: ['male', 'female', 'other'] }, model_constant_1.default.optionalNullObject),
    state: model_constant_1.default.optionalNullString,
    address: model_constant_1.default.optionalNullString,
    profilePhoto: model_constant_1.default.optionalNullString,
    password: model_constant_1.default.optionalNullString,
    businessName: model_constant_1.default.optionalNullString,
    businessType: Object.assign({ type: String, enum: ['sole proprietorship', 'partnership', 'corporation', 'LLC', 'other'] }, model_constant_1.default.optionalNullObject),
    businessRegistrationNumber: model_constant_1.default.optionalNullString,
    businessAddress: model_constant_1.default.optionalNullString,
    businessPhone: model_constant_1.default.optionalNullString,
    taxIdentificationNumber: model_constant_1.default.optionalNullString,
    productsSold: [model_constant_1.default.optionalNullObject]
}, schemaOption_1.GENERAL_SCHEMA_OPTIONS);
exports.default = retailersdSchema;
