// File: models/subcategory.model.ts
import { model } from "mongoose";
import SubcategorySchema from "./schemaDefinitions/subcategory.schema";
import { ISubcategory } from "../@types/types/subcategory.interface";

const SubcategoryModel = model<ISubcategory>(
  "sub_categories",
  SubcategorySchema
);

export default SubcategoryModel;
