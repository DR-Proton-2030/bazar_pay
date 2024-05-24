import express from "express";
import { loginWholesaler } from "../../controllers/auth/auth.controller";
import { get } from "mongoose";
import { getOtp } from "../../controllers/auth/otp.controller";

const router = express.Router();

router.route("/login-wholesaler-employee").post(loginWholesaler);
router.route("/get-otp").get(getOtp);

module.exports = router;