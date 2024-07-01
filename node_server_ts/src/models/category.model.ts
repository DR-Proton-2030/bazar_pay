// File: models/category.model.ts
import { model } from "mongoose";
import { ICategorySchema } from "../@types/types/category.interface";
import CategorySchema from "./schemaDefinitions/category.schema";

const CategoryModel = model<ICategorySchema>("categories", CategorySchema);

export default CategoryModel;
