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
    width: windowWidth-40,
    marginTop: 10,
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 25,
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
    alignItems: "center",
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
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    
  },
  congratsModalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
  },
  congratsText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: Colors.light.primary,
    borderRadius: 50,
    paddingHorizontal:30,
    paddingVertical:10,
  },
  closeButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize:18
  },
  commonHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingLeft: 5,
    // backgroundColor: Colors.light.background,
    zIndex: 50,
    width: windowWidth,
  },
  chipStyle: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    borderColor: Colors.light.primary,
    marginRight: 10,
    width: 130,
    height: 33,
    marginTop: 4,
    justifyContent: "center",
    alignItems: "center",
  },

  modalContent: {
    backgroundColor: "white",
    padding: 10,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
   
  },

  backButton: {
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
  },
  form: {},
  quickAddButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  quickAddText: {
    fontSize: 16,
  },
  infoText: {
    fontSize: 14,
    color: "#666",
    marginBottom: 20,
  },
  imageUpload: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
    padding: 20,
    borderRadius: 8,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "gray",
    borderStyle: "dashed",
  },

  imageUploadText: {
    fontSize: 16,
    marginTop: 10,
  },
  input: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  halfInput: {
    flex: 1,
    marginHorizontal: 5,
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
  blueButton: {
    backgroundColor: Colors.light.primary,
    borderRadius: 40,
    paddingVertical: 10,
  },
  lightVioletButton: {
    backgroundColor: Colors.light.lightViolet,
    borderRadius: 40,
    paddingVertical: 10,
  },
  lightVioletButtonText:{
    color:Colors.light.secondary,
    fontSize:16,
    fontWeight:"bold"
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
  iconView: {
    padding: 8,
    borderRadius: 50,
  },
  primaryButton: {
    padding:20
  },
    // nextButton: {
    //   backgroundColor: Colors.light.primary,
    //   marginTop: 30,
    //   paddingVertical: 18,
    //   paddingHorizontal: 20,
    //   borderRadius: 50,
    // },
    loginButton: {
      backgroundColor: "white",
      width: windowWidth-40,
      borderWidth: 2,
      borderColor: "black",
      marginTop: 30,
      paddingVertical: 18,
      paddingHorizontal: 20,
      borderRadius: 50,
    },
    nextButtonText: {
      fontSize: 16,
      textAlign: "center",
      color: "white",
    },
    loginButtonText: {
      fontSize: 16,
      color: "black",
      textAlign: "center",
    },
});
