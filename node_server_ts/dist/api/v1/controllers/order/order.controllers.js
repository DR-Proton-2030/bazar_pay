"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateOrderStatus = exports.getOrdersByRetailer = exports.placeOrder = void 0;
const order_model_1 = __importDefault(require("../../../../models/order.model"));
const message_1 = require("../../../../constants/message");
const placeOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { product_object_id, wholesaler_object_id, retailer_object_id, wholesaler_listed_product_object_id, payment_object_id, order_date, order_status, possible_delivery_date, possible_delivery_time, order_quantity } = req.body;
        const newOrder = new order_model_1.default({
            product_object_id,
            wholesaler_object_id,
            retailer_object_id,
            wholesaler_listed_product_object_id,
            payment_object_id,
            order_date,
            order_status,
            possible_delivery_date,
            possible_delivery_time,
            order_quantity
        });
        const savedOrder = yield newOrder.save();
        return res.status(200).json({
            message: message_1.MESSAGE.post.succ,
            result: savedOrder
        });
    }
    catch (error) {
        return res.status(400).json({
            message: message_1.MESSAGE.post.fail,
            error
        });
    }
});
exports.placeOrder = placeOrder;
const getOrdersByRetailer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const filter = req.query;
        const orders = yield order_model_1.default.find(filter)
            .populate("wholesaler")
            .populate("product")
            .populate("retailer")
            .populate("wholesalerListedProduct")
            .populate("payment");
        return res.status(200).json({
            message: message_1.MESSAGE.get.succ,
            result: orders
        });
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({
            message: message_1.MESSAGE.get.fail,
            error
        });
    }
});
exports.getOrdersByRetailer = getOrdersByRetailer;
const updateOrderStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { order_id, order_status } = req.body;
        const updatedOrder = yield order_model_1.default.findByIdAndUpdate(order_id, { order_status }, { new: true });
        if (!updatedOrder) {
            return res.status(404).json({
                message: message_1.MESSAGE.patch.fail,
                error: "Order not found",
            });
        }
        return res.status(200).json({
            message: message_1.MESSAGE.patch.succ,
            result: updatedOrder,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: message_1.MESSAGE.patch.fail,
            error,
        });
    }
});
exports.updateOrderStatus = updateOrderStatus;
