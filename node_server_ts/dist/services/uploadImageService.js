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
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadImageToS3Service = void 0;
const client_s3_1 = require("@aws-sdk/client-s3");
const aws_config_1 = require("../config/aws.config");
const uploadImageToS3Service = (key, thumbnailBuffer) => __awaiter(void 0, void 0, void 0, function* () {
    const photoKey = `${key}/${Date.now()}photo.png`;
    const command = new client_s3_1.PutObjectCommand({
        Bucket: aws_config_1.bucketName,
        Key: photoKey,
        Body: thumbnailBuffer,
        ACL: "public-read", // Set the ACL as needed (e.g., public-read for public access)
    });
    try {
        const response = yield aws_config_1.s3Client.send(command);
        console.log(response);
        if (response) {
            return `${aws_config_1.s3Url}/${photoKey}`;
        }
        return null;
    }
    catch (err) {
        console.error(err);
    }
});
exports.uploadImageToS3Service = uploadImageToS3Service;
