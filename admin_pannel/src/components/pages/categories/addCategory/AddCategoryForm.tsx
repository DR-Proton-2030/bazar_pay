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
import { useNavigate } from "react-router-dom";
import Categories from "../Categories";

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

const AddCategoryForm = () => {
  const navigate = useNavigate()
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [categoryDetails, setCategoryDetails] = useState<ICategory>({
    name: "",
    description: "",
    logo: "",
  });
  const { setDashboardHeader } = useContext(UIContext);


  const handleRouteToCategory = () => {
    navigate("/categories")
  }
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
        navigate("/categories");
        
        
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
    setDashboardHeader("Add Category");
  }, [setDashboardHeader]);
  return (
    <form onSubmit={handleSubmit}>
       <h3 >Add Category Details</h3>
      
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
            <Button
              className="blue-btn"
              variant="contained"
              type="submit"
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



            </div>
            
         
       
        
      
    </form>

  
  );
};

export default AddCategoryForm;
