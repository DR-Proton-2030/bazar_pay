import express from "express";
import { loginCustomer } from "../../controllers/auth/auth.controller";
import { createAdmin, getEmployeeList } from "../../controllers/admin/admin.controller";
import { assignedAdminToProject, getAssignedProject } from "../../controllers/adminAssignedProject/adminAssignedProject.controller";

const router = express.Router();

router.route("/create-admin").post(createAdmin);

router.route("/admin-assign-project").post(assignedAdminToProject);

router.route("/get-employee-list").get(getEmployeeList);

module.exports = router;
