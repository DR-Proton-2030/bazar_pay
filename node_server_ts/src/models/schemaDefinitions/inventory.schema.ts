import { Schema } from "mongoose";
import SCHEMA_DEFINITION_PROPERTY from "../../constants/model/model.constant";
import { GENERAL_SCHEMA_OPTIONS } from "../../constants/model/schemaOption";
import { IInventory } from "../../@types/types/inventory.interface";

const InventorySchema: Schema<IInventory> = new Schema<IInventory>(
	{
		wholesaler_object_id: SCHEMA_DEFINITION_PROPERTY.requiredObjectId,
		name: SCHEMA_DEFINITION_PROPERTY.requiredString,
		location: {
			type: SCHEMA_DEFINITION_PROPERTY.requiredString,
			coordinates: SCHEMA_DEFINITION_PROPERTY.optionalNullArray
		}
	},
	GENERAL_SCHEMA_OPTIONS
);

export default InventorySchema;
