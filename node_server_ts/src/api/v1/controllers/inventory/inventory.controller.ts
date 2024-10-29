import { Request, Response } from "express";
import InventoryModel from "../../../../models/inventory.model";
import { MESSAGE } from "../../../../constants/message";

export const createInventory = async (req: Request, res: Response) => {
	try {
		const { wholesaler_object_id, name, location } = req.body;

		const newInventory = new InventoryModel({
			wholesaler_object_id,
			name,
			location,
		});

		const savedInventory = await newInventory.save();

		return res.status(201).json({
			message: MESSAGE.post.succ,
			result: savedInventory,
		});
	} catch (error) {
		return res.status(500).json({
			message: MESSAGE.post.fail,
			error,
		});
	}
};

export const getInventory = async (req: Request, res: Response) => {
	try {
		const { wholesaler_object_id } = req.query;



		const inventory = await InventoryModel.find({ wholesaler_object_id });

		if (!inventory) {
			return res.status(404).json({
				message: MESSAGE.custom(`Inventory not found with ID: ${wholesaler_object_id}`),
			});
		}

		return res.status(200).json({
			message: MESSAGE.get.succ,
			result: inventory,
		});
	} catch (error) {
		return res.status(500).json({
			message: MESSAGE.get.fail,
			error,
		});
	}
};

