import { model } from "mongoose";
import { IForwardedEnquiry } from "../@types/types/forwardedEnquiry.interface";
import forwardedEnquirySchema from "./schemaDefinitions/forwardedEnquiry.schema";

const ForwardedEnquiryModel = model<IForwardedEnquiry>(
  "forwardedEnquiry",
  forwardedEnquirySchema
);

export default ForwardedEnquiryModel;