"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bucketName = exports.mediaConverter = exports.s3 = void 0;
const aws_sdk_1 = __importDefault(require("aws-sdk"));
aws_sdk_1.default.config.update({
    accessKeyId: "AKIAWW2CZET5JKL6RMKC",
    secretAccessKey: "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",
    region: "ap-south-1",
});
// Create an S3 instance
exports.s3 = new aws_sdk_1.default.S3();
exports.mediaConverter = new aws_sdk_1.default.MediaConvert();
exports.bucketName = "bazarpay";
