import React from "react";
import HomePage from "../src/screens/home/Home";
import WellcomeScreen from "../src/screens/auth/wellcome";
import Dashboard from "../src/screens/dashbaord/DashBoard";

const index = () => {
  if (false) {
    return <WellcomeScreen />;
  } else {
    return <Dashboard />;
  }
};

export default index;
