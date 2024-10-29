import { SchemaDefinitionProperty, Types } from "mongoose";

export interface IInventory {
	wholesaler_object_id: SchemaDefinitionProperty<Types.ObjectId>,
	name: string,
	location: {
		type: string,
		coordinates: Array<number>
	}
}
