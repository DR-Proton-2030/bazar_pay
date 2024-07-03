import { SchemaDefinitionProperty, Types } from "mongoose";

export interface IPaymnet {
	wholesaler_listed_product_object_id: SchemaDefinitionProperty<Types.ObjectId>;
	wholesaler_object_id: SchemaDefinitionProperty<Types.ObjectId>;
	retailer_object_id: SchemaDefinitionProperty<Types.ObjectId>;
	amount: number;
	payment_status: string;
	transaction_id: string;
	payment_method: string;
}
