"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// File: models/subcategory.model.ts
const mongoose_1 = require("mongoose");
const subcategory_schema_1 = __importDefault(require("./schemaDefinitions/subcategory.schema"));
const SubcategoryModel = (0, mongoose_1.model)("sub_categories", subcategory_schema_1.default);
exports.default = SubcategoryModel;
