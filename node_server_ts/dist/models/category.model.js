"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// File: models/category.model.ts
const mongoose_1 = require("mongoose");
const category_schema_1 = __importDefault(require("./schemaDefinitions/category.schema"));
const CategoryModel = (0, mongoose_1.model)("categories", category_schema_1.default);
exports.default = CategoryModel;
