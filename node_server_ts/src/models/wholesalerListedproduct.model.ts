import { model } from "mongoose";
import { IWholesalerListedProducts } from "../@types/types/wholesalerListedProducts";
import wholesalerListedproductSchema from "./schemaDefinitions/wholesalerListedProduct.schema";

const WholesalerListedProductModel = model<IWholesalerListedProducts>(
	"wholesaler_listed_product",
	wholesalerListedproductSchema
);

export default WholesalerListedProductModel;
