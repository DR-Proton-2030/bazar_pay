import { model } from "mongoose";
import { IWholesalerEmployee } from "../@types/types/wholeSalerEmployee.interfcae";
import wholesalerModel from "./wholesaler.model";
import wholesalerEmployeeSchema from "./schemaDefinitions/wholeSalerEmployee.schema";

const WholeSalerEmployeeModel = model<IWholesalerEmployee>("wholesaler_employees", wholesalerEmployeeSchema);

export default WholeSalerEmployeeModel;