import { IForm } from "../../@types/types/FormField.type";

export const inputFields: IForm[] = [
  { label: "Quantity", field: "quantity", keyboardType: "numeric" },
  {
    label: "Buying Price (BDT)",
    field: "buyingPrice",
    keyboardType: "numeric",
  },
  { label: "MRP (BDT)", field: "markedPrice", keyboardType: "numeric" },
  { label: "Discount (%)", field: "discount", keyboardType: "numeric" },
  // { label: 'Selling Status', key: 'sellingStatus', keyboardType: 'default' },
];
