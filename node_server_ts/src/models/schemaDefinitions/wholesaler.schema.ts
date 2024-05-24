import { Schema, SchemaTypeOptions } from "mongoose";
import SCHEMA_DEFINITION_PROPERTY from "../../constants/model/model.constant";
import { GENERAL_SCHEMA_OPTIONS } from "../../constants/model/schemaOption";
import { IWholesaler } from "../../@types/types/wholesaler.interface";

const wholesalerSchema: Schema<IWholesaler> = new Schema<IWholesaler>(
  {
    wholesaler_name: SCHEMA_DEFINITION_PROPERTY.requiredString,
    contact_full_name: SCHEMA_DEFINITION_PROPERTY.requiredString,
    contact_phone_number: SCHEMA_DEFINITION_PROPERTY.requiredString,
    contact_email: SCHEMA_DEFINITION_PROPERTY.requiredString,
    trade_licensce_number: SCHEMA_DEFINITION_PROPERTY.requiredString,
    nid_number: SCHEMA_DEFINITION_PROPERTY.requiredString,
    logo: SCHEMA_DEFINITION_PROPERTY.requiredString,
    business_type: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
    sign_board_photo: SCHEMA_DEFINITION_PROPERTY.requiredString,
    owner_photo: SCHEMA_DEFINITION_PROPERTY.requiredString,
    trade_licensce_photo: SCHEMA_DEFINITION_PROPERTY.requiredString,
    nid_photo: SCHEMA_DEFINITION_PROPERTY.requiredString,
    visiting_card_photo: SCHEMA_DEFINITION_PROPERTY.requiredString,
    product_category: SCHEMA_DEFINITION_PROPERTY.optionalNullString
  },
  GENERAL_SCHEMA_OPTIONS
);

export default wholesalerSchema;
