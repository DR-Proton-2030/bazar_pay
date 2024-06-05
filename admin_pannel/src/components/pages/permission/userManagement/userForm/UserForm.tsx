import React, { useContext, useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { api } from "../../../../../utils/api";
import {
  Box,
  Dialog,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import UIContext from "../../../../../contexts/uiContext/UIContext";
import { hover } from "@testing-library/user-event/dist/hover";
import { IUser } from "../../../../../@types/interface/user.interface";

import { ROLES } from "../../../../../constants/roles/Roles";
import { getBuilderByID } from "../../../../../utils/api/builders/getBuilderByID";


const UserForm = () => {
  const { setDashboardHeader } = useContext(UIContext);
  
  const [selectedBuilderName, setSelectedBuilderName] = useState<string | null>(
    null
  );
  const [selectedBuilderId, setSelectedBuilderId] = useState<string | null>(
    null
  );
  const [builderOptions, setBuilderOptions] = useState<
    { id: string; name: string }[]
  >([]);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isPasswordDialogOpen, setIsPasswordDialogOpen] = useState(false);
  const [otp, setOtp] = useState("");
  const [state, setState] = useState<string | null>(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarType, setSnackbarType] = useState<"success" | "error">(
    "success"
  );
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [otpCheck, setOtpCheck] = useState("");
  const [selectedRole, setSelectedRole] = useState({
    role: "",
  });
  const [hasSubmitted, setHasSubmitted] = useState(false);
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
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setSelectedRole((prevDetails: any) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const fetchBuilderList = async () => {
    try {
      const response = await api.permission.getBuilderList({});
      if (response) {
        const data = await response;
        setBuilderOptions(
          data.map((item: { _id: string; builder_name: string }) => ({
            id: item._id,
            name: item.builder_name,
           
          }))
        );
      } else {
        console.error("Failed to fetch builder list");
      }
    } catch (error) {
      console.error("Error fetching builder list:", error);
    }
  };

  const handleBuilderChange = (
    event: React.ChangeEvent<{}>,
    newValue: string | null
  ) => {
    const selectedBuilder = builderOptions.find(
      (option) => option.name === newValue
    );
    setSelectedBuilderName(newValue);
    setSelectedBuilderId(selectedBuilder?.id || null);
    
  };

  const handleSubmit = async () => {
    setIsPasswordDialogOpen(true);
  };

  const handleRequestOTP = async () => {
    if (!fullName || !email || !password || !phoneNumber || !selectedRole) {
      console.log(fullName, email, password, phoneNumber, selectedRole);
      console.error("All fields are required");
      setSnackbarType("error");
      setSnackbarMessage("All fields are required");
      setSnackbarOpen(true);
      return;
    }
    try {
      const response = await api.auth.getOtp({ phone_number: phoneNumber });
      if (response) {
        console.log("OTP requested successfully");
        setIsPasswordDialogOpen(true);
        setOtpCheck(response);
        console.log("OTP___HN---->", response);
      } else {
        console.error("Failed to request OTP");
      }
    } catch (error) {
      console.error("Error requesting OTP:", error);
    }
  };

  const handlePasswordSubmit = async (enteredPassword: string) => {
    setIsPasswordDialogOpen(false);

    if (otp === otpCheck) {
      try {
        const payload = {
          full_name: fullName,
          role: selectedRole.role,
          email: email,
          password: enteredPassword,
          phone_number: phoneNumber,
          builder_object_id: selectedBuilderId
          
        };
        const response = await api.admin.createAdmin(payload);
        if (response) {
          console.log("Admin created successfully");
          setSnackbarType("success");
          setSnackbarMessage("Admin created successfully");
          setSnackbarOpen(true);
          setSelectedBuilderName(null);
          setSelectedBuilderId(null);
          setFullName("");
          setEmail("");
          setPassword("");
          setPhoneNumber("");
          setState(null);
          setOtp("");
          
        } else {
          console.error("Failed to create admin");
        }
      } catch (error) {
        if (
          (error as Error).message === "Request failed with status code 409"
        ) {
          console.log("Email already exists");
          setSnackbarType("error");
          setSnackbarMessage("Email already exists");
          setSnackbarOpen(true);
        }
        console.error("Error creating admin:", error);
      }
    } else {
      alert("Please Enter Correct Otp");
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  useEffect(() => {
    fetchBuilderList();
    setDashboardHeader("Add Admin");
  }, []);

  return (
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

      <Box component={"form"}>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            User Details
          </AccordionSummary>
          <AccordionDetails>
            <TextField
              id="fullName"
              label="Full Name"
              variant="outlined"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              sx={{ width: 400, marginRight: 2, marginBottom: 2 }}
            />
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              value={email}
              error={snackbarMessage === "Email already exists"}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                width: 400,
                marginRight: 2,
                marginBottom: 2,

                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  outline: "green",
                },
              }}
            />
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ width: 400, marginRight: 2, marginBottom: 2 }}
            />
            <TextField
              id="phone_number"
              label="Phone No."
              variant="outlined"
              onChange={(e) => {
                let formattedPhoneNumber = e.target.value;

                formattedPhoneNumber = formattedPhoneNumber.replace(/\D/g, "");

                if (formattedPhoneNumber.startsWith("880")) {
                  formattedPhoneNumber = formattedPhoneNumber.slice(3);
                }

                formattedPhoneNumber = "880" + formattedPhoneNumber;

                setPhoneNumber(formattedPhoneNumber);
              }}
              value={phoneNumber}
              sx={{ width: 400, marginRight: 2, marginBottom: 2 }}
            />

            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Role</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="select role"
                  style={{ width: "600px" }}
                  name="role"
                  value={selectedRole.role}
                  onChange={handleChange}
                  disabled={hasSubmitted}
                >
                  <MenuItem value={ROLES.builder_admin}>Builder-Admin</MenuItem>
                  <MenuItem value={ROLES.super_admin}>Super-Admin</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </AccordionDetails>
        </Accordion>
        {selectedRole.role === ROLES.builder_admin && !hasSubmitted ? (
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              Assign to Builder
            </AccordionSummary>
            <AccordionDetails>
              <Stack
                spacing={1}
                width={"600px"}
                style={{ marginBottom: "15px" }}
              >
                <Autocomplete
                  sx={{ marginBottom: 2 }}
                  options={builderOptions.map((option) => option.name)}
                  renderInput={(params) => (
                    <TextField {...params} label="Builder Name" />
                  )}
                  value={selectedBuilderName}
                  onChange={handleBuilderChange}
                  freeSolo
                />
              </Stack>
              <Stack spacing={1} width={"600px"}>
                <Autocomplete
                  options={states}
                  renderInput={(params) => (
                    <TextField {...params} label="states" />
                  )}
                  value={state}
                  onChange={(event: any, newValue: string | null) =>
                    setState(newValue)
                  }
                  freeSolo
                />
              </Stack>
            </AccordionDetails>
          </Accordion>
        ) : null}

        <Button
          variant="contained"
          className="btn"
          onClick={handleRequestOTP}
          style={{
            marginTop: "20px",
           
          }}
        >
          Request OTP
        </Button>
      </Box>

      <Dialog
        open={isPasswordDialogOpen}
        onClose={() => setIsPasswordDialogOpen(false)}
      >
        <div
          style={{
            padding: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f0f0f0",
          }}
        >
          <Typography variant="h5" style={{ marginBottom: 20 }}>
            OTP verification
          </Typography>
          <TextField
            label="Enter OTP"
            type="password"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 20, width: 300 }}
          />
          <Button
            variant="contained"
            className="btn"
            onClick={() => handlePasswordSubmit(password)}
            style={{
              width: 300,
              
            }}
          >
            Submit
          </Button>
        </div>
      </Dialog>
    </div>
  );
};

export default UserForm;
