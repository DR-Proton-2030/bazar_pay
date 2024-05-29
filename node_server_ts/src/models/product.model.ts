import { model } from "mongoose";
import { IWholesaler } from "../@types/types/wholesaler.interface";
import wholesalerSchema from "./schemaDefinitions/wholesaler.schema";
import productSchema from "./schemaDefinitions/product.schema";

const productModel = model<any>("product", productSchema);

export default productModel;
