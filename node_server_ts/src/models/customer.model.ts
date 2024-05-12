import { model } from "mongoose";
import customerSchema from "./schemaDefinitions/customer.schema";
import { ICustomer } from "../@types/types/customer.types";

const CustomerModel = model<ICustomer>("Customer", customerSchema);

export default CustomerModel;
