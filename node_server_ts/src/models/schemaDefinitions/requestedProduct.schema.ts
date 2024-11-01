import { Schema, VirtualTypeOptions } from "mongoose";
import SCHEMA_DEFINITION_PROPERTY from "../../constants/model/model.constant";
import { GENERAL_SCHEMA_OPTIONS } from "../../constants/model/schemaOption";
import { IRequestedProduct } from "../../@types/types/requestProduct.interface";

const requestedProductSchema: Schema<IRequestedProduct> = new Schema<IRequestedProduct>(
	{
		product_name: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
		product_image: [SCHEMA_DEFINITION_PROPERTY.optionalNullString],
	},
	{
		...GENERAL_SCHEMA_OPTIONS,
		toJSON: { virtuals: true },
		toObject: { virtuals: true }
	}
);


export default requestedProductSchema;
