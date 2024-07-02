import { Schema, SchemaTypeOptions, VirtualTypeOptions } from "mongoose";
import SCHEMA_DEFINITION_PROPERTY from "../../constants/model/model.constant";
import { GENERAL_SCHEMA_OPTIONS } from "../../constants/model/schemaOption";
import { IOrder } from "../../@types/types/orders.types";
import wholesalerModel from "../wholesaler.model";
import productModel from "../product.model";
import wholesalerListedproductSchema from "./wholesalerListedProduct.schema";

const orderSchema: Schema<IOrder> = new Schema<IOrder>(
  {
    product_object_id: SCHEMA_DEFINITION_PROPERTY.requiredObjectId,
    wholesaler_object_id: SCHEMA_DEFINITION_PROPERTY.requiredObjectId,
    retailer_object_id: SCHEMA_DEFINITION_PROPERTY.requiredObjectId,
    wholesaler_listed_product_object_id: SCHEMA_DEFINITION_PROPERTY.requiredObjectId,
    payment_object_id: SCHEMA_DEFINITION_PROPERTY.optionalNullObjectId,
    order_date: SCHEMA_DEFINITION_PROPERTY.optionalNullDate,
    order_status: {...SCHEMA_DEFINITION_PROPERTY.optionalNullString, default:"PENDING"},
    possible_delivery_date: SCHEMA_DEFINITION_PROPERTY.optionalNullDate,
    possible_delivery_time: SCHEMA_DEFINITION_PROPERTY.optionalNullString
  },
  {
    ...GENERAL_SCHEMA_OPTIONS,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const wholesalerVirtualReference: VirtualTypeOptions<IOrder> = {
  ref: wholesalerModel,
  localField: "wholesaler_object_id",
  foreignField: "_id",
  justOne: true,
};
const productVirtualReference: VirtualTypeOptions<IOrder> = {
  ref: productModel,
  localField: "product_object_id",
  foreignField: "_id",
  justOne: true,
};
const retailerVirtualReference: VirtualTypeOptions<IOrder> = {
  ref: wholesalerModel,
  localField: "retailer_object_id",
  foreignField: "_id",
  justOne: true,
};
const wholesalerListedVirtualReference: VirtualTypeOptions<IOrder> = {
  ref: wholesalerModel,
  localField: "retailer_object_id",
  foreignField: "_id",
  justOne: true,
};
const paymentVirtualReference: VirtualTypeOptions<IOrder> = {
  ref: wholesalerModel,
  localField: "retailer_object_id",
  foreignField: "_id",
  justOne: true,
};

orderSchema.virtual("wholesaler", wholesalerVirtualReference);
orderSchema.virtual("product", productVirtualReference);
orderSchema.virtual("retailer", retailerVirtualReference);
orderSchema.virtual("wholesalerListedProduct", wholesalerListedproductSchema);
orderSchema.virtual("payment", paymentVirtualReference);

export default orderSchema;
