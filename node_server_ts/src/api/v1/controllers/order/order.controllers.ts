import { Request, Response } from "express";
import OrderModel from "../../../../models/order.model";
import { MESSAGE } from "../../../../constants/message";

export const placeOrder = async (req: Request, res: Response) => {
	try {
		const {
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
		} = req.body;

		const newOrder = new OrderModel({
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

		const savedOrder = await newOrder.save();

		return res.status(200).json({
			message: MESSAGE.post.succ,
			result: savedOrder
		});
	} catch (error) {
		return res.status(400).json({
			message: MESSAGE.post.fail,
			error
		});
	}
};


export const getOrdersByRetailer = async (req: Request, res: Response) => {
	try {
		const { filterQuery } = req.query;

		const orders = await OrderModel.find({ filterQuery })
			.populate("wholesaler")
			.populate("product")
			.populate("retailer")
			.populate("payment");

		return res.status(200).json({
			message: MESSAGE.get.succ,
			result: orders
		});
	} catch (error) {
		console.log(error)
		return res.status(400).json({
			message: MESSAGE.get.fail,
			error
		});
	}
};

