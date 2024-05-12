import { Schema, VirtualTypeOptions, model } from "mongoose";
import { GENERAL_SCHEMA_OPTIONS } from "../../constants/model/schemaOption";
import SCHEMA_DEFINITION_PROPERTY from "../../constants/model/model.constant";
import { ILayout } from "../../@types/types/layout.types";
import { IBook } from "../../@types/types/book.interface";
import LayoutModel from "../layout.model";
import BuilderModel from "../builder.model";

const bookSchema: Schema<IBook> = new Schema<IBook>(
  {
    customer_object_id: SCHEMA_DEFINITION_PROPERTY.requiredObjectId,
    plot_object_id: SCHEMA_DEFINITION_PROPERTY.requiredObjectId,
    project_object_id: SCHEMA_DEFINITION_PROPERTY.requiredObjectId,
    booking_amount: SCHEMA_DEFINITION_PROPERTY.optionalNullObject,
    builder_object_id: SCHEMA_DEFINITION_PROPERTY.requiredObjectId,
    enqury_status: {
      ...SCHEMA_DEFINITION_PROPERTY.optionalNullString,
      default: "ENQUIRY",
    },
  },
  {
    ...GENERAL_SCHEMA_OPTIONS,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const projectVirtualReference: VirtualTypeOptions<IBook> = {
  ref: "Project",
  localField: "project_object_id",
  foreignField: "_id",
  justOne: true,
};
const customerVirtualReference: VirtualTypeOptions<IBook> = {
  ref: "Customer",
  localField: "customer_object_id",
  foreignField: "_id",
  justOne: true,
};
const plotVirtualReference: VirtualTypeOptions<IBook> = {
  ref: LayoutModel,
  localField: "plot_object_id",
  foreignField: "_id",
  justOne: true,
};
const builderVirtualReference: VirtualTypeOptions<IBook> = {
  ref: BuilderModel,
  localField: "builder_object_id",
  foreignField: "_id",
  justOne: true,
};

bookSchema.virtual("customer", customerVirtualReference);
bookSchema.virtual("project", projectVirtualReference);
bookSchema.virtual("plot", plotVirtualReference);
bookSchema.virtual("builder", builderVirtualReference);

export default bookSchema;
