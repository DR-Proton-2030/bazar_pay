// File: models/brand.model.ts
import { model } from "mongoose";
import { IBrandSchema } from "../@types/types/brand.interface";
import BrandSchema from "./schemaDefinitions/brand.schema";

const BrandModel = model<IBrandSchema>("brands", BrandSchema);

export default BrandModel;
