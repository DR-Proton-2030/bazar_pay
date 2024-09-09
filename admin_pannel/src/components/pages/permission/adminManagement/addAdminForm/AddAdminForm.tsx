import React, { useContext, useEffect, useState } from "react";
import Textfield from "../../../../shared/textField/Textfield";
import { IAdmin } from "../../../../../@types/interface/admin.interface";
import SelectField from "../../../../shared/selectField/SelectField";
import { Button, Paper, SelectChangeEvent } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import UIContext from "../../../../../contexts/uiContext/UIContext";

const AddAdminForm = () => {
  const { setDashboardHeader } = useContext(UIContext);
  const [details, setDetails] = useState<IAdmin | null>();

  useEffect(() => {
    setDashboardHeader("Add Admin");
  }, [setDashboardHeader]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setDetails((prevDetails: any) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <>
      <h3 className="form-heading">Add Admin Details</h3>
      <Paper>
        <div className="admin-form-container">
          <Textfield
            label={"full name"}
            name={"full_name"}
            width={"65%"}
            type={"text"}
            className={"text-input-field"}
            onChange={handleChange}
          />

          <Textfield
            label={"Email"}
            name={"email"}
            width={"65%"}
            type={"email"}
            className={"text-input-field"}
            onChange={handleChange}
          />
          <Textfield
            label={"Phone number"}
            name={"phone_number"}
            width={"65%"}
            type={"phone"}
            className={"text-input-field"}
            onChange={handleChange}
          />
          <Textfield
            label={"Role"}
            name={"role"}
            width={"65%"}
            type={"phone"}
            className={"text-input-field"}
            onChange={handleChange}
          />

          {/* <SelectField
        label={"Role"}
        name={"role"}
        value={""}
        options={[]}
        onChange={handleChange}
      /> */}
        </div>
      </Paper>

      <div className="submit-btn-container">
        <Button variant="contained" className="blue-btn" endIcon={<SendIcon />}>
          Submit
        </Button>
      </div>
    </>
  );
};

export default AddAdminForm;
