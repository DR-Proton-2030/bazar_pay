import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  styled,
 
} from "@mui/material";
import TextField from "@mui/material/TextField";
import React, { useContext, useEffect, useState } from "react";
import UIContext from "../../../../../contexts/uiContext/UIContext";
import "./bannerform.css";
import { OPTIONS } from "../../../../../constants/adFor/Adfor";

import { BannerFor } from "../../../../../@types/interface/select.interface";

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


const AddBanner = () => {
  const { setDashboardHeader } = useContext(UIContext);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [advertisementDetails, setAdvertisementDetails] = useState<BannerFor>({
    options: "",
  });
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setAdvertisementDetails((prevDetails: any) => ({
      ...prevDetails,
      [name]: value,
    }));
  };
  useEffect(() => {
    setDashboardHeader("Advertisement  Details");
  }, [setDashboardHeader]);
  return (
    <div>
      <h3>Banner Details</h3>
      <Accordion defaultExpanded style={{ marginTop: "20px" }}>
        <AccordionDetails>
          <div className="details" style={{ marginTop: "20px" }}>
            <div className="fields">
              <label>Advertisement For:</label>

              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label"></InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    style={{ width: "600px" }}
                    name="options"
                    value={advertisementDetails.options}
                    onChange={handleChange}
                    disabled={hasSubmitted}
                  >
                    <MenuItem value={OPTIONS.project}>Project</MenuItem>
                    <MenuItem value={OPTIONS.builder}>Builder</MenuItem>
                    <MenuItem value={OPTIONS.others}>Others</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
            {/* for project */}
            {advertisementDetails.options === OPTIONS.project &&
            !hasSubmitted ? (
              <div className="fields">
                <label>Select Project:</label>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label"></InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      style={{ width: "600px" }}
                    >
                      <MenuItem value={"project1"}>Project1</MenuItem>
                      <MenuItem value={"Project2"}>Project2</MenuItem>
                      <MenuItem value={"Project3"}>Project3</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </div>
            ) : (
              ""
            )}

            {/* for builder */}
            {advertisementDetails.options === OPTIONS.builder &&
            !hasSubmitted ? (
              <div className="fields">
                <label>Select Builder:</label>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label"></InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      style={{ width: "600px" }}
                    >
                      <MenuItem value={"ABC builders"}>ABC builders</MenuItem>
                      <MenuItem value={"SS builders"}>SS builders</MenuItem>
                      <MenuItem value={"niks Company"}>Aniks Company</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </div>
            ) : (
              ""
            )}

            {/* in case of other companies  */}
            {advertisementDetails.options === OPTIONS.others &&
            !hasSubmitted ? (
              <div className="fields">
                <label>Redirection Link:</label>
                <TextField
                  className="input-fields"
                  variant="outlined"
                  style={{ width: "600px" }}
                />
              </div>
            ) : (
              ""
            )}

            <div className="fields">
              <label>Banner Photo:</label>
             <div className="banner-photo-btn">
             <Button
                                style={{ marginBottom: "20px" , backgroundColor: "#1DC51D"}}
                                component="label"
                                role={undefined}
                                variant="contained"
                                // tabIndex={-1}
                               
                            >
                                Upload Banner Image
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
                                    sx={{ marginBottom: "20px"}}
                                />
                            )}
             </div>
             
            </div>


            <div className="fields">
              <label>Caption for Advertisement:</label>
              <TextField
                className="input-fields"
                id="outlined-basic"
                label="if any(optional)"
                variant="outlined"
                style={{ width: "600px" }}
              />
            </div>
          </div>

          <Button variant="contained" className="submit-btn">
            SUBMIT
          </Button>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AddBanner;
