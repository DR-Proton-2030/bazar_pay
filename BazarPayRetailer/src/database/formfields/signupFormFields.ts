export interface FormField {
    label: string;
    placeholder: string;
  }
  
  const signUpformFields = [
    { label: "ব্যবসার নাম", placeholder: "আপনার ব্যবসার নাম লিখুন" ,field:"retailer_name"},
    { label: "আপনার নাম", placeholder: "আপনার নাম লিখুন" ,field:"contact_name"},
    { label: "ফোন নম্বর", placeholder: "আপনার ফোন নম্বর লিখুন"  ,field:"contact_phone"},
    { label: "ইমেল", placeholder: "আপনার ইমেল লিখুন"  ,field:"contact_email"},
    { label: "এনআইবি", placeholder: "আপনার এনআইবি লিখুন"  ,field:"nid_number"},
    { label: "বাণিজ্য লাইসেন্স", placeholder: "আপনার বাণিজ্য লাইসেন্স লিখুন",field:"trade_license_number" },
  ];
  
  export default signUpformFields;