import { model } from "mongoose";
import retailerSchema from "./schemaDefinitions/retailer.schema";
import { IRetailer } from "../@types/types/retailer.types";

const RetailerrModel = model<IRetailer>("Retailer", retailerSchema);

export default RetailerrModel;
