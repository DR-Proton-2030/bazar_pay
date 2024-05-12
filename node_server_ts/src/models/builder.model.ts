import { model } from "mongoose";
import { IBuilder } from "../@types/types/builder.interface";
import builderSchema from "./schemaDefinitions/builder.schema";

const BuilderModel = model<IBuilder>("builder", builderSchema);

export default BuilderModel;
