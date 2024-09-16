"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOtpForLogin = exports.getOtpForSignup = void 0;
const message_1 = require("../../../../constants/message");
const retailer_model_1 = __importDefault(require("../../../../models/retailer.model"));
const getOtpForSignup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { phone } = req.query;
        const existingWholesaler = yield retailer_model_1.default.findOne({ contact_phone: phone });
        if (existingWholesaler) {
            return res.status(409).json({
                message: message_1.MESSAGE.custom("Account Exist with Same Number")
            });
        }
        const otp = "1234";
        return res.status(200).json({
            message: message_1.MESSAGE.get.succ,
            result: otp
        });
    }
    catch (error) {
        return res.status(400).json({
            message: message_1.MESSAGE.get.fail
        });
    }
});
exports.getOtpForSignup = getOtpForSignup;
const getOtpForLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const otp = "1234";
        const { phone } = req.query;
        const existingWholesaler = yield retailer_model_1.default.findOne({ contact_phone: phone });
        if (existingWholesaler) {
            return res.status(200).json({
                message: message_1.MESSAGE.get.succ,
                otp: otp,
                result: existingWholesaler
            });
        }
        return res.status(404).json({
            message: message_1.MESSAGE.get.fail,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: message_1.MESSAGE.get.fail
        });
    }
});
exports.getOtpForLogin = getOtpForLogin;
