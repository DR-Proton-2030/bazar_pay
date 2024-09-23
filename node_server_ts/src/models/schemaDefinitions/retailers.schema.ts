import { Schema } from "mongoose";
import SCHEMA_DEFINITION_PROPERTY from "../../constants/model/model.constant";
import { GENERAL_SCHEMA_OPTIONS } from "../../constants/model/schemaOption";
import { IRetailer } from "../../@types/types/retailer.types";

const retailerSchema: Schema<IRetailer> = new Schema<IRetailer>(
	{
		retailer_name: SCHEMA_DEFINITION_PROPERTY.requiredString,
		contact_name: SCHEMA_DEFINITION_PROPERTY.requiredString,
		contact_email: SCHEMA_DEFINITION_PROPERTY.requiredString,
		contact_phone: SCHEMA_DEFINITION_PROPERTY.requiredString,
		trade_license_number: SCHEMA_DEFINITION_PROPERTY.requiredString,
		nid_number: SCHEMA_DEFINITION_PROPERTY.requiredString,
		sign_board_photo: SCHEMA_DEFINITION_PROPERTY.requiredString,
		retailer_owner_photo: SCHEMA_DEFINITION_PROPERTY.requiredString,
		trade_license_photo: SCHEMA_DEFINITION_PROPERTY.requiredString,
		nid_photo: SCHEMA_DEFINITION_PROPERTY.requiredString,
		logo: SCHEMA_DEFINITION_PROPERTY.requiredString
	},
	GENERAL_SCHEMA_OPTIONS
);

export default retailerSchema;
