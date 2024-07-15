import React, { useContext } from "react";
import HomePage from "../src/screens/home/Home";
import WellcomeScreen from "../src/screens/auth/wellcome";
import Dashboard from "../src/screens/dashbaord/DashBoard";
import SignIn from "../src/screens/auth/signIn/SignIn";
import SignUpPage from "../src/screens/auth/signUp/SignUpPage";
import AuthContext from "../src/contexts/authContext/authContext";

const index = () => {
  const {user}= useContext(AuthContext)
  if (user===null) {
    return <Dashboard />;
  } else {
    return <Dashboard />;
  }
};

export default index;
