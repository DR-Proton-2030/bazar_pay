import express from "express";
import { createAdmin, getEmployeeList } from "../../controllers/admin/admin.controller";

const router = express.Router();

router.route("/create-admin").post(createAdmin);
router.route("/get-employe-list").post(getEmployeeList);

module.exports = router;