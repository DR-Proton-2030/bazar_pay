import { Schema } from "mongoose";
import SCHEMA_DEFINITION_PROPERTY from "../../constants/model/model.constant";
import { GENERAL_SCHEMA_OPTIONS } from "../../constants/model/schemaOption";
import { IBrand } from "../../@types/types/brand.interface";

const BrandSchema: Schema<IBrand> = new Schema<IBrand>(
	{
		name: SCHEMA_DEFINITION_PROPERTY.requiredString,
		description: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
		country: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
		logo: SCHEMA_DEFINITION_PROPERTY.optionalNullString
	},
	GENERAL_SCHEMA_OPTIONS
);

export default BrandSchema;
