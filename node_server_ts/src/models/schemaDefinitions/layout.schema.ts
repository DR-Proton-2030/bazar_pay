import { Schema, VirtualTypeOptions } from "mongoose";
import { GENERAL_SCHEMA_OPTIONS } from "../../constants/model/schemaOption";
import SCHEMA_DEFINITION_PROPERTY from "../../constants/model/model.constant";
import { ILayout } from "../../@types/types/layout.types";

const layoutSchema: Schema<ILayout> =
  new Schema<ILayout>(
    {
     project_object_id:SCHEMA_DEFINITION_PROPERTY.requiredObjectId,
     x: SCHEMA_DEFINITION_PROPERTY.requiredNumber,
     y: SCHEMA_DEFINITION_PROPERTY.requiredNumber,
     is_booked: SCHEMA_DEFINITION_PROPERTY.optionalBoolean,
     facing: SCHEMA_DEFINITION_PROPERTY.optionalNullString
    },
    { ...GENERAL_SCHEMA_OPTIONS, toJSON: { virtuals: true }, toObject: { virtuals: true } }
  );

  const projectVirtualReference: VirtualTypeOptions<ILayout> = {
    ref: "project",
    localField: "builder_object_id",
    foreignField: "_id",
    justOne: true
  };
  

export default layoutSchema;
