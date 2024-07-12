import React, { useState, useEffect } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const AutocompleteInputField = () => {
  const [options, setOptions] = useState([]);

  const defProps = {
    options: options,
    getOptionLabel: (options: { name: any; _id: any }) =>
      options.name + " " + "(" + options._id + ")",
  };

  const getData = (data: { _id: string; name: string } | null) => {
    console.log(data?._id);
  };
  useEffect(() => {
    axios
      .get(`http://localhost:8989/api/v1/brands/get-brand-list?page=1`)
      .then((response) => {
        console.log("response", response.data.result);
        setOptions(response.data.result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <Autocomplete
      sx={{ width: "500px" }}
      {...defProps}
      onChange={(event, value) => getData(value)}
      renderInput={(params) => (
        <TextField {...params} label="Choose Brand" variant="outlined" />
      )}
    />
  );
};

export default AutocompleteInputField;
