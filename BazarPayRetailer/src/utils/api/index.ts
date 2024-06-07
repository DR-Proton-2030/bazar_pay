import { Login, OtpLogin, createAdmin } from "./auth/login";
import { SignUp } from "./auth/signUp";
import { getDepartments } from "./departments/department";
import { PostFeed, getFeeds } from "./feed/feed";
import { getComplaintsImage } from "./getImage/getImage";
import { PostComplaints, PostResolution, assignComplaint, getComplaints } from "./scan/complaints.api";

export const api = {
	auth: {
		SignUp: SignUp,
		Login: Login,
		OtpLogin: OtpLogin,
		createAdmin: createAdmin
	},
	complain: {
		PostComplaints: PostComplaints,
		PostResolution: PostResolution,
		getComplaints: getComplaints,
		getComplaintsImage: getComplaintsImage,
		assignComplaint: assignComplaint
	},
	feed: {
		PostFeed: PostFeed,
		getFeeds: getFeeds
	},
	department: {
		getDepartments: getDepartments
	}
};
