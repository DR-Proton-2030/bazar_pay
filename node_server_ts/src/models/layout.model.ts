import { model } from "mongoose";
import { ILayout } from "../@types/types/layout.types";
import layoutSchema from "./schemaDefinitions/layout.schema";

const LayoutModel = model<ILayout>(
  "layouts",
  layoutSchema
);

export default LayoutModel;
