"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schemaOption_1 = require("../../constants/model/schemaOption");
const model_constant_1 = __importDefault(require("../../constants/model/model.constant"));
const layout_model_1 = __importDefault(require("../layout.model"));
const wholesaler_model_1 = __importDefault(require("../wholesaler.model"));
const bookSchema = new mongoose_1.Schema({
    customer_object_id: model_constant_1.default.requiredObjectId,
    plot_object_id: model_constant_1.default.requiredObjectId,
    project_object_id: model_constant_1.default.requiredObjectId,
    booking_amount: model_constant_1.default.optionalNullObject,
    builder_object_id: model_constant_1.default.requiredObjectId,
    enqury_status: Object.assign(Object.assign({}, model_constant_1.default.optionalNullString), { default: "ENQUIRY" }),
}, Object.assign(Object.assign({}, schemaOption_1.GENERAL_SCHEMA_OPTIONS), { toJSON: { virtuals: true }, toObject: { virtuals: true } }));
const projectVirtualReference = {
    ref: "Project",
    localField: "project_object_id",
    foreignField: "_id",
    justOne: true,
};
const customerVirtualReference = {
    ref: "Customer",
    localField: "customer_object_id",
    foreignField: "_id",
    justOne: true,
};
const plotVirtualReference = {
    ref: layout_model_1.default,
    localField: "plot_object_id",
    foreignField: "_id",
    justOne: true,
};
const builderVirtualReference = {
    ref: wholesaler_model_1.default,
    localField: "builder_object_id",
    foreignField: "_id",
    justOne: true,
};
bookSchema.virtual("customer", customerVirtualReference);
bookSchema.virtual("project", projectVirtualReference);
bookSchema.virtual("plot", plotVirtualReference);
bookSchema.virtual("builder", builderVirtualReference);
exports.default = bookSchema;
