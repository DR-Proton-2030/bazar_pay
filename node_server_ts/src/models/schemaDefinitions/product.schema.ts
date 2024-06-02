import { Schema, SchemaTypeOptions } from "mongoose";
import SCHEMA_DEFINITION_PROPERTY from "../../constants/model/model.constant";
import { GENERAL_SCHEMA_OPTIONS } from "../../constants/model/schemaOption";
import { IWholesaler } from "../../@types/types/wholesaler.interface";
import { IProduct } from "../../@types/types/product.interface";

const productSchema: Schema<IProduct> = new Schema<any>(
  {
    product_name: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
    wholesalerSaler_id:SCHEMA_DEFINITION_PROPERTY.optionalNullString,
    product_buying_price: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
    product_saling_price: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
    unit: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
    discount: SCHEMA_DEFINITION_PROPERTY.optionalNullNumber,
    current_stock: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
    free: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
    product_description: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
    product_image: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
    bar_code_photo: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
    product_warenty: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
    product_discount: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
    product_bhat: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
    total: SCHEMA_DEFINITION_PROPERTY.optionalNullNumber,
  },
  GENERAL_SCHEMA_OPTIONS
);

export default productSchema;
