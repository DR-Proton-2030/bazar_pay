import { Store } from "./store.types";

export type BuilderAction = {
	type: string;
	payload: Store;
};
