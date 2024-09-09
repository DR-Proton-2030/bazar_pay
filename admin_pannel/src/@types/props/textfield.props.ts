export interface TextfieldProps {
  label: string;
  name: string;
  width: string;
  type: React.HTMLInputTypeAttribute;
  className: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
