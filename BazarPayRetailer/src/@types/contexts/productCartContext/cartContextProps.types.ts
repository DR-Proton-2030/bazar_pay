import { User } from "../../user.types";

export type ProductCartContextProps = {
	product: any[];
	setProduct: (product: any[]) => void;
};
