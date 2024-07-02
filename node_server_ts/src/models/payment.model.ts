import { model } from "mongoose";
import { IPaymnet } from "../@types/types/payment.types";
import paymentSchema from "./schemaDefinitions/payment.schema";

const PaymentModel = model<IPaymnet>("payments", paymentSchema);

export default PaymentModel;
