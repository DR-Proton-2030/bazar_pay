import { Schema } from "mongoose";
import { GENERAL_SCHEMA_OPTIONS } from "../../constants/model/schemaOption";
import SCHEMA_DEFINITION_PROPERTY from "../../constants/model/model.constant";
import { IRetailer } from "../../@types/types/retailer.types";

const retailersdSchema: Schema<IRetailer> = new Schema<IRetailer>(
  {
    fullName: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
    email: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
    phone: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
    gender: {
      type: String,
      enum: ['male', 'female', 'other'],
      ...SCHEMA_DEFINITION_PROPERTY.optionalNullObject
    },
    state: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
    address: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
    profilePhoto: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
    password: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
    businessName: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
    businessType: {
      type: String,
      enum: ['sole proprietorship', 'partnership', 'corporation', 'LLC', 'other'],
      ...SCHEMA_DEFINITION_PROPERTY.optionalNullObject
    },
    businessRegistrationNumber: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
    businessAddress: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
    businessPhone: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
    taxIdentificationNumber: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
    productsSold: [SCHEMA_DEFINITION_PROPERTY.optionalNullObject] 
  },
  GENERAL_SCHEMA_OPTIONS
);

export default retailersdSchema;
