import React, { useCallback, useContext, useEffect, useState } from "react";
import UIContext from "../../../../contexts/uiContext/UIContext";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Autocomplete,
  Button,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  TextareaAutosize,
  styled,
} from "@mui/material";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { ICategory } from "../../../../@types/interface/category.interface";
import { api } from "../../../../utils/api";
import { CountryLists } from "../../../shared/countries/CountryList";
import { IBrand } from "../../../../@types/interface/brand.interface";
import { useNavigate } from "react-router-dom";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const AddBrandForm = () => {
  const navigate = useNavigate();
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  
  const [brandDetails, setBrandDetails] = useState<IBrand>({
    name: "",
    description: "",
    logo: "",
    country: "",
  });
  const { setDashboardHeader } = useContext(UIContext);

  const handleChange = useCallback(
    (event: any) => {
      const {
        target: { name, value },
      } = event;
      setBrandDetails(Object.assign({}, brandDetails, { [name]: value }));
    },
    [brandDetails]
  );

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("brandDetails", JSON.stringify(brandDetails));
      if (uploadedFile) {
        formData.append("logo", uploadedFile);
      }
      const response = await api.brand.createBrand(formData);
      if (response) {
        alert("Brand Details created successfully");
        navigate("/brand")
        
      }
      if (!response) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      setBrandDetails(brandDetails);
    } catch (error) {
      console.log("Error while adding");
      alert("failed to create brand");
    }
  };
  useEffect(() => {
    setDashboardHeader("Add Brand Details");
  }, [setDashboardHeader]);
  return (
    <form onSubmit={handleSubmit}>
       <h3>Add Brand Details</h3>
      
        <Paper sx={{marginTop: "20px", padding: "30px"}} elevation={3}>
        
            <div className="flex-input">
              <label>Brand Name:</label>
              <TextField
                className="mui-textfield"
                sx={{fontFamily: "poppins, sans-serif"}}
                value={brandDetails.name}
                onChange={handleChange}
                name="name"
                required
              />
            </div>

            <div className="flex-input">
              <label>Brand Details:</label>
              <textarea
                className="textarea"
                value={brandDetails.description}
                onChange={handleChange}
                name="description"
                required
              ></textarea>
            </div>

            <div className="flex-input">
              <label>Country:</label>
                <FormControl sx={{width: "500px"}}>
                <InputLabel id="demo-simple-select-label" sx={{fontFamily: "poppins, sans-serif"}}>
                  Select Country
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={brandDetails.country}
                  label="Country"
                  name="country"
                  onChange={handleChange}
                  sx={{fontFamily: "poppins, sans-serif"}}
                >
                  <MenuItem value={"INDIA"}>India</MenuItem>
                  <MenuItem value={"BANGLADESH"}>Bangladesh</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="flex-input">
              <label>Brand Logo:</label>
              <div className="flex-btn-chip">
                <Button
                  className="blue-btn"
                  component="label"
                  role={undefined}
                  variant="contained"
                  sx={{ fontSize: "10px" }}
                  endIcon={<CloudUploadIcon />}
                >
                  Upload Brand Logo
                  <VisuallyHiddenInput
                    type="file"
                    onChange={(event) => {
                      const file = event.target.files?.[0];
                      if (file) {
                        setUploadedFile(file);
                      }
                    }}
                    required
                  />
                </Button>

                {uploadedFile && (
                  <Chip
                    label={uploadedFile.name}
                    onDelete={() => setUploadedFile(null)}
                    variant="outlined"
                    sx={{ marginTop: 1 }}
                  />
                )}
              </div>
            </div>
            </Paper>
            <div style={{display: 'flex', justifyContent: "right", alignItems: "right"}}>
            <Button
              className="blue-btn"
              variant="contained"
              type="submit"
              sx={{
                fontFamily: "poppins, sans-serif",
                fontWeight: "500",
                fontSize: "13px",
                marginTop: "20px"
              }}
              endIcon={<SendOutlinedIcon />}
            >
              Submit
            </Button>
            </div>
        
    
    </form>
  );
};

export default AddBrandForm;
