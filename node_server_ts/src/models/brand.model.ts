// File: models/brand.model.ts
import { model } from "mongoose";
import BrandSchema from "./schemaDefinitions/brand.schema";
import { IBrand } from "../@types/types/brand.interface";

const BrandModel = model<IBrand>("brands", BrandSchema);

export default BrandModel;
