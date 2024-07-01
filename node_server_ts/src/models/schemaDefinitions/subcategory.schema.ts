import { Schema } from "mongoose";
import SCHEMA_DEFINITION_PROPERTY from "../../constants/model/model.constant";
import { GENERAL_SCHEMA_OPTIONS } from "../../constants/model/schemaOption";
import { ISubcategorySchema } from "../../@types/types/subcategory.interface";

const SubcategorySchema: Schema<ISubcategorySchema> =
  new Schema<ISubcategorySchema>(
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
