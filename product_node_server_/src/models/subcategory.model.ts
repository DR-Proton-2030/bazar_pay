// File: models/subcategory.model.ts
import { model } from "mongoose";
import { ISubcategorySchema } from "../ts/interfaces/subcategory.interface";
import SubcategorySchema from "./shcemaDefinations/subcategory.schema";

const SubcategoryModel = model<ISubcategorySchema>("sub_categories", SubcategorySchema);

export default SubcategoryModel;
