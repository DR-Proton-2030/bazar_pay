import { IWholesaler } from "../../types/wholesaler.interface";

export type WholesalerContextProps = {
	wholesaler: IWholesaler | null;
	setWholesaler: (wholesaler: IWholesaler | null) => void;
};
