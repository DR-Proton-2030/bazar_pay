import { IWholesalerForm } from "../../@types/types/wholesalerFormField.types";

const formFields : IWholesalerForm[] = [
  { label: "নাম", placeholder: "আপনার নাম লিখুন", field: "wholesaler_name" },
  {
    label: "প্রাতিষ্ঠানিকনাম",
    placeholder: "প্রাতিষ্ঠানিক নাম লিখুন",
    field: "owner_name",
  },
  {
    label: "ফোন নম্বর",
    placeholder: "আপনার ফোন নম্বর লিখুন",
    field: "owner_phone",
  },

  { label: "ইমেল", placeholder: "আপনার ইমেল লিখুন", field: "owner_email" },
  { label: "এনআইডি", placeholder: "আপনার এনআইবি লিখুন", field: "nid_number" },
  {
    label: "বাণিজ্য লাইসেন্স",
    placeholder: "আপনার বাণিজ্য লাইসেন্স লিখুন",
    field: "trade_licensce_number",
  },
];

export default formFields;
