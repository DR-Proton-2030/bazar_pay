import { Schema } from "mongoose";
import { GENERAL_SCHEMA_OPTIONS } from "../../constants/model/schemaOption";
import { ICustomer } from "../../@types/types/customer.types";
import SCHEMA_DEFINITION_PROPERTY from "../../constants/model/model.constant";

const customerSchema: Schema<ICustomer> = new Schema<ICustomer>(
  {
    full_name: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
    email: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
    phone: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
    gender: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
    state: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
    address: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
    profile_photo: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
    is_disabled: SCHEMA_DEFINITION_PROPERTY.optionalBoolean,
    referal_code: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
    refered_by_code: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
    password: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
  },
  GENERAL_SCHEMA_OPTIONS
);

export default customerSchema;
