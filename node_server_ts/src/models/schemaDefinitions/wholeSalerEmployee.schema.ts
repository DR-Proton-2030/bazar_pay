import { Schema, VirtualTypeOptions } from "mongoose";
import SCHEMA_DEFINITION_PROPERTY from "../../constants/model/model.constant";
import { GENERAL_SCHEMA_OPTIONS } from "../../constants/model/schemaOption";
import { IWholesalerEmployee } from "../../@types/types/wholeSalerEmployee.interfcae";

const wholesalerEmployeeSchema: Schema<IWholesalerEmployee> = new Schema<IWholesalerEmployee>(
  {
    full_name: SCHEMA_DEFINITION_PROPERTY.requiredString,
    email: SCHEMA_DEFINITION_PROPERTY.requiredString,
    phone_number: SCHEMA_DEFINITION_PROPERTY.requiredString,
    password: SCHEMA_DEFINITION_PROPERTY.requiredString,
    role: SCHEMA_DEFINITION_PROPERTY.requiredString,
    expo_token: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
    wholesaler_object_id: SCHEMA_DEFINITION_PROPERTY.requiredObjectId,
    last_login_date: SCHEMA_DEFINITION_PROPERTY.optionalNullDate,
  },
  {
    ...GENERAL_SCHEMA_OPTIONS,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const wholesalerVirtualReference: VirtualTypeOptions<IWholesalerEmployee> = {
  ref: "wholesalers",
  localField: "wholesaler_object_id",
  foreignField: "_id",
  justOne: true,
};

wholesalerEmployeeSchema.virtual("wholesaler", wholesalerVirtualReference);

export default wholesalerEmployeeSchema;
