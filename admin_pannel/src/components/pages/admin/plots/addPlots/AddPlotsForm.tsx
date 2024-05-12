import React, { useCallback, useContext, useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { styled } from "@mui/material/styles";
import { Chip } from "@mui/material";
import { IAddplots } from "../../../../../@types/interface/Builder.interface";
import { api } from "../../../../../utils/api";
import BuilderContext from "../../../../../contexts/builderContext/BuilderContext";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import UIContext from "../../../../../contexts/uiContext/UIContext";
import { useNavigate } from "react-router-dom";
import { IProject } from "../../../../../@types/interface/Projects";
import { defaultProjectForm } from "../../../../../defaultValue/projectForm/ProjectForm";

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

const AddPlotsForm = () => {
  const navigate = useNavigate();
  const { setDashboardHeader } = useContext(UIContext);
  const { builderDetails } = useContext(BuilderContext);
  const [projectDetails, setProjectDetails] =
    useState<IProject>(defaultProjectForm);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarType, setSnackbarType] = useState<"success" | "error">(
    "success"
  );
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

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

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      const builder_object_id = builderDetails?._id || "";
      const updatedProjectDetails = { ...projectDetails, builder_object_id };
      formData.append("projectDetails", JSON.stringify(updatedProjectDetails));
      if (uploadedFile) {
        formData.append("layout", uploadedFile);
      }
      const response = await api.project.addPlot(formData);
      if (response) {
        console.log("ADDED__RESPONSE---->", response);
        alert("Data submitted successfully!");
        setSnackbarOpen(true);
        setSnackbarType("success");
        setSnackbarMessage("Data submitted successfully!");
        // Reset form fields
        setProjectDetails(defaultProjectForm);
        setUploadedFile(null);
        navigate(`/admin/select-plots?pid=${response._id}`);
      } else {
        throw new Error(`API request failed with status ${response.status}`);
      }
    } catch (error) {
      console.error("Error while adding", error);
      // alert("Error while submitting data");
      setSnackbarOpen(true);
      setSnackbarType("error");
      setSnackbarMessage("Error while submitting data");
    }
  };

  useEffect(() => {
    setDashboardHeader("Add Plots");
  }, [setDashboardHeader]);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <b style={{ fontSize: "20px" }}>Project Details</b>
        <br />
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
        <div>
          <Accordion
            defaultExpanded
            style={{ display: "block", marginTop: "20px" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            ></AccordionSummary>
            <AccordionDetails>
              <div
                style={{
                  display: "flex",
                  alignItems: "left",
                  justifyContent: "space-between",
                }}
              >
                <label style={{ fontSize: "18px", marginLeft: "40px" }}>
                  Project Name:
                </label>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  sx={{
                    width: "60%",
                    marginRight: "40px",
                    marginBottom: "10px",
                  }}
                  value={projectDetails.project_name}
                  onChange={(event) =>
                    setProjectDetails({
                      ...projectDetails,
                      project_name: event.target.value,
                    })
                  }
                  required
                />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "left",
                  justifyContent: "space-between",
                }}
              >
                <label style={{ fontSize: "18px", marginLeft: "40px" }}>
                  Description:
                </label>
                <textarea
                  style={{
                    maxWidth: "60%",
                    minWidth: "60%",
                    maxHeight: "150px",
                    marginRight: "40px",
                    marginBottom: "10px",
                    padding: "5px",
                    fontSize: "18px",
                    outline: "1px",
                  }}
                  value={projectDetails.description}
                  onChange={(event) =>
                    setProjectDetails({
                      ...projectDetails,
                      description: event.target.value,
                    })
                  }
                  required
                />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "left",
                  justifyContent: "space-between",
                }}
              >
                <label style={{ fontSize: "18px", marginLeft: "40px" }}>
                  Number of Plots:
                </label>
                <TextField
                  id="outlined-basic"
                  type="number"
                  variant="outlined"
                  sx={{
                    width: "60%",
                    marginRight: "40px",
                    marginLeft: "20px",
                    marginBottom: "10px",
                  }}
                  value={projectDetails.number_of_plots}
                  onChange={(event) => {
                    const value = event.target.value;
                    setProjectDetails({
                      ...projectDetails,
                      number_of_plots: value === "" ? 0 : Number(value),
                    });
                  }}
                  required
                />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "left",
                  justifyContent: "space-between",
                }}
              >
                <label style={{ fontSize: "18px", marginLeft: "40px" }}>
                  Price/sq:
                </label>
                <TextField
                  id="outlined-basic"
                  type="number"
                  variant="outlined"
                  sx={{
                    width: "60%",
                    marginRight: "40px",
                    marginLeft: "20px",
                    marginBottom: "10px",
                  }}
                  value={projectDetails.price_per_sq}
                  onChange={(event) => {
                    const value = event.target.value;
                    setProjectDetails({
                      ...projectDetails,
                      price_per_sq: value === "" ? 0 : Number(value),
                    });
                  }}
                  required
                />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "left",
                  justifyContent: "space-between",
                }}
              >
                <label style={{ fontSize: "18px", marginLeft: "40px" }}>
                  Total sq.ft:
                </label>
                <TextField
                  id="outlined-basic"
                  type="number"
                  variant="outlined"
                  sx={{
                    width: "60%",
                    marginRight: "40px",
                    marginLeft: "20px",
                    marginBottom: "10px",
                  }}
                  // value={totalSqFeet === null ? "" : totalSqFeet}
                  value={projectDetails.total_sq_feet}
                  // onChange={(event) => {
                  //   const value = event.target.value;
                  //   setTotalSqFeet(value === "" ? null : Number(value));
                  // }}
                  onChange={(event) => {
                    const value = event.target.value;
                    setProjectDetails({
                      ...projectDetails,
                      total_sq_feet: value === "" ? 0 : Number(value),
                    });
                  }}
                  required
                />
              </div>
            </AccordionDetails>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                gap: "40px",
              }}
            >
              <Button
                style={{
                  marginTop: 20,
                  marginBottom: 20,
                  marginLeft: 40,
                  backgroundColor: "#49BB43",
                  fontFamily: "Railway, sans-serif",
                }}
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
              >
                Upload Plot Image
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
          </Accordion>
        </div>
        <br />
        <b style={{ fontSize: "18px" }}>Address Details</b>
        <Accordion
          defaultExpanded
          style={{ display: "block", marginTop: "20px" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          ></AccordionSummary>
          <AccordionDetails>
            {/* Input fields for address details can be added here */}
            <div
              style={{
                display: "flex",
                alignItems: "left",
                justifyContent: "space-between",
              }}
            >
              <label style={{ fontSize: "18px", marginLeft: "40px" }}>
                Address:
              </label>
              <textarea
                style={{
                  maxWidth: "615px",
                  minWidth: "615px",
                  maxHeight: "150px",
                  marginRight: "40px",
                  marginBottom: "10px",
                  padding: "5px",
                  fontSize: "18px",
                  outline: "1px",
                }}
                value={projectDetails.formatted_address}
                onChange={(event) => {
                  const value = event.target.value;
                  setProjectDetails({
                    ...projectDetails,
                    formatted_address: value,
                  });
                }}
                required
              />
            </div>
            {/* <div
              style={{
                display: "flex",
                alignItems: "left",
                justifyContent: "space-between",
              }}
            >
              <label style={{ fontSize: "20px", marginLeft: "40px" }}>
                PIN Code:
              </label>
              <TextField
                id="outlined-basic"
                type="number"
                variant="outlined"
                sx={{
                  width: "700px",
                  marginRight: "40px",
                  marginBottom: "10px",
                }}
                value={projectDetails}
                onChange={(event) => setPinCode(event.target.value)}
                required
              />
            </div> */}
            <div
              style={{
                display: "flex",
                alignItems: "left",
                justifyContent: "space-between",
              }}
            >
              <label style={{ fontSize: "18px", marginLeft: "40px" }}>
                State:
              </label>
              {/* <Stack>
                <Autocomplete
                  sx={{
                    width: "700px",
                    marginRight: "40px",
                    marginBottom: "10px",
                  }}
                  options={states}
                  renderInput={(params) => <TextField {...params} required />}
                  value={projectDetails.state}
                  onChange={(event: any, newValue: string | null) =>
                    setSelectedState(newValue)
                  }
                  freeSolo
                />
              </Stack> */}
              <Stack>
                <Autocomplete
                  sx={{
                    width: "615px",
                    marginRight: "40px",
                    marginBottom: "10px",
                  }}
                  options={states}
                  renderInput={(params) => <TextField {...params} required />}
                  value={projectDetails.state}
                  onChange={(event: any, newValue: string | null) =>
                    setProjectDetails({
                      ...projectDetails,
                      state: newValue || "",
                    })
                  }
                  freeSolo
                />
              </Stack>
            </div>
          </AccordionDetails>
        </Accordion>
        <Button
          className="button"
          variant="contained"
          style={{ width: "100px", padding: "5px", backgroundColor: "#49BB43" }}
          type="submit"
          sx={{
            marginTop: 2,
            
            fontFamily: "Railway, sans-serif",
          }}
        >
          Continue
        </Button>
      </div>
    </form>
  );
};

export default AddPlotsForm;
