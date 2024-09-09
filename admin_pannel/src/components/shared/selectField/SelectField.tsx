import React from "react";
import { SelectFieldProps } from "../../../@types/props/selectField.props";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  name,
  value,
  options,
  onChange,
  error = false,
  helperText = "",
}) => {
  return (
    <div>
      <FormControl fullWidth variant="outlined" margin="normal" error={error}>
        <InputLabel>{label}</InputLabel>
        <Select label={label} name={name} value={value} onChange={onChange}>
          {options.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
        {/* Optional helperText if needed */}
        {helperText && <p style={{ color: "red" }}>{helperText}</p>}
      </FormControl>
    </div>
  );
};

export default SelectField;
