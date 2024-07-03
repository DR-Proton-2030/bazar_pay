import { Schema } from "mongoose";
import SCHEMA_DEFINITION_PROPERTY from "../../constants/model/model.constant";
import { GENERAL_SCHEMA_OPTIONS } from "../../constants/model/schemaOption";
import { ICategory } from "../../@types/types/category.interface";

const CategorySchema: Schema<ICategory> = new Schema<ICategory>(
	{
		name: SCHEMA_DEFINITION_PROPERTY.requiredString,
		description: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
		logo: SCHEMA_DEFINITION_PROPERTY.optionalNullString
	},
	GENERAL_SCHEMA_OPTIONS
);

export default CategorySchema;
