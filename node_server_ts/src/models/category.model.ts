// File: models/category.model.ts
import { model } from "mongoose";
import CategorySchema from "./schemaDefinitions/category.schema";
import { ICategory } from "../@types/types/category.interface";

const CategoryModel = model<ICategory>("categories", CategorySchema);

export default CategoryModel;
