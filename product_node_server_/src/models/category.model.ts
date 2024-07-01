// File: models/category.model.ts
import { model } from "mongoose";
import { ICategorySchema } from "../ts/interfaces/category.interface";
import CategorySchema from "./shcemaDefinations/category.schema";

const CategoryModel = model<ICategorySchema>("categories", CategorySchema);

export default CategoryModel;
