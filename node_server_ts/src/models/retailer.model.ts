import { model } from "mongoose";
import retailerSchema from "./schemaDefinitions/retailers.schema";

const retailerModel = model<any>("retailer", retailerSchema);

export default retailerModel;
