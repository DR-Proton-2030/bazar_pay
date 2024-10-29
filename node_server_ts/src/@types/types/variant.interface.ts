import { SchemaDefinitionProperty, Types } from "mongoose";

export interface IVariant {
	product_objecct_id: SchemaDefinitionProperty<Types.ObjectId>,
	brand_object_id: SchemaDefinitionProperty<Types.ObjectId>
	variant_type: string,
	variant_value: string,
}