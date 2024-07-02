import { model } from "mongoose";
import { IOrder } from "../@types/types/orders.types";
import orderSchema from "./schemaDefinitions/order.schema";

const OrderModel = model<IOrder>("orders", orderSchema);

export default OrderModel;
