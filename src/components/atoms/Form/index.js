import React from "react";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import TextInput from "./TextInput";

const Form = ({ formData, onSave, submitText }) => {
  const formik = useFormik({
    initialValues: formData.reduce((a, item) => {
      let form = { ...a, [item.name]: "" };
      return form;
    }, {}),
    onSubmit: (values, { resetForm }) => {
      onSave({ ...values });
      resetForm();
    },
  });

  const inputHandler = ({ name, label }) => {
    return <TextInput key={name} formik={formik} name={name} label={label} />;
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="formContainer">
        {formData.map((item) => inputHandler(item))}
        <Button type="submit" variant="contained">
          {submitText}
        </Button>
      </div>
    </form>
  );
};

export default Form;
