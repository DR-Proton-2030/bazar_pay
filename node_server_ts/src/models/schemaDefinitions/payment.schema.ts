import { Schema, SchemaTypeOptions, VirtualTypeOptions } from "mongoose";
import SCHEMA_DEFINITION_PROPERTY from "../../constants/model/model.constant";
import { GENERAL_SCHEMA_OPTIONS } from "../../constants/model/schemaOption";
import { IPaymnet } from "../../@types/types/payment.types";

const paymentSchema: Schema<IPaymnet> = new Schema<IPaymnet>(
	{
		wholesaler_object_id: SCHEMA_DEFINITION_PROPERTY.requiredObjectId,
		retailer_object_id: SCHEMA_DEFINITION_PROPERTY.requiredObjectId,
		wholesaler_listed_product_object_id: SCHEMA_DEFINITION_PROPERTY.requiredObjectId,
		amount: SCHEMA_DEFINITION_PROPERTY.requiredNumber,
		payment_method: SCHEMA_DEFINITION_PROPERTY.requiredString,
		payment_status: SCHEMA_DEFINITION_PROPERTY.requiredString,
		transaction_id: SCHEMA_DEFINITION_PROPERTY.optionalNullString
	},
	{
		...GENERAL_SCHEMA_OPTIONS,
		toJSON: { virtuals: true },
		toObject: { virtuals: true }
	}
);

// const wholesalerVirtualReference: VirtualTypeOptions<IProduct> = {
//   ref: wholesalerModel,
//   localField: "wholesaler_object_id",
//   foreignField: "_id",
//   justOne: true,
// };

// productSchema.virtual("wholesaler", wholesalerVirtualReference);

export default paymentSchema;
