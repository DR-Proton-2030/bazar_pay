// File: models/subcategory.model.ts
import { model } from "mongoose";
import { ISubcategorySchema } from "../@types/types/subcategory.interface";
import SubcategorySchema from "./schemaDefinitions/subcategory.schema";

const SubcategoryModel = model<ISubcategorySchema>(
  "sub_categories",
  SubcategorySchema
);

export default SubcategoryModel;
