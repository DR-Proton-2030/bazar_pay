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
exports.createWholeslaerEmployee = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const message_1 = require("../../../../constants/message");
const wholeSalerEmployee_model_1 = __importDefault(require("../../../../models/wholeSalerEmployee.model"));
const createWholeslaerEmployee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userDetails = req.body;
        const adminInstance = yield wholeSalerEmployee_model_1.default.findOne({ phone_number: userDetails.phone_number });
        if (adminInstance) {
            return res.status(409).json({
                message: message_1.MESSAGE.post.sameEntry,
            });
        }
        bcryptjs_1.default.hash(userDetails.password, 10, (err, hash) => __awaiter(void 0, void 0, void 0, function* () {
            if (err) {
                console.error("Error hashing password:", err);
            }
            else {
                const userInstance = yield new wholeSalerEmployee_model_1.default(Object.assign(Object.assign({}, userDetails), { "password": hash, "last_login_date": new Date() })).save();
                if (userInstance) {
                    return res.status(200).send({
                        message: message_1.MESSAGE.post.succ,
                        result: userInstance
                    });
                }
            }
        }));
    }
    catch (error) {
        console.log("error", error);
        res.status(400).json({
            message: message_1.MESSAGE.post.fail,
            error,
        });
    }
});
exports.createWholeslaerEmployee = createWholeslaerEmployee;
// export const getEmployeeList = async (req: Request, res: Response) => {
//     try {
//       const filter: any = req.query;
//       const currentPage = parseInt(String(filter.page || "1"));
//       const limit = 5;
//       const startIndex = (currentPage - 1) * limit;
//       const sortField = filter.sortField ? filter.sortField : "updatedAt";
//       delete filter.page;
//       delete filter.sortField;
//       const totalCount = await AdminModel.countDocuments(filter);
//       const adminDtails = await AdminModel.find(filter)
//         .populate("builder")
//         .sort({ [sortField]: -1 })
//         .skip(startIndex)
//         .limit(limit);
//       res.status(200).json({
//         message: MESSAGE.get.succ,
//         pagination: {
//           total: totalCount,
//           currentPage: currentPage,
//         },
//         result: adminDtails,
//       });
//     } catch (error) {
//       console.error("Error fetching bookings:", error);
//       res.status(400).json({
//         message: MESSAGE.get.fail,
//       });
//     }
//   };