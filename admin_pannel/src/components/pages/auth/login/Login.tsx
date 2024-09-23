import { Theme, useTheme } from "@mui/material/styles";
import { useState,useContext } from "react";
import bazarpay from "../../../../assets/logo/bazarpay-logo.svg";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import EmailIcon from '@mui/icons-material/Email';
import Paper from "@mui/material/Paper";
import image from "../../../../assets/images/login.svg";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { api } from "../../../../utils/api";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../../contexts/authContext/authContext";
import "./login.css";
import { ROLES } from "../../../../constants/roles/Roles";
import { IconButton, InputAdornment, OutlinedInput } from "@mui/material";
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
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

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
        margin: "0 auto",
        height: "100vh",
        
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
        <div className="login_img" >
          <img src={image} alt="" />
        </div>
        <div className="login_content">
        <div className="bazarpay-logo-container">
            <img src={bazarpay} alt="logo" style={{width: "30%"}}/>
          </div>
          <Paper elevation={0} style={paperStyles} id="form-paper">
            <div className="form">
              <div className="login_heading">
              <h1>Welcome <span style={{color: "#0066ff", fontWeight: "bold" }}>Back</span></h1>
              <p style={{margin: 1, fontSize: "15px"}}>Please enter your login credentials to continue</p>
                
              </div>
              <Box sx={{ minWidth: 120 }}>
                <FormControl sx={{ marginTop: 2,  width: "95%", backgroundColor: "#eff5f5" }} className="select-field">
                  <InputLabel id="demo-simple-select-label">Select Your Role</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={role}
                    label="Role"
                    onChange={handleRoleChange}
                  >
                    <MenuItem value={"ADMIN"}>Admin</MenuItem>
                    
                  </Select>
                </FormControl>
              </Box>
             
              <FormControl  variant="outlined" className="input-field-with-icon">
             <InputLabel htmlFor="outlined-adornment-password">
               Enter email or phone
             </InputLabel>
             <OutlinedInput
               id="outlined-adornment-password"
               type="text"
               endAdornment={
                 <InputAdornment position="end">
                   <IconButton
                    aria-label="toggle password visibility"
                     edge="end"
                   >
                     <EmailIcon  />
                   </IconButton>
                 </InputAdornment>
               }
               label="Username"
               value={email}
               onChange={handleEmailChange}
               required
            />
           </FormControl>
             

<FormControl variant="outlined"  className="input-field-with-icon">
             <InputLabel htmlFor="outlined-adornment-password">
               Enter Password
             </InputLabel>
             <OutlinedInput
               id="outlined-adornment-password"
               type={showPassword ? "text" : "password"}
               endAdornment={
                 <InputAdornment position="end">
                   <IconButton
                     aria-label="toggle password visibility"
                     onClick={handleClickShowPassword}
                     onMouseDown={handleMouseDownPassword}
                     onMouseUp={handleMouseUpPassword}
                     edge="end"
                   >
                     {showPassword ? <VisibilityOff /> : <Visibility />}
                   </IconButton>
                 </InputAdornment>
               }
               label="Password"
               value={password}
               onChange={handlePasswordChange}
               required
             />
        </FormControl>
              <p
                style={{
                  textAlign: "right",
                  marginRight: "18px",
                  marginTop: "15px",
                }}
              >
                <a style={{ textDecoration: "none", color: "blue" }} href="#">
                  Forgot password?
                </a>
              </p>
              <Button
                variant="contained"
                className="glowing-blue-button"
                sx={{
                  marginLeft: 2,
                  marginTop: 2,
                  width: "90%",
                  height: "50px",
                  fontFamily: "Railway, sans-serif",
                  backgroundColor: "#0066ff"
                }}
                onClick={handleSubmit}
              >
                Next
              </Button>
              <div
                className="account_link"
                style={{ textAlign: "left", margin: "20px"}}
              >
                <p>
                  Don't have any account?
                  <a href="#" style={{ textDecoration: "none" , color: "blue", fontWeight: "600", marginLeft: "5px"}}>
                    Sign Up
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
