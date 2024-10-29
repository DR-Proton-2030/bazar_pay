import { Schema } from "mongoose";
import SCHEMA_DEFINITION_PROPERTY from "../../constants/model/model.constant";
import { GENERAL_SCHEMA_OPTIONS } from "../../constants/model/schemaOption";
import { IVariant } from "../../@types/types/variant.interface";

const VariantSchema: Schema<IVariant> = new Schema<IVariant>(
	{
		product_objecct_id: SCHEMA_DEFINITION_PROPERTY.requiredObjectId,
		brand_object_id: SCHEMA_DEFINITION_PROPERTY.requiredObjectId,
		variant_type: SCHEMA_DEFINITION_PROPERTY.requiredString,
		variant_value: SCHEMA_DEFINITION_PROPERTY.requiredString
	},
	GENERAL_SCHEMA_OPTIONS
);

export default VariantSchema;
