import { Schema, VirtualTypeOptions } from "mongoose";
import { GENERAL_SCHEMA_OPTIONS } from "../../constants/model/schemaOption";
import { IProject } from "../../@types/types/project.interface";
import SCHEMA_DEFINITION_PROPERTY from "../../constants/model/model.constant";

const projectSchema: Schema<IProject> = new Schema<IProject>(
  {
    project_name: SCHEMA_DEFINITION_PROPERTY.requiredString,
    builder_object_id: SCHEMA_DEFINITION_PROPERTY.requiredObjectId,
    state: SCHEMA_DEFINITION_PROPERTY.requiredString,
    address_lat: SCHEMA_DEFINITION_PROPERTY.optionalNullNumber,
    address_long: SCHEMA_DEFINITION_PROPERTY.optionalNullNumber,
    formatted_address: SCHEMA_DEFINITION_PROPERTY.requiredString,
    layout_model_object_id: SCHEMA_DEFINITION_PROPERTY.optionalNullObjectId,
    number_of_plots: SCHEMA_DEFINITION_PROPERTY.requiredNumber,
    price_per_sq: SCHEMA_DEFINITION_PROPERTY.requiredNumber,
    total_sq_feet: SCHEMA_DEFINITION_PROPERTY.requiredNumber,
    description: SCHEMA_DEFINITION_PROPERTY.requiredString,
    average_rating: SCHEMA_DEFINITION_PROPERTY.optionalNullNumber,
    no_of_ratings: SCHEMA_DEFINITION_PROPERTY.optionalNullNumber,
    is_active: SCHEMA_DEFINITION_PROPERTY.optionalBoolean,
    layout_image: SCHEMA_DEFINITION_PROPERTY.requiredString
  },
  { ...GENERAL_SCHEMA_OPTIONS, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

const builderVirtualReference: VirtualTypeOptions<IProject> = {
  ref: "builder",
  localField: "builder_object_id",
  foreignField: "_id",
  justOne: true
};

projectSchema.virtual("builder", builderVirtualReference);

export default projectSchema;