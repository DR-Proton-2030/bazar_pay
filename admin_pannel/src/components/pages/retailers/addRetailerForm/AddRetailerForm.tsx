import {
  Backdrop,
  Button,
  Chip,
  CircularProgress,
  Paper,
  styled,
} from "@mui/material";
import React, { useCallback, useContext, useEffect, useState } from "react";
import Textfield from "../../../shared/textField/Textfield";
import UIContext from "../../../../contexts/uiContext/UIContext";
import { IRetailers } from "../../../../@types/interface/retailer.interface";
import SendIcon from "@mui/icons-material/Send";
import UploadIcon from "@mui/icons-material/Upload";
import { api } from "../../../../utils/api";
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

const AddRetailerForm = () => {
  const { setDashboardHeader } = useContext(UIContext);
  const navigate = useNavigate();
  const [logo, setLogo] = useState<File | null>(null);
  const [signBoardPhoto, setSignBoardPhoto] = useState<File | null>(null);
  const [tradeLicencePhoto, setTradeLicencePhoto] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [nidPhoto, setNidPhoto] = useState<File | null>(null);
  const [retailerOwnerPhoto, setRetailerOwnerPhoto] = useState<File | null>(
    null
  );
  const [retailerDetails, setRetailerDetails] = useState<IRetailers>({
    retailer_name: "",
    contact_name: "",
    contact_phone: "",
    contact_email: "",
    trade_license_number: "",
    nid_number: "",
    logo: "",
    sign_board_photo: "",
    retailer_owner_photo: "",
    trade_license_photo: "",
    nid_photo: "",
  });

  const handleChange = useCallback(
    (event: any) => {
      const {
        target: { name, value },
      } = event;
      setRetailerDetails(Object.assign({}, retailerDetails, { [name]: value }));
    },
    [retailerDetails]
  );

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("retailerDetails", JSON.stringify(retailerDetails));
      if (logo) {
        formData.append("logo", logo);
      }
      if (signBoardPhoto) {
        formData.append("sign_board_photo", signBoardPhoto);
      }
      if (tradeLicencePhoto) {
        formData.append("trade_license_photo", tradeLicencePhoto);
      }
      if (nidPhoto) {
        formData.append("nid_photo", nidPhoto);
      }
      if (retailerOwnerPhoto) {
        formData.append("retailer_owner_photo", retailerOwnerPhoto);
      }
      try {
        setLoading(true);
        const response = await api.retailer.createRetailer(formData);
        if (response) {
          alert("Retailer Added Successfully");
          navigate("/retailers");
        }
      } catch (error: any) {
        const errorMessage =
          error.response?.data?.message || "An error occurred";
        alert(errorMessage);
      } finally {
        setLoading(false);
      }

      setRetailerDetails(retailerDetails);
    } catch (error) {
      console.log("Error while adding");
      alert("failed to create wholesaler");
    }
  };

  useEffect(() => {
    setDashboardHeader("Add Retailer");
  }, [setDashboardHeader]);
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h2 style={{ fontWeight: "600", fontSize: "18px" }}>
          Add Retailer Details
        </h2>
        <Paper elevation={2} sx={{ marginTop: "30px" }}>
          <div className="admin-form-container">
            <Textfield
              label={"Retailer Name"}
              name={"retailer_name"}
              width={"65%"}
              type={"text"}
              className={"text-input-field"}
              onChange={handleChange}
            />

            <div className="image-input-field">
              <label>Retailer Owner Photo:</label>
              <div style={{}}>
                <Button
                  style={{
                    marginTop: 20,
                    marginBottom: 10,
                    backgroundColor: "#49BB43",
                  }}
                  component="label"
                  role={undefined}
                  variant="contained"
                  tabIndex={10}
                  className="btn"
                  endIcon={<UploadIcon />}
                >
                  Upload Owner Photo
                  <VisuallyHiddenInput
                    type="file"
                    onChange={(event) => {
                      const file = event.target.files?.[0];
                      if (file) {
                        setRetailerOwnerPhoto(file);
                      }
                    }}
                    required
                  />
                </Button>
                {retailerOwnerPhoto && (
                  <Chip
                    label={retailerOwnerPhoto.name}
                    onDelete={() => setRetailerOwnerPhoto(null)}
                    variant="outlined"
                    sx={{ marginTop: 1, marginLeft: "20px" }}
                  />
                )}
              </div>
            </div>
            <Textfield
              label={"Contact Name"}
              name={"contact_name"}
              width={"65%"}
              type={"text"}
              className={"text-input-field"}
              onChange={handleChange}
            />

            <Textfield
              label={"Contact Phone"}
              name={"contact_phone"}
              width={"65%"}
              type={"number"}
              className={"text-input-field"}
              onChange={handleChange}
            />
            <Textfield
              label={"Contact Email Id"}
              name={"contact_email"}
              width={"65%"}
              type={"email"}
              className={"text-input-field"}
              onChange={handleChange}
            />

            <Textfield
              label={"Trade License Number"}
              name={"trade_license_number"}
              width={"65%"}
              type={"text"}
              className={"text-input-field"}
              onChange={handleChange}
            />

            <div className="image-input-field">
              <label>Trade License Photo:</label>
              <div style={{}}>
                <Button
                  style={{
                    marginTop: 20,
                    marginBottom: 10,
                    backgroundColor: "#49BB43",
                  }}
                  component="label"
                  role={undefined}
                  variant="contained"
                  tabIndex={10}
                  className="btn"
                  endIcon={<UploadIcon />}
                >
                  Upload Trade Licence Photo
                  <VisuallyHiddenInput
                    type="file"
                    onChange={(event) => {
                      const file = event.target.files?.[0];
                      if (file) {
                        setTradeLicencePhoto(file);
                      }
                    }}
                    required
                  />
                </Button>
                {tradeLicencePhoto && (
                  <Chip
                    label={tradeLicencePhoto.name}
                    onDelete={() => setTradeLicencePhoto(null)}
                    variant="outlined"
                    sx={{ marginTop: 1, marginLeft: "20px" }}
                  />
                )}
              </div>
            </div>

            <Textfield
              label={"NID Number"}
              name={"nid_number"}
              width={"65%"}
              type={"text"}
              className={"text-input-field"}
              onChange={handleChange}
            />
            <div className="image-input-field">
              <label>NID Photo:</label>
              <div style={{}}>
                <Button
                  style={{
                    marginTop: 20,
                    marginBottom: 10,
                    backgroundColor: "#49BB43",
                  }}
                  component="label"
                  role={undefined}
                  variant="contained"
                  tabIndex={10}
                  className="btn"
                  endIcon={<UploadIcon />}
                >
                  Upload NID Photo
                  <VisuallyHiddenInput
                    type="file"
                    onChange={(event) => {
                      const file = event.target.files?.[0];
                      if (file) {
                        setNidPhoto(file);
                      }
                    }}
                    required
                  />
                </Button>
                {nidPhoto && (
                  <Chip
                    label={nidPhoto.name}
                    onDelete={() => setNidPhoto(null)}
                    variant="outlined"
                    sx={{ marginTop: 1, marginLeft: "20px" }}
                  />
                )}
              </div>
            </div>

            <div className="image-input-field">
              <label>Logo:</label>
              <div style={{}}>
                <Button
                  style={{
                    marginTop: 20,
                    marginBottom: 10,
                    backgroundColor: "#49BB43",
                  }}
                  component="label"
                  role={undefined}
                  variant="contained"
                  tabIndex={10}
                  className="btn"
                  endIcon={<UploadIcon />}
                >
                  Upload Logo
                  <VisuallyHiddenInput
                    type="file"
                    onChange={(event) => {
                      const file = event.target.files?.[0];
                      if (file) {
                        setLogo(file);
                      }
                    }}
                    required
                  />
                </Button>
                {logo && (
                  <Chip
                    label={logo.name}
                    onDelete={() => setLogo(null)}
                    variant="outlined"
                    sx={{ marginTop: 1, marginLeft: "20px" }}
                  />
                )}
              </div>
            </div>

            <div className="image-input-field">
              <label>Sign Board Photo:</label>
              <div style={{}}>
                <Button
                  style={{
                    marginTop: 20,
                    marginBottom: 10,
                    backgroundColor: "#49BB43",
                  }}
                  component="label"
                  role={undefined}
                  variant="contained"
                  tabIndex={10}
                  className="btn"
                  endIcon={<UploadIcon />}
                >
                  Upload Sign Board Photo
                  <VisuallyHiddenInput
                    type="file"
                    onChange={(event) => {
                      const file = event.target.files?.[0];
                      if (file) {
                        setSignBoardPhoto(file);
                      }
                    }}
                    required
                  />
                </Button>
                {signBoardPhoto && (
                  <Chip
                    label={signBoardPhoto.name}
                    onDelete={() => setSignBoardPhoto(null)}
                    variant="outlined"
                    sx={{ marginTop: 1, marginLeft: "20px" }}
                  />
                )}
              </div>
            </div>
          </div>
        </Paper>
        <div className="submit-btn-container">
          {loading ? (
            <Backdrop
              sx={(theme) => ({
                color: "#fff",
                zIndex: theme.zIndex.drawer + 1,
              })}
              open={loading}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
          ) : (
            <Button
              variant="contained"
              className="blue-btn"
              endIcon={<SendIcon />}
              type="submit"
            >
              Submit
            </Button>
          )}
        </div>
      </div>
    </form>
  );
};

export default AddRetailerForm;
