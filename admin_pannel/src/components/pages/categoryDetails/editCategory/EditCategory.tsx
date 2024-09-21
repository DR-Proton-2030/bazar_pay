import React, { useCallback, useContext, useEffect, useState } from "react";
import UIContext from "../../../../contexts/uiContext/UIContext";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Chip,
  Paper,
  TextField,
  TextareaAutosize,
  styled,
} from "@mui/material";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { ICategory } from "../../../../@types/interface/category.interface";
import { api } from "../../../../utils/api";

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

export const EditCategory = ({cat_id}:any) => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [loading, setLoding] = useState<boolean>(false);
  const [categoryDetails, setCategoryDetails] = useState<ICategory>({
    name: "",
    description: "",
    logo: "",
  });
  

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
    setLoding(true)

    try {
      const formData = new FormData();
      formData.append("categoryDetails", JSON.stringify(categoryDetails));
      formData.append("categoryId", cat_id);
      if (uploadedFile) {
        formData.append("logo", uploadedFile);
      }
      const response = await api.category.editCategory(formData);
      if (response) {
        alert("category created successfully");
      }
      if (!response) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      setCategoryDetails(categoryDetails);
      setLoding(false)

    } catch (error) {
      console.log("Error while adding");
      setLoding(false)
      alert("failed to create category");

    }
  };

  const fetchCategoryDetails = async () => {
  try {
    const filter ={
        cid: cat_id,
      };
    
    const response = await api.category.getCategoryById(filter);
    if (response) {
      setCategoryDetails(response);
    }
  } catch (error) {
    console.log("Error fetching category details", error);
    setLoding(false)
    alert("Failed to fetch category details");
  }
};
  useEffect(() => {
    fetchCategoryDetails()
  }, [cat_id])
  
  return (
    <div >
       <h3 >Edit Category Details</h3>
      
        <Paper sx={{ marginTop: "20px", padding: "30px"}} elevation={3}>
            <div className="flex-input ">
              <label>Category Name:</label>
              <TextField
                className="mui-textfield"
                value={categoryDetails.name}
                onChange={handleChange}
                name="name"
                required
              />
            </div>

            <div className="flex-input">
              <label>Category Details:</label>
              <textarea
                className="textarea"
                value={categoryDetails.description}
                onChange={handleChange}
                name="description"
                required
              ></textarea>
            </div>

            <div className="flex-input">
              <label>Category Logo:</label>
              <div className="flex-btn-chip">
              <Button
                className="blue-btn"
                component="label"
                role={undefined}
                variant="contained"
                sx={{ fontSize: "10px" }}
                endIcon={<CloudUploadIcon />}
              >
                Upload Photo
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
            <div style={{display: "flex", justifyContent: "right", alignItems: "right"}}>
                {
                    loading?
                    <Button
                    className="blue-btn"
                    variant="contained"
                    sx={{
                      fontFamily: "poppins, sans-serif",
                      fontWeight: "500",
                      fontSize: "13px",
                      marginTop: "20px"
                    }}
                  >
                    Loading...
                  </Button>:
                       <Button
                       className="blue-btn"
                       variant="contained"
                      onClick={handleSubmit}
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
                }
            </div>
    </div>
  );
};

