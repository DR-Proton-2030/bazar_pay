import { model } from "mongoose";
import retailerSchema from "./schemaDefinitions/retailers.schema";

const RetailerModel = model<any>("retailers", retailerSchema);

export default RetailerModel;
