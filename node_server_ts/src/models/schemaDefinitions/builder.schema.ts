import { Schema, SchemaTypeOptions } from "mongoose";
import SCHEMA_DEFINITION_PROPERTY from "../../constants/model/model.constant";
import { GENERAL_SCHEMA_OPTIONS } from "../../constants/model/schemaOption";
import { IAdmin } from "../../@types/types/admin.interfcae";
import { IBuilder } from "../../@types/types/builder.interface";

const builderSchema: Schema<IBuilder> = new Schema<IBuilder>(
  {
    builder_name: SCHEMA_DEFINITION_PROPERTY.requiredString,
    builder_number: SCHEMA_DEFINITION_PROPERTY.requiredString,
    average_ratings: SCHEMA_DEFINITION_PROPERTY.optionalNullNumber,
    cin_number: SCHEMA_DEFINITION_PROPERTY.requiredString,
    contact_first_name: SCHEMA_DEFINITION_PROPERTY.requiredString,
    contact_last_name: SCHEMA_DEFINITION_PROPERTY.requiredString,
    contact_phone_number: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
    email: SCHEMA_DEFINITION_PROPERTY.requiredString,
    GST_number: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
    no_ratings: SCHEMA_DEFINITION_PROPERTY.optionalNullNumber,
    number_projects: SCHEMA_DEFINITION_PROPERTY.optionalNullNumber,
    PAN: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
    builder_logo: SCHEMA_DEFINITION_PROPERTY.requiredString
  },
  GENERAL_SCHEMA_OPTIONS
);

export default builderSchema;
