"use strict";
// import { Request, Response } from "express";
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
exports.forgetPasswordOtp = exports.getOtp = void 0;
const customer_model_1 = __importDefault(require("../../../../models/customer.model"));
const axios_1 = __importDefault(require("axios"));
const message_1 = require("../../../../constants/message");
const generateOtp_1 = require("../../../../services/generateOtp");
const wholeSalerEmployee_model_1 = __importDefault(require("../../../../models/wholeSalerEmployee.model"));
const apiUrl = "https://smsmassdata.massdata.xyz/api/sms/send";
const apiKey = "01840404003.a23cb6f2-cc90-4221-aaef-8f6f0aa4d641";
const type = "text";
const senderId = "8803590005376";
const default_profile_image_url = "https://t4.ftcdn.net/jpg/02/15/84/43/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg";
const getOtp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { phone_number } = req.query;
    try {
        // const userInstance = await WholeSalerEmployeeModel.findOne({ phone_number});
        // console.log("userInstance", userInstance);
        const otp = (0, generateOtp_1.generateOTP)();
        const generateMessage = () => {
            return `your OTP for BazarPay Wholesaler App is ${otp}, Do not share this OTP with anyone`;
        };
        const dynamicMessage = generateMessage();
        const employeeInstance = yield wholeSalerEmployee_model_1.default.findOne({ phone_number });
        if (employeeInstance) {
            return res.status(404).json({
                message: message_1.MESSAGE.get.fail,
            });
        }
        const urlWithDynamicMessage = `${apiUrl}?apiKey=${apiKey}&type=${type}&contactNumbers=${"880" + phone_number}&senderId=${senderId}&textBody=${encodeURIComponent(dynamicMessage)}`;
        console.log("===>", urlWithDynamicMessage);
        axios_1.default
            .get(urlWithDynamicMessage)
            .then((response) => {
            console.log(response);
            return res.status(200).json({
                message: message_1.MESSAGE.get.succ,
                result: otp,
            });
        })
            .catch((error) => {
            return res.status(400).json({
                message: message_1.MESSAGE.get.fail,
                result: error,
            });
        });
    }
    catch (error) {
        console.log("error");
    }
});
exports.getOtp = getOtp;
const forgetPasswordOtp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { phone_no } = req.query;
    try {
        const isUserExist = yield customer_model_1.default.findOne({ mobile: phone_no });
        if (!isUserExist) {
            return res.status(401).json({
                message: message_1.MESSAGE.get.custom("User Does Not Exists"),
            });
        }
        const otp = (0, generateOtp_1.generateOTP)();
        // Function to generate a dynamic message
        const generateMessage = () => {
            // Your message generation logic goes here
            return `your OTP for login in Muslim Matrimony is ${otp} `;
        };
        const dynamicMessage = generateMessage();
        const urlWithDynamicMessage = `${apiUrl}?apiKey=${apiKey}&type=${type}&contactNumbers=${"88" + phone_no}&senderId=${senderId}&textBody=${encodeURIComponent(dynamicMessage)}`;
        axios_1.default
            .get(urlWithDynamicMessage)
            .then((response) => {
            console.log(response);
            return res.status(200).json({
                message: message_1.MESSAGE.get.succ,
                result: otp,
            });
        })
            .catch((error) => {
            return res.status(400).json({
                message: message_1.MESSAGE.get.fail,
                result: error,
            });
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.forgetPasswordOtp = forgetPasswordOtp;
