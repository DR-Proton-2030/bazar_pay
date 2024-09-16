"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const wholesaler_schema_1 = __importDefault(require("./schemaDefinitions/wholesaler.schema"));
// Need to Update the model
const WholesalerModel = (0, mongoose_1.model)("wholesalers", wholesaler_schema_1.default);
exports.default = WholesalerModel;
