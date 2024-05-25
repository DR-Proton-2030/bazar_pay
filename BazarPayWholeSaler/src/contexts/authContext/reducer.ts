import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthAction } from "../../@types/contexts/authContext/authAction.types";
import { Store } from "../../@types/contexts/authContext/store.types";
import actions from "./actions";

const reducer = (state: Store, action: AuthAction) => {
	switch (action.type) {
		case actions.SET_USER: {
			AsyncStorage.setItem("@user", JSON.stringify(action.payload.user));
			return {
				...state,
				isLoggedIn: true,
				user: action.payload.user
			};
		}
		default:
			throw new Error("Unexpected action: Auth Context");
	}
};

export default reducer;
