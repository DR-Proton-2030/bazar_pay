import express from "express";
import { createInventory } from "../../controllers/inventory/inventory.controller";

const router = express.Router();

router.route("/create-inventory").post(createInventory);


export default router;
