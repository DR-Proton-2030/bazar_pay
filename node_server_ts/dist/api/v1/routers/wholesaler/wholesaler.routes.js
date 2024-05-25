"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import {
//   createBuilder,
//   getBuilder,
//   getBuilderDetailsById,
//   getBuilderNameWithID,
// } from "../../controllers/wholesalers/wholesaler.controller";
const multer_middleware_1 = require("../../../../middleware/multer.middleware");
const wholesaler_controller_1 = require("../../controllers/wholesalers/wholesaler.controller");
const router = express_1.default.Router();
router.route("/get-wholesaler").get(wholesaler_controller_1.getWholeSaler);
router.route("/add-wholesaler").post(multer_middleware_1.upload.fields([
    { name: "logo", maxCount: 1 },
    { name: "sign_board", maxCount: 1 },
    { name: "owner_photo", maxCount: 1 },
    { name: "trade_licensce", maxCount: 1 },
    { name: "nid", maxCount: 1 },
    { name: "visiting_card", maxCount: 1 },
]), wholesaler_controller_1.createWholesaler);
// router.route("/getOtp").post(getOtp);
// router.route("/get-builder-list").get(getBuilderNameWithID);
module.exports = router;
