"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const forwardedEnquiry_schema_1 = __importDefault(require("./schemaDefinitions/forwardedEnquiry.schema"));
const ForwardedEnquiryModel = (0, mongoose_1.model)("forwardedEnquiry", forwardedEnquiry_schema_1.default);
exports.default = ForwardedEnquiryModel;
