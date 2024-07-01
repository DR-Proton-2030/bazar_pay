import { Schema } from "mongoose";
import { IBrandSchema } from "../../ts/interfaces/brand.interface";
import SCHEMA_DEFINITION_PROPERTY from "../../constants/model/model.constant";
import { GENERAL_SCHEMA_OPTIONS } from "../../constants/model/schemaOption";

const BrandSchema: Schema<IBrandSchema> = new Schema<IBrandSchema>(
    {
        brand_name: SCHEMA_DEFINITION_PROPERTY.requiredString,
        description: SCHEMA_DEFINITION_PROPERTY.optionalNullString, 
        country: SCHEMA_DEFINITION_PROPERTY.optionalNullString, 
        logo: SCHEMA_DEFINITION_PROPERTY.optionalNullString, 
    },
    GENERAL_SCHEMA_OPTIONS
);

export default BrandSchema;
