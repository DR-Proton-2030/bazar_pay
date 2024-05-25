"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const wholeSalerEmployee_schema_1 = __importDefault(require("./schemaDefinitions/wholeSalerEmployee.schema"));
const WholeSalerEmployeeModel = (0, mongoose_1.model)("wholesaler_employees", wholeSalerEmployee_schema_1.default);
exports.default = WholeSalerEmployeeModel;
