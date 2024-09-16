"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// File: models/brand.model.ts
const mongoose_1 = require("mongoose");
const brand_schema_1 = __importDefault(require("./schemaDefinitions/brand.schema"));
const BrandModel = (0, mongoose_1.model)("brands", brand_schema_1.default);
exports.default = BrandModel;
