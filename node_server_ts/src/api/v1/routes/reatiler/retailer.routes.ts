import express from "express";

import { upload } from "../../../../middleware/multer.middleware";

import { createRetailer, loginRetailer, updatePassword } from "../../controllers/retailer/retailer.controllers";
import { getOtpForLogin, getOtpForSignup } from "../../controllers/retailer/retailer.otp.controllers";

const router = express.Router();

router.route("/add-retailer").post(
	upload.fields([
		{ name: "sign_board_photo", maxCount: 1 },
		{ name: "retailer_owner_photo", maxCount: 1 },
		{ name: "trade_license_photo", maxCount: 1 },
		{ name: "nid_photo", maxCount: 1 },
		{ name: "logo", maxCount: 1 }
	]),
	createRetailer
);
router.route("/login-retailer").post(loginRetailer);
router.route("/registerOtp-retailer").get(getOtpForSignup);
router.route("/loginOtp-retailer").get(getOtpForLogin);
router.route("/update-password-retailer").patch(updatePassword);

export default router;
