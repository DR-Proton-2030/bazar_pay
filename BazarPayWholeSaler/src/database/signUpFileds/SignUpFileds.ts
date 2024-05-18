// formFields.ts

export interface FormField {
  label: string;
  placeholder: string;
}

const formFields: FormField[] = [
  { label: "Name", placeholder: "Enter your name" },
  { label: "Phone Number", placeholder: "Enter your phone number" },
  { label: "Email", placeholder: "Enter your email" },
  { label: "NIB", placeholder: "Enter your NIB" },
  { label: "Trade Licence", placeholder: "Enter your trade licence" },
];

export default formFields;
