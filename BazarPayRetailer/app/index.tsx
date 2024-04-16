import React from "react";
import HomePage from "../src/screens/home/Home";
import WellcomeScreen from "../src/screens/auth/wellcome";
import Dashboard from "../src/screens/dashbaord/DashBoard";
import SignIn from "../src/screens/auth/signIn/SignIn";

const index = () => {
  if (true) {
    return <SignIn />;
  } else {
    return <Dashboard />;
  }
};

export default index;
