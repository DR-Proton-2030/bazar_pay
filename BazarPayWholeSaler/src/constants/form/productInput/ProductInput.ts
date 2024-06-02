// export const ProductFirstInput = [
//     { placeholder: "পণ্যের নাম", half: false },
//     { placeholder: "একক", half: true },
//     { placeholder: "ক্রয় দাম", half: true },
//     { placeholder: "বিক্রয় দাম", half: true },
//     { placeholder: "ডিস্কাউন্ট (যদি থাকে)", half: true },
//     { placeholder: "স্টক (যদি থাকে)", half: true },
//     { placeholder: "ওজনের মূল্য", half: true },
//     { placeholder: "ফ্রি (যদি থাকে)", half: true },
//     { placeholder: "ক্যাটাগরি", half: true },
//     { placeholder: "সাব ক্যাটাগরি", half: true },
//     { placeholder: "অতিরিক্ত বিবরণ", half: false }
//   ]; 

import { ITextinput } from "../../../@types/types/TextInput.types";

//   export const ProductSecondInput = [
//     { placeholder: "পণ্যের ওয়ারেন্টি (যদি থাকে)", half: false },
//     { placeholder: "পণ্যের ডিস্কাউন্ট (যদি থাকে)", half: true },
//     { placeholder: "পণ্যের জিএটি (যদি থাকে)", half: true },
//     { placeholder: "চালানের নম্বর (যদি থাকে)", half: false }
//   ];

export const ProductFirstInput: ITextinput[] = [
  { placeholder: "পণ্যের নাম", name: "product_name", half: false, type: "default" },
  { placeholder: "একক", name: "unit", half: true , type: "default"},
  { placeholder: "একক", name: "unit", half: true, type: "default" },
  { placeholder: "ক্রয় মূল্য", name: "product_buying_price", half: true, type: "numeric" },
  { placeholder: "বিক্রয় মূল্য", name: "product_saling_price", half: true, type: "numeric" },
  { placeholder: "ডিসকাউন্ট", name: "discount", half: true, type: "numeric" },
  { placeholder: "বর্তমান স্টক", name: "current_stock", half: true , type: "numeric"},
  // Add other fields as needed
];

export const ProductSecondInput: ITextinput[] = [
  { placeholder: "পণ্যের বিবরণ", name: "product_description", half: false, type: "default" },
  { placeholder: "ওয়ারেন্টি", name: "product_warenty", half: false, type: "default" },
  { placeholder: "অতিরিক্ত ডিসকাউন্ট", name: "product_discount", half: true, type: "numeric"},
  { placeholder: "ভ্যাট", name: "product_bhat", half: true, type: "numeric" },
  { placeholder: "ফ্রি", name: "free", half: false, type: "numeric" },
  { placeholder: "মোট", name: "Total", half: false, type: "numeric" },
  // Add other fields as needed
];
