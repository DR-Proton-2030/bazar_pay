import { IForm } from "./FormField.type";
import { IWholesaler } from "./wholesaler.interface";

export interface IWholesalerForm extends IForm{
    field: keyof IWholesaler
}