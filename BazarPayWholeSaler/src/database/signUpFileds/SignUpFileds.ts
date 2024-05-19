// formFields.ts

export interface FormField {
  label: string;
  placeholder: string;
}

const formFields = [
  { label: "নাম", placeholder: "আপনার নাম লিখুন" },
  { label: "ফোন নম্বর", placeholder: "আপনার ফোন নম্বর লিখুন" },
  { label: "ইমেল", placeholder: "আপনার ইমেল লিখুন" },
  { label: "এনআইবি", placeholder: "আপনার এনআইবি লিখুন" },
  { label: "বাণিজ্য লাইসেন্স", placeholder: "আপনার বাণিজ্য লাইসেন্স লিখুন" },
];

export default formFields;


