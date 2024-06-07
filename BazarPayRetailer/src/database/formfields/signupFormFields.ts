export interface FormField {
    label: string;
    placeholder: string;
  }
  
  const signUpformFields = [
    { label: "নাম", placeholder: "আপনার নাম লিখুন" ,field:"retailer_name"},
    { label: "ফোন নম্বর", placeholder: "আপনার ফোন নম্বর লিখুন"  ,field:"contact_phone_number"},
    { label: "ইমেল", placeholder: "আপনার ইমেল লিখুন"  ,field:"contact_email"},
    { label: "এনআইডি", placeholder: "আপনার এনআইবি লিখুন"  ,field:"nid_number"},
    { label: "বাণিজ্য লাইসেন্স", placeholder: "আপনার বাণিজ্য লাইসেন্স লিখুন",field:"trade_licensce_number" },
  ];
  
  export default signUpformFields;