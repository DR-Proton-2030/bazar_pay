import { Theme, useTheme } from "@mui/material/styles";
import { useState,useContext } from "react";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import Paper from "@mui/material/Paper";
import image from "../../../../assets/images/house.jpg";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { api } from "../../../../utils/api";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../../contexts/authContext/authContext";
import "./login.css";
import { ROLES } from "../../../../constants/roles/Roles";
const paperStyles = {
  width: "390px",
  height: "500px",
  alignItems: "center",
  padding: "20px",
};
const textfieldStyles = {
  width: "full",
  height: "50px",
};

// const names = ["Admin", "Super-Admin", "User"];

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function Login() {
  const {setUser} = useContext(AuthContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleRoleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setRole(event.target.value);
  };

  const handleEmailChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    try {
      const loginData = {
        role: role,
        userId: email,
        password: password,
      };

      const response = await api.auth.loginAdmin(JSON.stringify(loginData));

      console.log("Login response:", response.builder);
      if (response) {
        if(response.role === ROLES.super_admin){
          localStorage.setItem("@admin", response);
          setUser(response);
          // localStorage.setItem("@builder-admin", response.builder)
          navigate(`/`);
        }
      }
    } catch (error) {
      console.error("Error while login sending payload", error);
    }
  };
  return (
    <div
      className="login-container"
      style={{
        width: "full",
        height: "100vh",
        backgroundColor: "white",
        margin: "0 auto",
        padding: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="login_form"
        style={{
          width: "60%",
          height: "500px",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "2px",
          borderRadius: "15px",
        }}
      >
        <div className="login_img" style={{ width: "500px", height: "500px" }}>
          <img src={image} alt=""/>
        </div>
        <div className="login_content">
          <Paper elevation={5} style={paperStyles} id="form-paper">
            <div className="form">
              <div className="login_heading">
                <h2 style={{ textAlign: "center" }}>Login to Find My House</h2>
                <AccountCircleIcon
                  style={{ marginTop: "10px", width: "48px", height: "48px" }}
                />
              </div>
              <Box sx={{ minWidth: 120 }}>
                <FormControl sx={{ marginTop: 2, marginLeft: 2, width: "90%" }}>
                  <InputLabel id="demo-simple-select-label">Role</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={role}
                    label="Role"
                    onChange={handleRoleChange}
                  >
                    <MenuItem value={"BUILDER_ADMIN"}>Company Admin</MenuItem>
                    <MenuItem value={"Super-Admin"}>Super-Admin</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <TextField
                type="text"
                label="Email or phone"
                placeholder="Enter your email or phone number"
                sx={{ marginTop: 2, marginLeft: 2, width: "90%" }}
                value={email}
                onChange={handleEmailChange}
                required
              />
              <TextField
                label="Password"
                type="password"
                placeholder="Enter your password"
                sx={{ marginTop: 2, marginLeft: 2, width: "90%" }}
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <p
                style={{
                  textAlign: "right",
                  marginRight: "18px",
                  marginTop: "15px",
                }}
              >
                <a style={{ textDecoration: "none" }} href="#">
                  Forgot password?
                </a>
              </p>
              <Button
                variant="contained"
                className="btn"
                sx={{
                  marginLeft: 2,
                  marginTop: 2,
                  width: "90%",
                  height: "50px",
                  fontFamily: "Railway, sans-serif",
                  backgroundColor: "#004d99"
                }}
                onClick={handleSubmit}
              >
                Next
              </Button>
              <div
                className="account_link"
                style={{ textAlign: "left", margin: "20px" }}
              >
                <p>
                  Need an account?
                  <a href="#" style={{ textDecoration: "none" }}>
                    Create your account
                  </a>
                </p>
              </div>
            </div>
          </Paper>
        </div>
      </div>
    </div>
  );
}
