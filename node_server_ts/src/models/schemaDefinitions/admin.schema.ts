import { Schema, VirtualTypeOptions } from "mongoose";
import SCHEMA_DEFINITION_PROPERTY from "../../constants/model/model.constant";
import { GENERAL_SCHEMA_OPTIONS } from "../../constants/model/schemaOption";
import { IAdmin } from "../../@types/types/admin.interfcae";

const adminSchema: Schema<IAdmin> = new Schema<IAdmin>(
	{
		full_name: SCHEMA_DEFINITION_PROPERTY.requiredString,
		email: SCHEMA_DEFINITION_PROPERTY.requiredString,
		phone_number: SCHEMA_DEFINITION_PROPERTY.requiredString,
		password: SCHEMA_DEFINITION_PROPERTY.requiredString,
		is_disabled: SCHEMA_DEFINITION_PROPERTY.optionalBoolean,
		role: SCHEMA_DEFINITION_PROPERTY.requiredString,
		has_all_state_access: SCHEMA_DEFINITION_PROPERTY.optionalBoolean,
		has_company_all_access: SCHEMA_DEFINITION_PROPERTY.optionalBoolean,
		last_login_date: SCHEMA_DEFINITION_PROPERTY.optionalNullDate
	},
	{
		...GENERAL_SCHEMA_OPTIONS,
		toJSON: { virtuals: true },
		toObject: { virtuals: true }
	}
);

export default adminSchema;
