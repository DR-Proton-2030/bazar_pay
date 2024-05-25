"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const plotBooking_controllers_1 = require("../../controllers/plotBooking/plotBooking.controllers");
const router = express_1.default.Router();
router.route("/create-booking").post(plotBooking_controllers_1.createBooking);
router.route("/get-booking").get(plotBooking_controllers_1.getBookings);
router.route("/forward-enqury").post(plotBooking_controllers_1.forwardEnquryStatus);
router.route("/get-forward-enqury-list").get(plotBooking_controllers_1.getForwardedEnquryList);
router.route("/update-enquiry-status").patch(plotBooking_controllers_1.updateEnquiryStatus);
module.exports = router;
