import express from "express";
import {
  loginAdmin,
  customerGoogleLogin,
  loginCustomer,
  customerMobileSignUp
} from "../../controllers/auth/auth.controller";
import { getOtp } from "../../controllers/auth/otp.controller";

const router = express.Router();

router.route("/google-login").post(customerGoogleLogin);
router.route("/login-admin").post(loginAdmin);
router.route("/login-customer").post(loginCustomer);
router.route("/signup-customer").post(customerMobileSignUp);
router.route("/getOtp").post(getOtp);

module.exports = router;