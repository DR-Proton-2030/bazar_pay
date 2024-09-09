import React from "react";
import { TextfieldProps } from "../../../@types/props/textfield.props";
import { TextField } from "@mui/material";

const Textfield: React.FC<TextfieldProps> = ({
  label,
  type,
  width,
  className,
  onChange,
  name,
}) => {
  return (
    <div>
      <div className="label-with-input-field">
        <label className="form-labels">{label}:</label>
        <TextField
          type={type}
          className={className}
          onChange={onChange}
          variant="outlined"
          name={name}
        />
      </div>
    </div>
  );
};

export default Textfield;
