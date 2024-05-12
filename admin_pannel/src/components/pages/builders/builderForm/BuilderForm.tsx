import React, { useCallback, useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { api } from "../../../../utils/api";
import { IBuilder } from "../../../../@types/interface/Builder.interface";
import { defaultBuilderForm } from "../../../../defaultValue/builderForm/BuilderForm";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import { Chip } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

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

const BuilderForm = () => {
  const [builderDetails, setBuilderDetails] =
    useState<IBuilder>(defaultBuilderForm);

  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarType, setSnackbarType] = useState<"success" | "error">(
    "success"
  );
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const {
        target: { name, value },
      } = event;
      setBuilderDetails(Object.assign({}, builderDetails, { [name]: value }));
    },
    [builderDetails]
  );

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("builderDetails", JSON.stringify(builderDetails));
      if (uploadedFile) {
        formData.append("logo", uploadedFile);
      }
      const response = await api.builder.addBuilder(formData);
      if (response) {
        console.log("ADDED__RESPONSE---->", response);
        // alert("Data submitted successfully!");
        setSnackbarOpen(true);
        setSnackbarType("success");
        setSnackbarMessage("Data submitted successfully!");
      }

      if (!response) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      setBuilderDetails(defaultBuilderForm);
    } catch (error) {
      console.log("Error while adding");
      setSnackbarOpen(true);
      setSnackbarType("error");
      setSnackbarMessage("Error while submitting data");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <MuiAlert
            elevation={6}
            variant="filled"
            onClose={handleCloseSnackbar}
            severity={snackbarType}
          >
            {snackbarMessage}
          </MuiAlert>
        </Snackbar>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Wholesaler Details
          </AccordionSummary>
          <AccordionDetails>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              sx={{ width: 400, marginRight: 2, marginBottom: 2 }}
              value={builderDetails.builder_name}
              onChange={handleChange}
              name="builder_name"
              required
            />
            <TextField
              id="outlined-basic"
              label="Address"
              variant="outlined"
              sx={{ width: 400, marginRight: 2 }}
              value={builderDetails.cin_number}
              onChange={handleChange}
              name="cin_number"
              required
            />
            <TextField
              id="outlined-basic"
              label="Phone no."
              variant="outlined"
              sx={{ width: 400, marginRight: 2 }}
              value={builderDetails.GST_number}
              onChange={handleChange}
              name="GST_number"
              required
            />
           
            {/* <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <Button
                style={{
                  marginTop: 20,
                  marginBottom: 10,
                  backgroundColor: "#49BB43",
                }}
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
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
            </div> */}
          </AccordionDetails>
        </Accordion>
        {/* <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            Contact Person Details
          </AccordionSummary>
          <AccordionDetails>
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              sx={{ width: 400, marginRight: 2, marginBottom: 2 }}
              value={builderDetails.contact_first_name}
              onChange={handleChange}
              name="contact_first_name"
              required
            />
            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              sx={{ width: 400, marginRight: 2 }}
              value={builderDetails.contact_last_name}
              onChange={handleChange}
              name="contact_last_name"
              required
            />
            <TextField
              id="outlined-basic"
              label="Phone No."
              variant="outlined"
              sx={{ width: 400, marginRight: 2 }}
              value={builderDetails.contact_phone_number}
              onChange={handleChange}
              name="contact_phone_number"
              required
            />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              sx={{ width: 400, marginRight: 2 }}
              value={builderDetails.email}
              onChange={handleChange}
              name="email"
              required
            />
          </AccordionDetails>
        </Accordion> */}
        <Button
          variant="contained"
          className="btn"
          type="submit"
          style={{
            marginTop: 2,
            backgroundColor: "#49BB43",
            fontFamily: "Railway, sans-serif",
          }}
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default BuilderForm;
