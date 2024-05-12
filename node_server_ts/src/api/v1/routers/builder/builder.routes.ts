import express from "express";
import {
  createBuilder,
  getBuilder,
  getBuilderDetailsById,
  getBuilderNameWithID,
} from "../../controllers/builders/builder.controller";
import { upload } from "../../../../middleware/multer.middleware";

const router = express.Router();

router.route("/get-builder").get(getBuilder);

router.route("/add-builder").post(upload.fields([{ name: 'logo', maxCount: 1 }]),createBuilder);

router.route("/get-builder-by-id").get(getBuilderDetailsById);

router.route("/get-builder-list").get(getBuilderNameWithID);

module.exports = router;
