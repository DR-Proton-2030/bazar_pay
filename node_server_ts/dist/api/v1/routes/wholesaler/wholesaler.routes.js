"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_middleware_1 = require("../../../../middleware/multer.middleware");
const wholesaler_controller_1 = require("../../controllers/wholesalers/wholesaler.controller");
const wholeslaer_otp_controller_1 = require("../../controllers/wholesalers/wholeslaer.otp.controller");
const wholesalerUploadProduct_controller_1 = require("../../controllers/wholesalers/wholesalerUploadProduct.controller");
const router = express_1.default.Router();
router.route("/get-wholesaler").get(wholesaler_controller_1.getWholeSaler);
router.route("/add-wholesaler").post(multer_middleware_1.upload.fields([
    { name: "logo", maxCount: 1 },
    { name: "sign_board_photo", maxCount: 1 },
    { name: "wholesaler_owner_photo", maxCount: 1 },
    { name: "trade_licensce_photo", maxCount: 1 },
    { name: "nid_photo", maxCount: 1 }
]), wholesaler_controller_1.createWholesaler);
router.route("/get-otp-signup").get(wholeslaer_otp_controller_1.getOtpForSignup);
router.route("/get-otp-login").get(wholeslaer_otp_controller_1.getOtpForLogin);
router.route("/update-wholesaler-status").patch(wholesaler_controller_1.updateWholesalerStatus);
router.route("/upload-product").post(wholesalerUploadProduct_controller_1.uploadProduct);
router.route("/get-product").get(wholesalerUploadProduct_controller_1.getProductsByProductId);
router.route("/delete-wholesaler-by-id/:wholesalerId").delete(wholesaler_controller_1.deleteWholesaler);
// router.route("/get-builder-list").get(getBuilderNameWithID);
exports.default = router;
