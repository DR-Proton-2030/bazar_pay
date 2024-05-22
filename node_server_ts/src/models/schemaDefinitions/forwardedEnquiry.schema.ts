import { Schema, VirtualTypeOptions } from "mongoose";
import { GENERAL_SCHEMA_OPTIONS } from "../../constants/model/schemaOption";
import { IAdminAssignedProject } from "../../@types/types/adminAssignedProject.interface";
import SCHEMA_DEFINITION_PROPERTY from "../../constants/model/model.constant";
import BuilderModel from "../wholesaler.model";
import AdminModel from "../wholeSalerEmployee.model";
import { IForwardedEnquiry } from "../../@types/types/forwardedEnquiry.interface";
import BookModel from "../book.model";
import CustomerModel from "../customer.model";
import LayoutModel from "../layout.model";

const forwardedEnquirySchema: Schema<IForwardedEnquiry> =
  new Schema<IForwardedEnquiry>(
    {
      builder_object_id: SCHEMA_DEFINITION_PROPERTY.requiredObjectId,
      project_object_id: SCHEMA_DEFINITION_PROPERTY.requiredObjectId,
      enquiry_object_id: SCHEMA_DEFINITION_PROPERTY.requiredObjectId,
      customer_object_id: SCHEMA_DEFINITION_PROPERTY.requiredObjectId,
      forwarded_by: SCHEMA_DEFINITION_PROPERTY.requiredObjectId,
      forwarded_to: SCHEMA_DEFINITION_PROPERTY.optionalNullObjectId,
      plot_object_id: SCHEMA_DEFINITION_PROPERTY.requiredObjectId,
    },
    {
      ...GENERAL_SCHEMA_OPTIONS,
      toJSON: { virtuals: true },
      toObject: { virtuals: true },
    }
  );

const builderVirtualReference: VirtualTypeOptions<IAdminAssignedProject> = {
  ref: BuilderModel,
  localField: "builder_object_id",
  foreignField: "_id",
  justOne: true,
};

const projectVirtualReference: VirtualTypeOptions<IAdminAssignedProject> = {
  ref: "Project",
  localField: "project_object_id",
  foreignField: "_id",
  justOne: true,
};

const bookVirtualReference: VirtualTypeOptions<IAdminAssignedProject> = {
  ref: BookModel,
  localField: "enquiry_object_id",
  foreignField: "_id",
  justOne: true,
};

const customerVirtualReference: VirtualTypeOptions<IAdminAssignedProject> = {
  ref: CustomerModel,
  localField: "customer_object_id",
  foreignField: "_id",
  justOne: true,
};

const forwardedByVirtualReference: VirtualTypeOptions<IAdminAssignedProject> = {
  ref: AdminModel,
  localField: "forwarded_by",
  foreignField: "_id",
  justOne: true,
};

const forwardedToVirtualReference: VirtualTypeOptions<IAdminAssignedProject> = {
  ref: AdminModel,
  localField: "forwarded_to",
  foreignField: "_id",
  justOne: true,
};

const plotVirtualReference: VirtualTypeOptions<IAdminAssignedProject> = {
  ref: LayoutModel,
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

export default forwardedEnquirySchema;
