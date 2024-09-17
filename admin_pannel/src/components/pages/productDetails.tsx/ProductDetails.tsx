import React, { useCallback, useContext, useEffect, useState } from 'react'
import UIContext from '../../../contexts/uiContext/UIContext';
import { Button, Chip, FormControl, InputLabel, MenuItem, Paper, Select, styled, TextField } from '@mui/material';
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { api } from '../../../utils/api';
import { IProducts } from '../../../@types/interface/products.interface';
import { getProductbyId } from '../../../utils/api/productsByid/getProductById';
import BrandAutoComplete from '../../shared/brandAutoField/BrandAutoComplete';

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


const ProductDetails_Form = () => {
  const { setDashboardHeader } = useContext(UIContext);

  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const queryParams = new URLSearchParams(window.location.search);
  const productId = queryParams.get("pid");

  const [productDetails, setProductDetails] = useState<any>({
    product_name: "",
    unit: "",
    product_description: "",
    product_image: "",
    product_status: "",
    profit_percentage:0
  });


  const handleChange = useCallback(
    (event: any) => {
      const {
        target: { name, value },
      } = event;
      setProductDetails((prevDetails: any) => ({
        ...prevDetails,
        [name]: value,
      }));
    },
    []
  );

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    try {
     const filter={
      productId:productId,
      profit_percentage:productDetails?.profit_percentage
     }
      const response = await api.productbyId.updateProduct(filter);
      if (response) {
        alert("Product created successfully");
      } else {
        throw new Error(`API request failed with status ${response.status}`);
      }
    } catch (error) {
      console.log("Error while adding");
      alert("Failed to create product");
    }
  };

  const getProductDetails = async () => {
    try {
      const filter = {
        id: productId
      }
      const result = await api.product.getProductDetail(filter)
      console.log("================================>product details", result);
      setProductDetails(result)
    } catch (error) {

    }
  }
  useEffect(() => {
    getProductDetails()

  }, []);

  useEffect(() => {
    setDashboardHeader("Add Products");
  }, [setDashboardHeader]);

  const handleBrandSelect = (brandId: string) => {
    setProductDetails((prevDetails: any) => ({
      ...prevDetails,
    }));
  };
  useEffect(() => {
    setDashboardHeader("Product Detail");
  }, [setDashboardHeader]);

  return (
    <form
    onSubmit={handleSubmit}
    >
      <h3 >Product Details</h3>

      <Paper sx={{ marginTop: "20px", padding: "30px" }} elevation={3}>




        <div className="flex-input ">

          <img src={productDetails?.product_image} style={{ height: 300, width: 300, background: "#c2f0c2",borderRadius:20 }} />
          {/* <div className="flex-input " style={{marginRight:100,width:"50%"}}>
            <label>Product Image:</label>
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
            </div> */}
          <br />
         
        </div>
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
          <label>Profit Percentage:</label>
          <TextField
            className="mui-textfield"
            value={productDetails.profit_percentage}
            onChange={handleChange}
            name="profit_percentage"
            required
          />
        </div>
        <div className="flex-input">
          <label>Status:</label>
          <FormControl className="mui-textfield" fullWidth required>
            <InputLabel>Status</InputLabel>
            <Select
              value={productDetails.product_status}
              onChange={handleChange}
              name="product_status"
              label="Status"
            >
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Pending">Pending</MenuItem>
            </Select>
          </FormControl>
        </div>

        {/* <div className="flex-input">
          <label>Select Brand:</label>
          <BrandAutoComplete setBrandId={handleBrandSelect} />
        </div> */}


      </Paper>
      <div style={{ display: "flex", justifyContent: "right", alignItems: "right" }}>
        <Button
          className="blue-btn"
          variant="contained"
          type="submit"
          sx={{
            fontFamily: "poppins, sans-serif",
            fontWeight: "500",
            fontSize: "13px",
            marginTop: "20px",
          }}
          endIcon={<SendOutlinedIcon />}
        >
          Update Profit Percentage
        </Button>
      </div>
    </form>
  )
}

export default ProductDetails_Form