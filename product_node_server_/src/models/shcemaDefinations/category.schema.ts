import { Schema } from "mongoose";
import { ICategorySchema } from "../../ts/interfaces/category.interface";
import SCHEMA_DEFINITION_PROPERTY from "../../constants/model/model.constant";
import { GENERAL_SCHEMA_OPTIONS } from "../../constants/model/schemaOption";

const CategorySchema: Schema<ICategorySchema> = new Schema<ICategorySchema>(
    {
        name: SCHEMA_DEFINITION_PROPERTY.requiredString,
        description: SCHEMA_DEFINITION_PROPERTY.optionalNullString ,
        logo:SCHEMA_DEFINITION_PROPERTY.optionalNullString
    },
    GENERAL_SCHEMA_OPTIONS
);

export default CategorySchema;
