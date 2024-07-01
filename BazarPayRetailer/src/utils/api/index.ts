import { Login, OtpLogin, createAdmin } from "./auth/login";
import { getOtp } from "./auth/otp";
import { SignUp } from "./auth/signUp";
import { getDepartments } from "./departments/department";
import { PostFeed, getFeeds } from "./feed/feed";
import { getComplaintsImage } from "./getImage/getImage";
import { getProductList } from "./products/Products";
import { PostComplaints, PostResolution, assignComplaint, getComplaints } from "./scan/complaints.api";

export const api = {
	auth: {
		SignUp,
		Login,
		getOtp,
	},
	product :{
		getProductList
	}
	
};
