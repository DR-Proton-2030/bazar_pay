"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const order_controllers_1 = require("../../controllers/order/order.controllers");
const router = express_1.default.Router();
router.route("/order-product").post(order_controllers_1.placeOrder);
router.route("/get-order").get(order_controllers_1.getOrdersByRetailer);
router.route("/update-order-status").patch(order_controllers_1.updateOrderStatus);
module.exports = router;
