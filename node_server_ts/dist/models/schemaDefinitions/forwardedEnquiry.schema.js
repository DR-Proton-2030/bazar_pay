"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schemaOption_1 = require("../../constants/model/schemaOption");
const model_constant_1 = __importDefault(require("../../constants/model/model.constant"));
const wholesaler_model_1 = __importDefault(require("../wholesaler.model"));
const wholeSalerEmployee_model_1 = __importDefault(require("../wholeSalerEmployee.model"));
const book_model_1 = __importDefault(require("../book.model"));
const customer_model_1 = __importDefault(require("../customer.model"));
const layout_model_1 = __importDefault(require("../layout.model"));
const forwardedEnquirySchema = new mongoose_1.Schema({
    builder_object_id: model_constant_1.default.requiredObjectId,
    project_object_id: model_constant_1.default.requiredObjectId,
    enquiry_object_id: model_constant_1.default.requiredObjectId,
    customer_object_id: model_constant_1.default.requiredObjectId,
    forwarded_by: model_constant_1.default.requiredObjectId,
    forwarded_to: model_constant_1.default.optionalNullObjectId,
    plot_object_id: model_constant_1.default.requiredObjectId,
}, Object.assign(Object.assign({}, schemaOption_1.GENERAL_SCHEMA_OPTIONS), { toJSON: { virtuals: true }, toObject: { virtuals: true } }));
const builderVirtualReference = {
    ref: wholesaler_model_1.default,
    localField: "builder_object_id",
    foreignField: "_id",
    justOne: true,
};
const projectVirtualReference = {
    ref: "Project",
    localField: "project_object_id",
    foreignField: "_id",
    justOne: true,
};
const bookVirtualReference = {
    ref: book_model_1.default,
    localField: "enquiry_object_id",
    foreignField: "_id",
    justOne: true,
};
const customerVirtualReference = {
    ref: customer_model_1.default,
    localField: "customer_object_id",
    foreignField: "_id",
    justOne: true,
};
const forwardedByVirtualReference = {
    ref: wholeSalerEmployee_model_1.default,
    localField: "forwarded_by",
    foreignField: "_id",
    justOne: true,
};
const forwardedToVirtualReference = {
    ref: wholeSalerEmployee_model_1.default,
    localField: "forwarded_to",
    foreignField: "_id",
    justOne: true,
};
const plotVirtualReference = {
    ref: layout_model_1.default,
    localField: "plot_object_id",
    foreignField: "_id",
    justOne: true,
};
forwardedEnquirySchema.virtual("builder", builderVirtualReference);
forwardedEnquirySchema.virtual("project", projectVirtualReference);
forwardedEnquirySchema.virtual("book", bookVirtualReference);
forwardedEnquirySchema.virtual("customer", customerVirtualReference);
forwardedEnquirySchema.virtual("forwarded_by_details", forwardedByVirtualReference);
forwardedEnquirySchema.virtual("forwarded_to_details", forwardedToVirtualReference);
forwardedEnquirySchema.virtual("plot", plotVirtualReference);
exports.default = forwardedEnquirySchema;
