import { model } from "mongoose";
import requestedProductSchema from "./schemaDefinitions/requestedProduct.schema";
import { IRequestedProduct } from "../@types/types/requestProduct.interface";

const RequestedProductModel = model<IRequestedProduct>("requested_product", requestedProductSchema);

export default RequestedProductModel;
