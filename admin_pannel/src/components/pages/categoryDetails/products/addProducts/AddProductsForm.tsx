// import React, { useContext, useEffect } from 'react'
// import UIContext from '../../../../../contexts/uiContext/UIContext'

// const AddProductsForm = () => {

//     const {setDashboardHeader} = useContext(UIContext)
//     useEffect(() => {
//         setDashboardHeader("Add Product Details")
//     }, [setDashboardHeader])
//   return (
//     <div>
        
//     </div>
//   )
// }

// export default AddProductsForm

import React, { useCallback, useContext, useEffect, useState } from "react";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Chip,
  TextField,
  TextareaAutosize,
  styled,
} from "@mui/material";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import UIContext from "../../../../../contexts/uiContext/UIContext";
import { api } from "../../../../../utils/api";
import { ICategory } from "../../../../../@types/interface/category.interface";

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

const AddProductsForm = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [categoryDetails, setCategoryDetails] = useState<ICategory>({
    name: "",
    description: "",
    logo: "",
  });
  const { setDashboardHeader } = useContext(UIContext);

  const handleChange = useCallback(
    (event: any) => {
      const {
        target: { name, value },
      } = event;
      setCategoryDetails(Object.assign({}, categoryDetails, { [name]: value }));
    },
    [categoryDetails]
  );

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("categoryDetails", JSON.stringify(categoryDetails));
      if (uploadedFile) {
        formData.append("logo", uploadedFile);
      }
      const response = await api.category.createCategory(formData);
      if (response) {
        alert("category created successfully");
      }
      if (!response) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      setCategoryDetails(categoryDetails);
    } catch (error) {
      console.log("Error while adding");
      alert("failed to create category");
    }
  };
  useEffect(() => {
    setDashboardHeader("Add Products");
  }, [setDashboardHeader]);
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Accordion defaultExpanded>
          <AccordionSummary>
            <h3>Add Product Details</h3>
          </AccordionSummary>
          <AccordionDetails>
            <div className="flex-input">
              <label>Product Name:</label>
              <TextField
                className="mui-textfield"
                value={categoryDetails.name}
                onChange={handleChange}
                name="name"
                required
              />
            </div>

            <div className="flex-input">
              <label>Product Details:</label>
              <textarea
                className="textarea"
                value={categoryDetails.description}
                onChange={handleChange}
                name="description"
                required
              ></textarea>
            </div>

            <div className="flex-input">
              <label>Product Image:</label>
              <div className="flex-btn-chip">
              <Button
                className="blue-btn"
                component="label"
                role={undefined}
                variant="contained"
                sx={{ fontSize: "10px" }}
                endIcon={<CloudUploadIcon />}
              >
                Upload Image
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

            <Button
              className="blue-btn"
              variant="contained"
              type="submit"
              sx={{
                fontFamily: "poppins, sans-serif",
                fontWeight: "500",
                fontSize: "13px",
              }}
              endIcon={<SendOutlinedIcon />}
            >
              Submit
            </Button>
          </AccordionDetails>
        </Accordion>
      </div>
    </form>
  );
};

export default AddProductsForm;
