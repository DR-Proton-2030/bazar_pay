// File: models/brand.model.ts
import { model } from "mongoose";
import { IInventory } from "../@types/types/inventory.interface";
import InventorySchema from "./schemaDefinitions/inventory.schema";

const InventoryModel = model<IInventory>("inventories", InventorySchema);

export default InventoryModel;
