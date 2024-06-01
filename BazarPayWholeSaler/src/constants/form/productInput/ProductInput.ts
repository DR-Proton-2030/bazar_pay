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

//   export const ProductSecondInput = [
//     { placeholder: "পণ্যের ওয়ারেন্টি (যদি থাকে)", half: false },
//     { placeholder: "পণ্যের ডিস্কাউন্ট (যদি থাকে)", half: true },
//     { placeholder: "পণ্যের জিএটি (যদি থাকে)", half: true },
//     { placeholder: "চালানের নম্বর (যদি থাকে)", half: false }
//   ];

export const ProductFirstInput = [
  { placeholder: "পণ্যের নাম", name: "product_name", half: false },
  { placeholder: "একক", name: "unit", half: false },
  { placeholder: "ক্রয় মূল্য", name: "product_buying_price", half: true },
  { placeholder: "বিক্রয় মূল্য", name: "product_saling_price", half: true },
  { placeholder: "ডিসকাউন্ট", name: "discount", half: true },
  { placeholder: "বর্তমান স্টক", name: "current_stock", half: true },
  
  // Add other fields as needed
];

export const ProductSecondInput = [
  { placeholder: "পণ্যের বিবরণ", name: "product_description", half: false },
  { placeholder: "ওয়ারেন্টি", name: "product_warenty", half: false },
  { placeholder: "অতিরিক্ত ডিসকাউন্ট", name: "product_discount", half: true },
  { placeholder: "ভ্যাট", name: "product_bhat", half: true },
  { placeholder: "ফ্রি", name: "free", half: false },
  { placeholder: "মোট", name: "Total", half: false },
  // Add other fields as needed
];
