import { IForm } from "../../@types/types/FormField.type";

export const inputFields: IForm[] = [
  { label: "পরিমাণ", field: "quantity", keyboardType: "numeric" },
  {
    label: "ক্রয় মূল্য (BDT)",
    field: "buyingPrice",
    keyboardType: "numeric",
  },
  { label: "এমআরপি (BDT)", field: "markedPrice", keyboardType: "numeric" },
  { label: "ছাড় (%)", field: "discount", keyboardType: "numeric" },
  // { label: 'Selling Status', key: 'sellingStatus', keyboardType: 'default' },
];
