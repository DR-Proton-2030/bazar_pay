import { Schema } from "mongoose";
import { ISubcategorySchema } from "../../ts/interfaces/subcategory.interface";
import SCHEMA_DEFINITION_PROPERTY from "../../constants/model/model.constant";
import { GENERAL_SCHEMA_OPTIONS } from "../../constants/model/schemaOption";

const SubcategorySchema: Schema<ISubcategorySchema> = new Schema<ISubcategorySchema>(
    {
        name: SCHEMA_DEFINITION_PROPERTY.requiredString,
        description: SCHEMA_DEFINITION_PROPERTY.optionalNullString, 
        category: {
            type: Schema.Types.ObjectId,
            ref: "categories",
            required: true,
        },
    },
    GENERAL_SCHEMA_OPTIONS
);

export default SubcategorySchema;
