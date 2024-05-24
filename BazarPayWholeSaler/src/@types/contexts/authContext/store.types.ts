import { IUserDetails } from "../../types/user.interface";

export type Store = {
	user: IUserDetails | null;
	isLoggedIn: boolean;
};
