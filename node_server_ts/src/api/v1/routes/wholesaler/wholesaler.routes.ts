import express from "express";
import { upload } from "../../../../middleware/multer.middleware";
import {
	createWholesaler,
	deleteWholesaler,
	getWholeSaler,
	updateWholesalerStatus
} from "../../controllers/wholesalers/wholesaler.controller";
import { getOtpForLogin, getOtpForSignup } from "../../controllers/wholesalers/wholeslaer.otp.controller";
import { getProductsByProductId, uploadProduct } from "../../controllers/wholesalers/wholesalerUploadProduct.controller";
import e from "express";

const router = express.Router();

router.route("/get-wholesaler").get(getWholeSaler);

router.route("/add-wholesaler").post(
	upload.fields([
		{ name: "logo", maxCount: 1 },
		{ name: "sign_board_photo", maxCount: 1 },
		{ name: "wholesaler_owner_photo", maxCount: 1 },
		{ name: "trade_licensce_photo", maxCount: 1 },
		{ name: "nid_photo", maxCount: 1 }
	]),
	createWholesaler
);

router.route("/get-otp-signup").get(getOtpForSignup);
router.route("/get-otp-login").get(getOtpForLogin);
router.route("/update-wholesaler-status").patch(updateWholesalerStatus);
router.route("/upload-product").post(uploadProduct);
router.route("/get-product").get(getProductsByProductId);
router.route("/delete-wholesaler-by-id/:wholesalerId").delete(deleteWholesaler);

// router.route("/get-builder-list").get(getBuilderNameWithID);

export default router;
