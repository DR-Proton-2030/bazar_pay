"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_middleware_1 = require("../../../../middleware/multer.middleware");
const retailer_controllers_1 = require("../../controllers/retailer/retailer.controllers");
const retailer_otp_controllers_1 = require("../../controllers/retailer/retailer.otp.controllers");
const router = express_1.default.Router();
router.route("/add-retailer").post(multer_middleware_1.upload.fields([
    { name: "sign_board_photo", maxCount: 1 },
    { name: "retailer_owner_photo", maxCount: 1 },
    { name: "trade_license_photo", maxCount: 1 },
    { name: "nid_photo", maxCount: 1 },
    { name: "logo", maxCount: 1 }
]), retailer_controllers_1.createRetailer);
router.route("/get-retailer").get(retailer_controllers_1.getRetailer);
router.route("/login-retailer").post(retailer_controllers_1.loginRetailer);
router.route("/registerOtp-retailer").get(retailer_otp_controllers_1.getOtpForSignup);
router.route("/loginOtp-retailer").get(retailer_otp_controllers_1.getOtpForLogin);
router.route("/update-password-retailer").patch(retailer_controllers_1.updatePassword);
router.route("/delete-retailer-by-id/:retailerId").delete(retailer_controllers_1.deleteRetailer);
exports.default = router;
