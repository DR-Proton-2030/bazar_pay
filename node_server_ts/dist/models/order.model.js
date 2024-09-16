"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const order_schema_1 = __importDefault(require("./schemaDefinitions/order.schema"));
const OrderModel = (0, mongoose_1.model)("orders", order_schema_1.default);
exports.default = OrderModel;
