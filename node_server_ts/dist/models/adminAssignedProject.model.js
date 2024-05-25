"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const adminAssignedProject_schema_1 = __importDefault(require("./schemaDefinitions/adminAssignedProject.schema"));
const AdminAssignedProjectModel = (0, mongoose_1.model)("admin_assigned_project", adminAssignedProject_schema_1.default);
exports.default = AdminAssignedProjectModel;
