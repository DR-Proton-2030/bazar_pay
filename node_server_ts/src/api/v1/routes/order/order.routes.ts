import express from "express";
import { getOrdersByRetailer, placeOrder } from "../../controllers/order/order.controllers";

const router = express.Router();

router.route("/order-product").post(placeOrder);
router.route("/get-order").get(getOrdersByRetailer);

module.exports = router;
