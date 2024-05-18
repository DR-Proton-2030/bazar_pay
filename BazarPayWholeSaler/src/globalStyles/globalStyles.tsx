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
    backgroundColor: Colors.light.primary,
    marginTop: 10,
    paddingVertical: 18,
    paddingHorizontal: 20,
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
    alignItems:"center",
    paddingTop: 10,
    paddingHorizontal: 10,
    backgroundColor: Colors.light.background,
    zIndex: 50,
    width: windowWidth,
  },
  congratsModalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  congratsModalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  congratsText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: Colors.light.primary,
    borderRadius: 5,
  },
  closeButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  productHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 20,
    paddingLeft: 5,
    backgroundColor: Colors.light.background,
    zIndex: 50,
    width: windowWidth,
  },
 
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 10,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeModalText: {
    textAlign: "center",
    color: Colors.light.primary,
    marginTop: 20,
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
    backgroundColor: Colors.light.primary,
    borderRadius: 40,
    alignItems: "center",
    paddingVertical: 17,
  },
  signInButtonText: {
    color: "white",
    fontSize: 19,
  },
  forgotPasswordText: {
    color: Colors.light.primary,
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
