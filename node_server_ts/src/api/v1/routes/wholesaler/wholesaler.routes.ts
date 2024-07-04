import express from "express";
import { upload } from "../../../../middleware/multer.middleware";
import { createWholesaler, getWholeSaler } from "../../controllers/wholesalers/wholesaler.controller";

const router = express.Router();

router.route("/get-wholesaler").get(getWholeSaler);

router.route("/add-wholesaler").post(
	upload.fields([
		{ name: "logo", maxCount: 1 },
		{ name: "sign_board_photo", maxCount: 1 },
		{ name: "wholesaler_owner_photo", maxCount: 1 },
		{ name: "trade_licensce_photo", maxCount: 1 },
		{ name: "nid_photo", maxCount: 1 },
	]),
	createWholesaler
);

// router.route("/getOtp").post(getOtp);

// router.route("/get-builder-list").get(getBuilderNameWithID);

module.exports = router;
