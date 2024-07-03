import { SchemaDefinitionProperty, Types } from "mongoose";

export interface IOrder {
	wholesaler_listed_product_object_id: SchemaDefinitionProperty<Types.ObjectId>;
	wholesaler_object_id: SchemaDefinitionProperty<Types.ObjectId>;
	retailer_object_id: SchemaDefinitionProperty<Types.ObjectId>;
	product_object_id: SchemaDefinitionProperty<Types.ObjectId>;
	payment_object_id: SchemaDefinitionProperty<Types.ObjectId>;
	order_date: SchemaDefinitionProperty<Date>;
	order_status: string;
	possible_delivery_date: SchemaDefinitionProperty<Date>;
	possible_delivery_time: string;
}
