import { SchemaDefinitionProperty, Types } from "mongoose";

export interface IProduct {
	product_name: string;
	product_description: string;
	product_image: string;
	unit: string;
	product_status: string;
	profit_percentage: number;
	category_object_id: SchemaDefinitionProperty<Types.ObjectId>;
	subcategory_object_id: SchemaDefinitionProperty<Types.ObjectId>;
	brand_object_id: SchemaDefinitionProperty<Types.ObjectId>;
	deleivery_charge_per_km: number
}
