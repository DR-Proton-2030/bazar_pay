import { model } from "mongoose";
import { ICustomerFavProject } from "../@types/types/cutsomerFav.interface";
import customerFavProjectSchema from "./schemaDefinitions/customerFav.schema";

const CustomerFavProjectModel = model<ICustomerFavProject>(
  "CustomerFavProject",
  customerFavProjectSchema
);

export default CustomerFavProjectModel;
