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
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("./config");
const mongoURI = String(config_1.NODE_ENV) === "PROD"
    ? config_1.MONGO_URI.PROD
    : String(config_1.NODE_ENV) === "DEV"
        ? config_1.MONGO_URI.DEV
        : String(config_1.NODE_ENV) === "LOCAL"
            ? config_1.MONGO_URI.LOCAL
            : "";
console.log("MongoDB URI:", mongoURI);
const connectDb = () => __awaiter(void 0, void 0, void 0, function* () {
    if (!mongoURI) {
        throw new Error("MongoDB URI is not defined.");
    }
    try {
        // Check if mongoose is already connected
        if (mongoose_1.default.connection.readyState === 0) {
            const conn = yield mongoose_1.default.connect(mongoURI, {
                serverSelectionTimeoutMS: 40000,
            });
            console.log("MongoDB Connected:", conn.connection.host);
        }
        else {
            console.log("MongoDB already connected.");
        }
    }
    catch (error) {
        console.error("MongoDB connection error:", error);
        throw error;
    }
});
exports.default = connectDb;
