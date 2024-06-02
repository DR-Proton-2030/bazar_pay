import { model } from "mongoose";
import productSchema from "./schemaDefinitions/product.schema";
import { IProduct } from "../@types/types/product.interface";

const productModel = model<IProduct>("product", productSchema);

export default productModel;
