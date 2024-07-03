import { SchemaDefinitionProperty, Types } from "mongoose";

export interface IWholesalerListedProducts {
	product_object_id: SchemaDefinitionProperty<Types.ObjectId>;
	wholesaler_object_id: SchemaDefinitionProperty<Types.ObjectId>;
	buying_price: number;
	marked_price: number;
	discount: number;
	selling_price: number;
	current_stock: number;
	selling_status: string;
}
