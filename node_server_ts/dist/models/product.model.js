"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const product_schema_1 = __importDefault(require("./schemaDefinitions/product.schema"));
const productModel = (0, mongoose_1.model)("product", product_schema_1.default);
exports.default = productModel;
