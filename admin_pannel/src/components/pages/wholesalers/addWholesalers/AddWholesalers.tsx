import React, { useCallback, useContext, useEffect, useState } from "react";
import UIContext from "../../../../contexts/uiContext/UIContext";
import {
  Backdrop,
  Button,
  Chip,
  CircularProgress,
  Paper,
  styled,
} from "@mui/material";
import Textfield from "../../../shared/textField/Textfield";
import { IWholesaler } from "../../../../@types/interface/wholesaler";
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

const AddWholesalers = () => {
  const navigate = useNavigate();
  const { setDashboardHeader } = useContext(UIContext);
  const [wholesalerDetails, setWholesalerDetails] = useState<IWholesaler>({
    wholesaler_name: "",
    owner_name: "",
    owner_phone: "",
    owner_email: "",
    trade_licensce_number: "",
    nid_number: "",
    logo: "",
    sign_board_photo: "",
    trade_licensce_photo: "",
    nid_photo: "",
    wholesaler_owner_photo: "",
    status: "",
  });
  const [logo, setLogo] = useState<File | null>(null);
  const [signBoardPhoto, setSignBoardPhoto] = useState<File | null>(null);
  const [tradeLicencePhoto, setTradeLicencePhoto] = useState<File | null>(null);
  const [nidPhoto, setNidPhoto] = useState<File | null>(null);
  const [ownerPhoto, setOwnerPhoto] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = useCallback(
    (event: any) => {
      const {
        target: { name, value },
      } = event;
      setWholesalerDetails(
        Object.assign({}, wholesalerDetails, { [name]: value })
      );
    },
    [wholesalerDetails]
  );

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("wholesalerDetails", JSON.stringify(wholesalerDetails));
      if (logo) {
        formData.append("logo", logo);
      }
      if (signBoardPhoto) {
        formData.append("sign_board_photo", signBoardPhoto);
      }
      if (tradeLicencePhoto) {
        formData.append("trade_licensce_photo", tradeLicencePhoto);
      }
      if (nidPhoto) {
        formData.append("nid_photo", nidPhoto);
      }
      if (ownerPhoto) {
        formData.append("wholesaler_owner_photo", ownerPhoto);
      }
      const response = await api.wholesaler.addWholesaler(formData);
      if (response) {
        alert("Wholesaler Added Successfully");
        navigate("/wholesalers");
        
      }
      setWholesalerDetails(wholesalerDetails);
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || "An error occurred";
      alert(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setDashboardHeader("Add  Wholesalers");
  }, [setDashboardHeader]);
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h2 style={{ fontWeight: "600", fontSize: "18px" }}>
          Add Wholesaler Details
        </h2>
        <Paper elevation={2} sx={{ marginTop: "30px" }}>
          <div className="admin-form-container">
            <Textfield
              label={"Name"}
              name={"wholesaler_name"}
              width={"65%"}
              type={"text"}
              className={"text-input-field"}
              onChange={handleChange}
            />

            <Textfield
              label={"Owner Name"}
              name={"owner_name"}
              width={"65%"}
              type={"text"}
              className={"text-input-field"}
              onChange={handleChange}
            />
            <div className="image-input-field">
              <label>Wholesaler Owner Photo:</label>
              <div style={{}}>
                {ownerPhoto ? null : (
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
                          setOwnerPhoto(file);
                        }
                      }}
                      required
                    />
                  </Button>
                )}

                {ownerPhoto && (
                  <Chip
                    label={ownerPhoto.name}
                    onDelete={() => setOwnerPhoto(null)}
                    variant="outlined"
                    sx={{ marginTop: 1, marginLeft: "20px" }}
                  />
                )}
              </div>
            </div>

            <Textfield
              label={"Contact Phone Number"}
              name={"owner_phone"}
              width={"65%"}
              type={"number"}
              className={"text-input-field"}
              onChange={handleChange}
            />
            <Textfield
              label={"Contact Email Id"}
              name={"owner_email"}
              width={"65%"}
              type={"email"}
              className={"text-input-field"}
              onChange={handleChange}
            />
            <Textfield
              label={"Trade Licence Number"}
              name={"trade_licensce_number"}
              width={"65%"}
              type={"text"}
              className={"text-input-field"}
              onChange={handleChange}
            />
            <div className="image-input-field">
              <label>Trade Licence Photo:</label>
              <div style={{}}>
                {tradeLicencePhoto ? null : (
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
                )}
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
                {nidPhoto ? null : (
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
                )}
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
                {logo ? null : (
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
                )}
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
                {signBoardPhoto ? null : (
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
                )}

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
        {loading ? (
          <Backdrop
            sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
            open={loading}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        ) : (
          <div className="submit-btn-container">
            <Button
              variant="contained"
              className="blue-btn"
              endIcon={<SendIcon />}
              type="submit"
            >
              Submit
            </Button>
          </div>
        )}
      </div>
    </form>
  );
};

export default AddWholesalers;
