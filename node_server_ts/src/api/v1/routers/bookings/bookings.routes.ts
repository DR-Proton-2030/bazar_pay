import express from "express";
import {
  createBooking,
  forwardEnquryStatus,
  getBookings,
  getForwardedEnquryList,
  updateEnquiryStatus,
} from "../../controllers/plotBooking/plotBooking.controllers";

const router = express.Router();

router.route("/create-booking").post(createBooking);
router.route("/get-booking").get(getBookings);
router.route("/forward-enqury").post(forwardEnquryStatus);
router.route("/get-forward-enqury-list").get(getForwardedEnquryList);
router.route("/update-enquiry-status").patch(updateEnquiryStatus);

module.exports = router;