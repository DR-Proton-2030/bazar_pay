import express from "express";
import { createAdmin, getEmployeeList } from "../../controllers/admin/admin.controller";
import e from "express";

const router = express.Router();

router.route("/create-admin").post(createAdmin);
router.route("/get-employe-list").post(getEmployeeList);

export default router;
