import express from "express";
import { createAdmin, getEmployeeList, updateProfitPercentage } from "../../controllers/admin/admin.controller";
import e from "express";

const router = express.Router();

router.route("/create-admin").post(createAdmin);
router.route("/get-employe-list").post(getEmployeeList);
router.route("/add-product-percentage").patch(updateProfitPercentage);


export default router;
