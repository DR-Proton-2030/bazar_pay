"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const rertailers_controller_1 = require("../../controllers/retailer/rertailers.controller");
const router = express_1.default.Router();
router.route("/get-retailer").get(rertailers_controller_1.getRetailer);
module.exports = router;
