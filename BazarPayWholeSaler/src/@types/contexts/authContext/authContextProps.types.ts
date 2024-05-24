import { IUserDetails } from "../../types/user.interface";

export type AuthContextProps = {
	user: IUserDetails | null;
	setUser: (user: IUserDetails | null) => void;
};
