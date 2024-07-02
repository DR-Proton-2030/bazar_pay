import { model } from "mongoose";
import retailerSchema from "./schemaDefinitions/retailers.schema";

const RetailerModel = model<any>("retailer", retailerSchema);

export default RetailerModel;
