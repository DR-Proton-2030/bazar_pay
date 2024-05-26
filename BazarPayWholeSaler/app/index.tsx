import React, { useContext, useEffect } from "react";
import HomePage from "../src/screens/home/Home";
import WellcomeScreen from "../src/screens/auth/wellcome";
import Dashboard from "../src/screens/dashbaord/DashBoard";
import SignIn from "../src/screens/auth/signIn/SignIn";
import SignUpPage from "../src/screens/auth/signUp/SignUpPage";
import AuthContext from "../src/contexts/authContext/authContext";
import WholesalerContext from "../src/contexts/wholesalerContext/wholesalerContext";
import { useNavigation } from "expo-router";
import SplashScreen from "../src/screens/splashScreen/SplashScreen";
import Colors from "../src/constants/Colors";
import AddProduct from "../src/screens/addProduct/AddProduct";

const index = () => {
  return <SplashScreen />;
};

export default index;
