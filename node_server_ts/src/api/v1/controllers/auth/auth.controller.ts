import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import CustomerModel from "../../../../models/customer.model";
import { MESSAGE } from "../../../../constants/message";
import AdminModel from "../../../../models/wholeSalerEmployee.model";
import { verifyPassword } from "../../../../services/verifyPassword";

export const customerGoogleLogin = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const existingCustomer = await CustomerModel.findOne({email: payload.email});
    if (existingCustomer){
      return res.status(200).json({
        message: MESSAGE.post.succAuth,
        result: existingCustomer,
      })
    }
    const customerInstance =  await new CustomerModel(payload).save();

    return res.status(200).json({
      message: MESSAGE.post.succAuth,
      result: customerInstance,
    })

  } catch (error) {
    console.error(error);
    return res.status(400).json({
      message: MESSAGE.post.fail,
      error,
    });
  }
};

export const customerMobileSignUp = async (req: Request, res: Response) => {
  try {
      const userDetails = req.body;
      const customerInstance = await CustomerModel.findOne({phone: userDetails.phone});
      if(customerInstance){
          return res.status(409).json({
              message:MESSAGE.post.sameEntry,
          })
      }
      bcrypt.hash(userDetails.password, 10, async (err, hash) => {
          if (err) {
              console.error("Error hashing password:", err);
          } else {
               const userInstance = await new CustomerModel({ ...userDetails, "password": hash }).save();
              if (userInstance) {
                  return res.status(200).send({
                      message: MESSAGE.post.succAuth,
                      result: userInstance
                  });
              }
          }
      });
  }
  catch (error) {
      console.log("error", error)
      res.status(400).json({
          message: MESSAGE.post.fail,
          error,
      });
  }
}

export const loginCustomer = async (req: Request, res: Response) => {
  try {
    const { phone, password } = req.body;
    const customerInstance = await CustomerModel.findOne({phone: phone});
    if (!customerInstance) {
      return res.status(404).json({
        message: MESSAGE.post.failAuth,
      });
    }
    const verify = await verifyPassword(password, customerInstance.password);
    if (verify) {
      return res.status(200).json({
        message: MESSAGE.post.succAuth,
        result: customerInstance,
      });
    }
    return res.status(404).json({
      message: MESSAGE.post.failAuth,
    });
  } catch (error) {
    return res.status(400).json({
      message: MESSAGE.post.fail,
      error,
    });
  }
};


export const loginAdmin = async (req: Request, res: Response) => {
  try {
    const { userId, password } = req.body;
    const filterQuery = userId.includes("@")
      ? { email: userId }
      : { phone_number: userId };
    console.log("===>filter", filterQuery);
    const adminInstance = await AdminModel.findOne(filterQuery).populate("builder");
    if (!adminInstance) {
      return res.status(404).json({
        message: MESSAGE.post.failAuth,
      });
    }
    const verify = await verifyPassword(password, adminInstance.password);
    if (verify) {
      return res.status(200).json({
        message: MESSAGE.post.succAuth,
        result: adminInstance,
      });
    }
    return res.status(404).json({
      message: MESSAGE.post.failAuth,
    });
  } catch (error) {
    return res.status(400).json({
      message: MESSAGE.post.fail,
      error,
    });
  }
};
