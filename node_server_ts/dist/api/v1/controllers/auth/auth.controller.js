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
exports.loginWholesaler = void 0;
const message_1 = require("../../../../constants/message");
const verifyPassword_1 = require("../../../../services/verifyPassword");
const wholeSalerEmployee_model_1 = __importDefault(require("../../../../models/wholeSalerEmployee.model"));
// export const customerGoogleLogin = async (req: Request, res: Response) => {
//   try {
//     const payload = req.body;
//     const existingCustomer = await CustomerModel.findOne({email: payload.email});
//     if (existingCustomer){
//       return res.status(200).json({
//         message: MESSAGE.post.succAuth,
//         result: existingCustomer,
//       })
//     }
//     const customerInstance =  await new CustomerModel(payload).save();
//     return res.status(200).json({
//       message: MESSAGE.post.succAuth,
//       result: customerInstance,
//     })
//   } catch (error) {
//     console.error(error);
//     return res.status(400).json({
//       message: MESSAGE.post.fail,
//       error,
//     });
//   }
// };
// export const customerMobileSignUp = async (req: Request, res: Response) => {
//   try {
//       const userDetails = req.body;
//       const customerInstance = await CustomerModel.findOne({phone: userDetails.phone});
//       if(customerInstance){
//           return res.status(409).json({
//               message:MESSAGE.post.sameEntry,
//           })
//       }
//       bcrypt.hash(userDetails.password, 10, async (err, hash) => {
//           if (err) {
//               console.error("Error hashing password:", err);
//           } else {
//                const userInstance = await new CustomerModel({ ...userDetails, "password": hash }).save();
//               if (userInstance) {
//                   return res.status(200).send({
//                       message: MESSAGE.post.succAuth,
//                       result: userInstance
//                   });
//               }
//           }
//       });
//   }
//   catch (error) {
//       console.log("error", error)
//       res.status(400).json({
//           message: MESSAGE.post.fail,
//           error,
//       });
//   }
// }
const loginWholesaler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { phone_number, password } = req.body;
        const employeeInstance = yield wholeSalerEmployee_model_1.default.findOne({ phone_number }).populate("wholesaler");
        if (!employeeInstance) {
            return res.status(404).json({
                message: message_1.MESSAGE.post.failAuth,
            });
        }
        const verify = yield (0, verifyPassword_1.verifyPassword)(password, employeeInstance.password);
        if (verify) {
            const wholesaler = employeeInstance.wholesaler;
            delete employeeInstance.wholesaler;
            return res.status(200).json({
                message: message_1.MESSAGE.post.succAuth,
                result: {
                    user: employeeInstance,
                    wholesaler
                },
            });
        }
        return res.status(404).json({
            message: message_1.MESSAGE.post.failAuth,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: message_1.MESSAGE.post.fail,
            error,
        });
    }
});
exports.loginWholesaler = loginWholesaler;
// export const loginAdmin = async (req: Request, res: Response) => {
//   try {
//     const { userId, password } = req.body;
//     const filterQuery = userId.includes("@")
//       ? { email: userId }
//       : { phone_number: userId };
//     console.log("===>filter", filterQuery);
//     const adminInstance = await AdminModel.findOne(filterQuery).populate("builder");
//     if (!adminInstance) {
//       return res.status(404).json({
//         message: MESSAGE.post.failAuth,
//       });
//     }
//     const verify = await verifyPassword(password, adminInstance.password);
//     if (verify) {
//       return res.status(200).json({
//         message: MESSAGE.post.succAuth,
//         result: adminInstance,
//       });
//     }
//     return res.status(404).json({
//       message: MESSAGE.post.failAuth,
//     });
//   } catch (error) {
//     return res.status(400).json({
//       message: MESSAGE.post.fail,
//       error,
//     });
//   }
// };
