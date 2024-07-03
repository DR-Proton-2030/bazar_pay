import express from "express";
// import {
//   createBuilder,
//   getBuilder,
//   getBuilderDetailsById,
//   getBuilderNameWithID,
// } from "../../controllers/wholesalers/wholesaler.controller";
import { upload } from "../../../../middleware/multer.middleware";
import { createWholesaler, getWholeSaler } from "../../controllers/wholesalers/wholesaler.controller";

const router = express.Router();

router.route("/get-wholesaler").get(getWholeSaler);

router.route("/add-wholesaler").post(
	upload.fields([
		{ name: "logo", maxCount: 1 },
		{ name: "sign_board", maxCount: 1 },
		{ name: "owner_photo", maxCount: 1 },
		{ name: "trade_licensce", maxCount: 1 },
		{ name: "nid", maxCount: 1 },
		{ name: "visiting_card", maxCount: 1 }
	]),
	createWholesaler
);

// router.route("/getOtp").post(getOtp);

// router.route("/get-builder-list").get(getBuilderNameWithID);

module.exports = router;
