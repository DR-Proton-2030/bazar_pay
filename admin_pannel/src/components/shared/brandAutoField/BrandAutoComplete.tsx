import React, { useState, useEffect } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { api } from "../../../utils/api";

const AutocompleteInputField = ({ setBrandId }: any) => {
  const [options, setOptions] = useState([]);

  const defProps = {
    options: options,
    getOptionLabel: (option: any) => `${option.name}`,
  };

  const getData = (data: any) => {
    console.log(data?._id);
    setBrandId(data?._id);
  };
  // const getBrandList = async()=>{
  //   const filter ={
  //     page:1
  //   }
  // try {
  //   const result = await api.brand.getBrand(filter)
  //   setOptions(result);
  // } catch (error) {
  //   console.log(error)
  // }
  // }
  //   useEffect(() => {
  //     getBrandList()
  //   }, []);

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
