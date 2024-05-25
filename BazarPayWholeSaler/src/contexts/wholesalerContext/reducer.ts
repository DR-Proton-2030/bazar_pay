
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Store } from "../../@types/contexts/wholesalerContext/store.types";
import { WholesalerAction } from "../../@types/contexts/wholesalerContext/wholesalerAction.types";
import actions from "./actions";

const reducer = (state: Store, action: WholesalerAction) => {
	switch (action.type) {
		case actions.SET_WHOLESALER: {
			AsyncStorage.setItem("@wholesaler", JSON.stringify(action.payload.wholesaler));
			return {
				...state,
				wholesaler: action.payload.wholesaler
			};
		}
		default:
			throw new Error("Unexpected action: Wholesaler Context");
	}
};

export default reducer;
