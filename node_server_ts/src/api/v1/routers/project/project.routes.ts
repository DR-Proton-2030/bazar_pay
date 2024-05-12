import express from "express";
import { addProject, getAllProjectIdList, getProjectDetails, getProjectList, updatePlotPosition } from "../../controllers/projects/project.controller";
import { upload } from "../../../../middleware/multer.middleware";
import { getAssignedProject } from "../../controllers/adminAssignedProject/adminAssignedProject.controller";

const router = express.Router();

router.route("/add-project").post(upload.fields([{ name: 'layout', maxCount: 1 }]),addProject);
router.route("/get-project").get(getProjectList);
router.route("/get-project-details").get(getProjectDetails);
router.route("/get-all-project-id-list").get(getAllProjectIdList);
router.route("/update-plot-position").post(updatePlotPosition);
router.route("/get-assign-project").get(getAssignedProject);

module.exports = router;
