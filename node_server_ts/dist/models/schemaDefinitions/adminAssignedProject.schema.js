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
const adminAssignedProjectSchema = new mongoose_1.Schema({
    admin_object_id: model_constant_1.default.requiredObjectId,
    builder_object_id: model_constant_1.default.requiredObjectId,
    project_object_id: model_constant_1.default.requiredObjectId,
}, Object.assign(Object.assign({}, schemaOption_1.GENERAL_SCHEMA_OPTIONS), { toJSON: { virtuals: true }, toObject: { virtuals: true } }));
const projectVirtualReference = {
    ref: "Project",
    localField: "project_object_id",
    foreignField: "_id",
    justOne: true,
};
const builderVirtualReference = {
    ref: wholesaler_model_1.default,
    localField: "builder_object_id",
    foreignField: "_id",
    justOne: true,
};
const adminVirtualReference = {
    ref: wholeSalerEmployee_model_1.default,
    localField: "admin_object_id",
    foreignField: "_id",
    justOne: true,
};
adminAssignedProjectSchema.virtual("project", projectVirtualReference);
adminAssignedProjectSchema.virtual("admin", adminVirtualReference);
adminAssignedProjectSchema.virtual("builder", builderVirtualReference);
exports.default = adminAssignedProjectSchema;
