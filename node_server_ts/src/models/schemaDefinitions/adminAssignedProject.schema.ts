import { Schema, VirtualTypeOptions } from "mongoose";
import { GENERAL_SCHEMA_OPTIONS } from "../../constants/model/schemaOption";
import { IAdminAssignedProject } from "../../@types/types/adminAssignedProject.interface";
import SCHEMA_DEFINITION_PROPERTY from "../../constants/model/model.constant";
import BuilderModel from "../builder.model";
import AdminModel from "../admin.model";

const adminAssignedProjectSchema: Schema<IAdminAssignedProject> =
  new Schema<IAdminAssignedProject>(
    {
      admin_object_id: SCHEMA_DEFINITION_PROPERTY.requiredObjectId,
      builder_object_id: SCHEMA_DEFINITION_PROPERTY.requiredObjectId,
      project_object_id: SCHEMA_DEFINITION_PROPERTY.requiredObjectId,
    },
    {
      ...GENERAL_SCHEMA_OPTIONS,
      toJSON: { virtuals: true },
      toObject: { virtuals: true },
    }
  );

const projectVirtualReference: VirtualTypeOptions<IAdminAssignedProject> = {
  ref: "Project",
  localField: "project_object_id",
  foreignField: "_id",
  justOne: true,
};

const builderVirtualReference: VirtualTypeOptions<IAdminAssignedProject> = {
  ref: BuilderModel,
  localField: "builder_object_id",
  foreignField: "_id",
  justOne: true,
};

const adminVirtualReference: VirtualTypeOptions<IAdminAssignedProject> = {
  ref: AdminModel,
  localField: "admin_object_id",
  foreignField: "_id",
  justOne: true,
};

adminAssignedProjectSchema.virtual("project", projectVirtualReference);
adminAssignedProjectSchema.virtual("admin", adminVirtualReference);
adminAssignedProjectSchema.virtual("builder", builderVirtualReference);

export default adminAssignedProjectSchema;
