"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("../../controllers/auth/auth.controller");
const otp_controller_1 = require("../../controllers/auth/otp.controller");
const router = express_1.default.Router();
router.route("/login-wholesaler-employee").post(auth_controller_1.loginWholesaler);
router.route("/get-otp").get(otp_controller_1.getOtp);
module.exports = router;
