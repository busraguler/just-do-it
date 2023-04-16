import React from "react";
import { TextField } from "@mui/material";

const TextInput = ({ formik, name, label, size = "small" }) => {
  const handleChange = (e) => {
    formik.handleChange(e);
  };
  return (
    <TextField
      fullWidth
      name={name}
      value={formik.values[name]}
      label={label}
      onChange={handleChange}
      size={size}
      multiline
      maxRows={3}
    />
  );
};

export default TextInput;
