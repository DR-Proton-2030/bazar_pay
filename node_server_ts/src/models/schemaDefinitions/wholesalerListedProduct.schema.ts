import { Schema, SchemaTypeOptions, VirtualTypeOptions } from "mongoose";
import SCHEMA_DEFINITION_PROPERTY from "../../constants/model/model.constant";
import { GENERAL_SCHEMA_OPTIONS } from "../../constants/model/schemaOption";
import { IWholesalerListedProducts } from "../../@types/types/wholesalerListedProducts";
import wholesalerModel from "../wholesaler.model";
import productModel from "../product.model";

const wholesalerListedproductSchema: Schema<IWholesalerListedProducts> = new Schema<IWholesalerListedProducts>(
  {
    product_object_id: SCHEMA_DEFINITION_PROPERTY.requiredObjectId,
    wholesaler_object_id: SCHEMA_DEFINITION_PROPERTY.requiredObjectId,
    buying_price : SCHEMA_DEFINITION_PROPERTY.requiredNumber,
    discount: SCHEMA_DEFINITION_PROPERTY.optionalNullNumber,
    marked_price: SCHEMA_DEFINITION_PROPERTY.requiredNumber,
    selling_price: SCHEMA_DEFINITION_PROPERTY.requiredNumber,
    current_stock: SCHEMA_DEFINITION_PROPERTY.requiredNumber,
    selling_status: {...SCHEMA_DEFINITION_PROPERTY.optionalNullString, default:"PENDING_FOR_APPROVAL"}
  },
  {
    ...GENERAL_SCHEMA_OPTIONS,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const wholesalerVirtualReference: VirtualTypeOptions<IWholesalerListedProducts> = {
  ref: wholesalerModel,
  localField: "wholesaler_object_id",
  foreignField: "_id",
  justOne: true,
};

const productVirtualReference: VirtualTypeOptions<IWholesalerListedProducts> = {
  ref: productModel,
  localField: "product_object_id",
  foreignField: "_id",
  justOne: true,
};

wholesalerListedproductSchema.virtual("wholesaler", wholesalerVirtualReference);
wholesalerListedproductSchema.virtual("product", productVirtualReference);

export default wholesalerListedproductSchema;
