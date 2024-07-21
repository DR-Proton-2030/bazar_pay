import { Dimensions, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const globalStyle = StyleSheet.create({
  parent: {
    flex: 1,
    paddingBottom: 0,
  },
  googleIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  nextButton: {
    backgroundColor: Colors.light.orange,
    marginTop: 10,
    paddingVertical: 18,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  flagContainer: {
    marginRight: 10,
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
  },
  countryCode: {
    fontSize: 16,
  },

  buttonText: {
    textAlign: "center",
    color: Colors.light.background,
    fontWeight: "700",
    fontSize: 17,
  },
  orText: {
    color: "gray",
    fontSize: 12,
    textAlign: "center",
    marginTop: 10,
  },
  socialButton: {
    width: "40%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 15,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 10,

    backgroundColor: Colors.light.background,
    zIndex: 50,
    width: windowWidth,
  },
  productHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 20,
    paddingBottom:5,
    paddingLeft: 5,
    backgroundColor: Colors.light.background,
    zIndex: 50,
    width: windowWidth,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // elevation: 5,
  },
  sectionContainer: {
    height: "10%",
    width: "100%",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: Colors.light.background,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 40,
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginBottom: 15,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 3,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 40,
  },
  signInButton: {
    backgroundColor: Colors.light.orange,
    borderRadius: 40,
    alignItems: "center",
    paddingVertical: 17,
  },
  signInButtonText: {
    color: "white",
    fontSize: 19,
  },
  forgotPasswordText: {
    color: Colors.light.orange,
    textAlign: "center",
    fontSize: 14,
    marginBottom: 30,
  },
  Header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 50,
    paddingLeft: 10,
    backgroundColor: "transparent",
    zIndex: 50,
    width: windowWidth,
  },
  productHeader2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 50,
    paddingLeft: 10,
    backgroundColor: Colors.light.background,
    zIndex: 50,
    width: windowWidth,
    gap: 20,
  },
  posttitle: {
    fontSize: 23,
    marginLeft: 10,
    fontWeight: "bold",
    color: "black",
  },
  socialIcon: {
    width: "18%",
    height: 23,
    marginRight: 10,
  },
  socialText: {
    fontSize: 19,
    fontWeight: "600",
  },
  bottomRow: { flexDirection: "row", gap: 20 },
});
