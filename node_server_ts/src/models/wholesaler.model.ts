import { model } from "mongoose";
import { IWholesaler } from "../@types/types/wholesaler.interface";
import wholesalerSchema from "./schemaDefinitions/wholesaler.schema";

const wholesalerModel = model<IWholesaler>("wholesalers", wholesalerSchema);

export default wholesalerModel;