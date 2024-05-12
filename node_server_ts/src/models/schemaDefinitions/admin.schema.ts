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
    builder_object_id: SCHEMA_DEFINITION_PROPERTY.optionalNullObjectId,
    is_disabled: SCHEMA_DEFINITION_PROPERTY.optionalBoolean,
    role: SCHEMA_DEFINITION_PROPERTY.requiredString,
    assigned_state_list: SCHEMA_DEFINITION_PROPERTY.optionalNullArray,
    has_all_project_acess: SCHEMA_DEFINITION_PROPERTY.optionalBoolean,
    has_all_state_access: SCHEMA_DEFINITION_PROPERTY.optionalBoolean,
    has_company_all_access: SCHEMA_DEFINITION_PROPERTY.optionalBoolean,
    last_login_date: SCHEMA_DEFINITION_PROPERTY.optionalNullDate,
  },
  {
    ...GENERAL_SCHEMA_OPTIONS,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const builderVirtualReference: VirtualTypeOptions<IAdmin> = {
  ref: "builder",
  localField: "builder_object_id",
  foreignField: "_id",
  justOne: true,
};

adminSchema.virtual("builder", builderVirtualReference);

export default adminSchema;
