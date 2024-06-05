import express from "express";
import { loginAdmin, loginWholesaler } from "../../controllers/auth/auth.controller";
import { get } from "mongoose";
import { getOtp } from "../../controllers/auth/otp.controller";

const router = express.Router();

router.route("/login-wholesaler-employee").post(loginWholesaler);
router.route("/login-admin").post(loginAdmin);
router.route("/get-otp").get(getOtp);

module.exports = router;