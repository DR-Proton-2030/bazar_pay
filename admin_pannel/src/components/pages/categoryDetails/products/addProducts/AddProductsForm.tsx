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
  Autocomplete,
  Button,
  Chip,
  Paper,
  Stack,
  TextField,
  TextareaAutosize,
  styled,
} from "@mui/material";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import UIContext from "../../../../../contexts/uiContext/UIContext";
import { api } from "../../../../../utils/api";
import { ICategory } from "../../../../../@types/interface/category.interface";
import { IProduct } from "../../../../../@types/interface/product.interface";
import { IWholesaler } from "../../../../../@types/interface/wholesaler.interface";
import { IProducts } from "../../../../../@types/interface/products.interface";
import { getProductbyId } from "../../../../../utils/api/productsByid/getProductById";
import axios from "axios";
import BrandAutoComplete from "../../../../shared/brandAutoField/BrandAutoComplete";

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
  const [brandData, setBrandData] = useState([]);
  const [brandId, setBrandId] = useState("");
  const [brandName, setBrandName] = useState("");
  const [state, setState] = useState<string | null>(null);
  const [data, setData] = useState(null);
  const queryParams = new URLSearchParams(window.location.search);
  //   const brandId = queryParams.get("bid");
  const categoryId = queryParams.get("cid");
  const subcategoryId = queryParams.get("scid");

  const states = [
    "Andhra Pradesh",
    "Assam",
    "Bihar",
    "Chattisgarh",
    "Haryana",
    "Gujrat",
    "Kerala",
    "Maharashtra",
    "Tamilnadu",
    "Telangana",
    "Uttarakhand",
    "West Bengal",
  ];

  const [productDetails, setProductDetails] = useState<IProducts>({
    product_name: "",
    unit: "",
    product_description: "",
    product_image: "",
    product_status: "",
    category_object_id: categoryId as string,
    subcategory_object_id: subcategoryId as string,
    brand_object_id: "",
  });
  const { setDashboardHeader } = useContext(UIContext);

  const handleChange = useCallback(
    (event: any) => {
      const {
        target: { name, value },
      } = event;
      setProductDetails(Object.assign({}, productDetails, { [name]: value }));
    },
    [productDetails]
  );

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("productDetails", JSON.stringify(productDetails));
      if (uploadedFile) {
        formData.append("product_image", uploadedFile);
      }
      const response = await api.productbyId.createProductById(formData);
      if (response) {
        alert("Product created successfully");
      }
      if (!response) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      setProductDetails(productDetails);
    } catch (error) {
      console.log("Error while adding");
      alert("failed to create product");
    }
  };

  useEffect(() => {
    getProductbyId({});
  }, [getProductbyId]);

  useEffect(() => {
    setDashboardHeader("Add Products");
  }, [setDashboardHeader]);
  return (
    <form onSubmit={handleSubmit}>
       <h3>Add Product Details</h3>
      
        <Paper sx={{ marginTop: "20px", padding: "30px" }} elevation={3}>
         

          <div className="flex-input">
            <label>Product Name:</label>
            <TextField
              className="mui-textfield"
              value={productDetails.product_name}
              onChange={handleChange}
              name="product_name"
              required
            />
          </div>

          <div className="flex-input">
            <label>Product Details:</label>
            <textarea
              className="textarea"
              value={productDetails.product_description}
              onChange={handleChange}
              name="product_description"
              required
            ></textarea>
          </div>

          <div className="flex-input">
            <label>Unit:</label>
            <TextField
              className="mui-textfield"
              value={productDetails.unit}
              onChange={handleChange}
              name="unit"
              required
            />
          </div>
          <div className="flex-input">
            <label>Status:</label>
            <TextField
              className="mui-textfield"
              value={productDetails.product_status}
              onChange={handleChange}
              name="product_status"
              required
            />
          </div>

          <div className="flex-input">
            <label>Select Brand:</label>
            <BrandAutoComplete />
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
          </Paper>
          <div style={{display: "flex", justifyContent: "right", alignItems: "right"}}>
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

export default AddProductsForm;
