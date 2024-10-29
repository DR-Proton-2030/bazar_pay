// File: models/brand.model.ts
import { model } from "mongoose";
import VariantSchema from "./schemaDefinitions/variant.schema";
import { IVariant } from "../@types/types/variant.interface";

const VariantModel = model<IVariant>("variants", VariantSchema);

export default VariantModel;
