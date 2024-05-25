"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateOTP = void 0;
const generateOTP = () => {
    // Generate a random 4-digit number and convert it to a string
    const otp = Math.floor(1000 + Math.random() * 9000).toString();
    return otp;
};
exports.generateOTP = generateOTP;
