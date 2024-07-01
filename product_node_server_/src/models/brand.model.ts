// File: models/brand.model.ts
import { model } from "mongoose";
import { IBrandSchema } from "../ts/interfaces/brand.interface";
import BrandSchema from "./shcemaDefinations/brand.schema";

const BrandModel = model<IBrandSchema>("brands", BrandSchema);

export default BrandModel;
