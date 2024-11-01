"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const retailers_schema_1 = __importDefault(require("./schemaDefinitions/retailers.schema"));
const RetailerModel = (0, mongoose_1.model)("retailers", retailers_schema_1.default);
exports.default = RetailerModel;
