"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const project_controller_1 = require("../../controllers/projects/project.controller");
const multer_middleware_1 = require("../../../../middleware/multer.middleware");
const adminAssignedProject_controller_1 = require("../../controllers/adminAssignedProject/adminAssignedProject.controller");
const router = express_1.default.Router();
router.route("/add-project").post(multer_middleware_1.upload.fields([{ name: 'layout', maxCount: 1 }]), project_controller_1.addProject);
router.route("/get-project").get(project_controller_1.getProjectList);
router.route("/get-project-details").get(project_controller_1.getProjectDetails);
router.route("/get-all-project-id-list").get(project_controller_1.getAllProjectIdList);
router.route("/update-plot-position").post(project_controller_1.updatePlotPosition);
router.route("/get-assign-project").get(adminAssignedProject_controller_1.getAssignedProject);
module.exports = router;
