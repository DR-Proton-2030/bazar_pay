import express from "express";
import { getOrdersByRetailer, placeOrder, updateOrderStatus } from "../../controllers/order/order.controllers";

const router = express.Router();

router.route("/order-product").post(placeOrder);
router.route("/get-order").get(getOrdersByRetailer);
router.route("/update-order-status").patch(updateOrderStatus);

export default router;
