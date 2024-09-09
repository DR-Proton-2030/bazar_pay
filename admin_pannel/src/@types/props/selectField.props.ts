import { SelectChangeEvent } from "@mui/material";

export interface SelectFieldProps {
  label: string;
  name: string;
  value: string;
  options: { label: string; value: string }[];
  onChange: (event: SelectChangeEvent<unknown>, child: React.ReactNode) => void;
  error?: boolean;
  helperText?: string;
}
