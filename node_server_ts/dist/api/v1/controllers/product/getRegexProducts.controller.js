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
exports.getRegexProducts = exports.escapeRegExp = void 0;
const message_1 = require("../../../../constants/message");
const http_status_codes_1 = require("http-status-codes");
const product_model_1 = __importDefault(require("../../../../models/product.model"));
const escapeRegExp = (text) => {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};
exports.escapeRegExp = escapeRegExp;
const getRegexProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { product_name } = req.query;
        console.log("Product Name: ", product_name);
        // Build the regex pattern for case-insensitive search
        // const regexPattern = new RegExp(product_name as string, 'i');
        // Build the regex pattern for case-insensitive search to match the beginning of the string
        // const regexExp = escapeRegExp(product_name as string);
        // const regexPattern = new RegExp(`^${regexExp}`, 'i');
        // Build the regex pattern for case-insensitive search to match the beginning of the string
        const regexExp = (0, exports.escapeRegExp)(product_name);
        const regexPattern = new RegExp("^" + regexExp, "i");
        // Creating Product Regex Payload
        const productReqexPayload = {
            product_name: regexPattern
        };
        console.log("productReqexPayload: ", productReqexPayload);
        // Finding Products using regex
        const productInstance = yield product_model_1.default.find(productReqexPayload).lean();
        res.status(http_status_codes_1.StatusCodes.OK).json({
            message: message_1.MESSAGE.get.succ,
            totalProductsCount: productInstance.length,
            result: productInstance
        });
    }
    catch (error) {
        console.error("Error Fetching Products Using Regex:", error);
        res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
            message: message_1.MESSAGE.get.fail
        });
    }
});
exports.getRegexProducts = getRegexProducts;