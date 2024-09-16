"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const model_constant_1 = __importDefault(require("../../constants/model/model.constant"));
const schemaOption_1 = require("../../constants/model/schemaOption");
const adminSchema = new mongoose_1.Schema({
    full_name: model_constant_1.default.requiredString,
    email: model_constant_1.default.requiredString,
    phone_number: model_constant_1.default.requiredString,
    password: model_constant_1.default.requiredString,
    is_disabled: model_constant_1.default.optionalBoolean,
    role: model_constant_1.default.requiredString,
    has_all_state_access: model_constant_1.default.optionalBoolean,
    has_company_all_access: model_constant_1.default.optionalBoolean,
    last_login_date: model_constant_1.default.optionalNullDate
}, Object.assign(Object.assign({}, schemaOption_1.GENERAL_SCHEMA_OPTIONS), { toJSON: { virtuals: true }, toObject: { virtuals: true } }));
exports.default = adminSchema;
