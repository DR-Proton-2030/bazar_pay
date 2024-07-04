import { Schema } from "mongoose";
import SCHEMA_DEFINITION_PROPERTY from "../../constants/model/model.constant";
import { GENERAL_SCHEMA_OPTIONS } from "../../constants/model/schemaOption";
import { IWholesaler } from "../../@types/types/wholesaler.interface";

const wholesalerSchema: Schema<IWholesaler> = new Schema<IWholesaler>(
	{
		wholesaler_name: SCHEMA_DEFINITION_PROPERTY.requiredString,
		owner_name: SCHEMA_DEFINITION_PROPERTY.requiredString,
		owner_phone: SCHEMA_DEFINITION_PROPERTY.requiredString,
		owner_email: SCHEMA_DEFINITION_PROPERTY.requiredString,
		approval_status: { ...SCHEMA_DEFINITION_PROPERTY.optionalNullString, default: "PENDING" },
		trade_licensce_number: SCHEMA_DEFINITION_PROPERTY.requiredString,
		nid_number: SCHEMA_DEFINITION_PROPERTY.requiredString,
		logo: SCHEMA_DEFINITION_PROPERTY.requiredString,
		sign_board_photo: SCHEMA_DEFINITION_PROPERTY.requiredString,
		trade_licensce_photo: SCHEMA_DEFINITION_PROPERTY.requiredString,
		nid_photo: SCHEMA_DEFINITION_PROPERTY.requiredString,
		wholesaler_owner_photo: SCHEMA_DEFINITION_PROPERTY.requiredString
	},
	GENERAL_SCHEMA_OPTIONS
);

export default wholesalerSchema;
