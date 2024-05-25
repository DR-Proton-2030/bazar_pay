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
exports.getForwardedEnquryList = exports.forwardEnquryStatus = exports.updateEnquiryStatus = exports.getBookings = exports.createBooking = void 0;
const book_model_1 = __importDefault(require("../../../../models/book.model"));
const message_1 = require("../../../../constants/message");
const forwardedEnquiry_model_1 = __importDefault(require("../../../../models/forwardedEnquiry.model"));
const adminAssignedProject_model_1 = __importDefault(require("../../../../models/adminAssignedProject.model"));
const layout_model_1 = __importDefault(require("../../../../models/layout.model"));
const createBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookingData = req.body;
        const bookingInstance = yield new book_model_1.default(bookingData).save();
        res.status(200).json({
            message: message_1.MESSAGE.post.succ,
            result: bookingInstance,
        });
    }
    catch (error) {
        console.error("Error creating booking:", error);
        res.status(400).json({
            message: message_1.MESSAGE.post.fail,
            error,
        });
    }
});
exports.createBooking = createBooking;
const getBookings = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const filter = req.query;
        const currentPage = parseInt(String(filter.page || "1"));
        const limit = 5;
        const startIndex = (currentPage - 1) * limit;
        const sortField = filter.sortField ? filter.sortField : "updatedAt";
        delete filter.page;
        delete filter.sortField;
        const totalCount = yield book_model_1.default.countDocuments(filter);
        const bookings = yield book_model_1.default.find(filter)
            .populate("customer project plot builder")
            .sort({ [sortField]: -1 })
            .skip(startIndex)
            .limit(limit);
        res.status(200).json({
            message: message_1.MESSAGE.get.succ,
            pagination: {
                total: totalCount,
                currentPage: currentPage,
            },
            result: bookings,
        });
    }
    catch (error) {
        console.error("Error fetching bookings:", error);
        res.status(400).json({
            message: message_1.MESSAGE.get.fail,
        });
    }
});
exports.getBookings = getBookings;
const updateEnquiryStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { enquiry_object_id, plot_object_id, status } = req.body;
        const response = yield book_model_1.default.findByIdAndUpdate(enquiry_object_id, {
            $set: { enqury_status: status },
        });
        if (status === "BOOKED") {
            yield layout_model_1.default.findByIdAndUpdate(plot_object_id, {
                $set: {
                    is_booked: true,
                },
            });
        }
        if (response) {
            return res.status(200).json({
                message: message_1.MESSAGE.patch.succ,
                result: response
            });
        }
    }
    catch (error) {
        return res.status(400).json({
            message: message_1.MESSAGE.patch.fail,
        });
    }
});
exports.updateEnquiryStatus = updateEnquiryStatus;
const forwardEnquryStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const forwardedPayload = req.body;
        const existingBooking = yield forwardedEnquiry_model_1.default.find(forwardedPayload);
        if (existingBooking.length > 0) {
            return res.status(409).json({
                message: message_1.MESSAGE.post.sameEntry,
            });
        }
        yield book_model_1.default.findByIdAndUpdate(forwardedPayload.enquiry_object_id, { $set: { enqury_status: "FORWARDED" } });
        const adminObjecIdList = yield adminAssignedProject_model_1.default.find({ project_object_id: forwardedPayload.project_object_id }, { admin_object_id: 1 });
        let payloadList = [];
        if (adminObjecIdList.length !== 0) {
            payloadList = adminObjecIdList.map((admin, i) => {
                return Object.assign(Object.assign({}, forwardedPayload), { forwarded_to: admin.admin_object_id });
            });
        }
        else {
            payloadList = [
                Object.assign(Object.assign({}, forwardedPayload), { forwarded_to: null })
            ];
        }
        const forwardedBookingInstance = yield forwardedEnquiry_model_1.default.insertMany(payloadList);
        return res.status(200).json({
            message: message_1.MESSAGE.post.succ,
            result: forwardedBookingInstance,
        });
    }
    catch (error) {
        res.status(400).json({
            message: message_1.MESSAGE.post.succ,
        });
    }
});
exports.forwardEnquryStatus = forwardEnquryStatus;
const getForwardedEnquryList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const filter = req.query;
        const currentPage = parseInt(String(filter.page || "1"));
        const limit = 5;
        const startIndex = (currentPage - 1) * limit;
        const sortField = filter.sortField ? filter.sortField : "updatedAt";
        delete filter.page;
        delete filter.sortField;
        const totalCount = yield forwardedEnquiry_model_1.default.countDocuments(filter);
        console.log("===> enqury", filter);
        const enquries = yield forwardedEnquiry_model_1.default.find(filter)
            .populate("builder project plot book customer forwarded_by_details forwarded_to_details builder")
            .sort({ [sortField]: -1 })
            .skip(startIndex)
            .limit(limit);
        console.log("===>list", enquries);
        res.status(200).json({
            message: message_1.MESSAGE.get.succ,
            pagination: {
                total: totalCount,
                currentPage: currentPage,
            },
            result: enquries,
        });
    }
    catch (error) {
        console.error("Error fetching bookings:", error);
        res.status(400).json({
            message: message_1.MESSAGE.get.fail,
        });
    }
});
exports.getForwardedEnquryList = getForwardedEnquryList;
