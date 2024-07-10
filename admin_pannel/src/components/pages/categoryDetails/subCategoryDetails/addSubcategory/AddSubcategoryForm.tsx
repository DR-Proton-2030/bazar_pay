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
import { ISubcategory } from "../../../../../@types/interface/subcategory.interface";
import { api } from "../../../../../utils/api";

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

const AddSubcategoryForm = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const queryParams = new URLSearchParams(window.location.search);
  const categoryId = queryParams.get("cid");
  const [subcategoryDetails, setSubcategoryDetails] = useState<ISubcategory>({
    name: "",
    description: "",
    category_object_id: categoryId as string,
    sub_category_image: "",
    
  });
  const { setDashboardHeader } = useContext(UIContext);

  const handleChange = useCallback(
    (event: any) => {
      const {
        target: { name, value },
      } = event;
      setSubcategoryDetails(
        Object.assign({}, subcategoryDetails, { [name]: value })
      );
    },
    [subcategoryDetails]
  );

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    try {
      const formData = new FormData();

      formData.append("subCategoryDetails", JSON.stringify(subcategoryDetails));
      if (uploadedFile) {
        formData.append("sub_category_image", uploadedFile);
      }
      const response = await api.subcategory.createSubcategory(formData);
      if (response) {
        alert("Subcategory created successfully");
      }
      if (!response) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      setSubcategoryDetails(subcategoryDetails);
    } catch (error) {
      console.log("Error while adding");
      alert("failed to create subcategory");
    }
  };
  useEffect(() => {
    setDashboardHeader("Add Subcategory");
  }, [setDashboardHeader]);
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Accordion defaultExpanded>
          <AccordionSummary>
            <h3>Add Subcategory Details</h3>
          </AccordionSummary>
          <AccordionDetails>
            <div className="flex-input">
              <label>Subcategory Name:</label>
              <TextField
                className="mui-textfield"
                value={subcategoryDetails.name}
                onChange={handleChange}
                name="name"
                required
              />
            </div>

            <div className="flex-input">
              <label>Subcategory Details:</label>
              <textarea
                className="textarea"
                value={subcategoryDetails.description}
                onChange={handleChange}
                name="description"
                required
              ></textarea>
            </div>

            <div className="flex-input">
              <label>Subcategory Logo:</label>
              <div className="flex-btn-chip">
                <Button
                  className="blue-btn"
                  component="label"
                  role={undefined}
                  variant="contained"
                  sx={{ fontSize: "10px" }}
                  endIcon={<CloudUploadIcon />}
                >
                  Upload Logo
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

export default AddSubcategoryForm;
