import { BuilderAction } from "../../@types/contexts/BuilderContext/BuilderAction.types";
import { Store } from "../../@types/contexts/BuilderContext/store.types";
import actions from "./actions";

const reducer = (state: Store, action: BuilderAction) => {
	switch (action.type) {
		case actions.SET_BUIDER: {
			return {
				...state,
				builderDetails: action.payload.builderDetails
			};
		}
		default:
			throw new Error("Unexpected action: UI Context");
	}
};

export default reducer;
