import React from "react";
import HomePage from "../src/screens/home/Home";
import WellcomeScreen from "../src/screens/auth/wellcome";

const index = () => {
  if (false) {
    return <WellcomeScreen />;
  } else {
    return <HomePage />;
  }
};

export default index;
