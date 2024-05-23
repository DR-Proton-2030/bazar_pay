import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export const stockScreenStyles = StyleSheet.create({
  stockContainer: {
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "white",
    width: "100%",
  },
  cardRow: {
    flexDirection: "row",
  },
  card1: {
    width: 170,
    height: 50,
    backgroundColor: "blue",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  card2: {
    width: 170,
    borderWidth: 1.5,
    height: 50,
    backgroundColor: Colors.light.cardColor,
    borderRadius: 8,
    justifyContent: "center",
    borderColor: Colors.light.border,
    alignItems: "center",
  },
  buttonText1: {
    color: "white",
    fontWeight: "bold",
  },
  buttonText2: {
    color: Colors.light.border,
    fontWeight: "bold",
  },
  buttonWrapper: {
    overflow: "hidden",
    borderRadius: 0,
  },
  leftBorderRadius: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  rightBorderRadius: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  bigCard: {
    backgroundColor: Colors.light.cardColor,
    borderColor: Colors.light.border,
    width: "85%",
    borderWidth: 1.5,
    marginVertical: 20,
    borderRadius: 5,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  cell: {
    width: "30%",
    marginVertical: 5,
    padding: 5,
  },
  title: {
    fontWeight: "light",
    fontSize: 13,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "bold",
  },
  alignStart: {
    alignItems: "flex-start",
  },
  alignCenter: {
    alignItems: "center",
  },
  alignEnd: {
    alignItems: "flex-end",
  },
  middleAlign: {
    textAlign: "center",
  },
  shareCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "85%",
  },
  sharePart: {
    flexDirection: "row",
    alignItems: "center",
    width: "45%",
  },
  icon: {
    marginRight: 10,
  },
  textContainer: {
    justifyContent: "center",
  },
  shareTitle: {
    fontSize: 12,
    fontWeight: "bold",
  },
  shareSubtitle: {
    fontSize: 11,
    marginTop: 5,
    textAlign: "center",
  },
  checkCard: {
    width: "85%",
    marginTop: 15,
    backgroundColor: Colors.light.lightViolet,
    borderColor: Colors.light.border,
    borderRadius: 4,
    paddingVertical: 10,
    alignItems: "center",
  },
  checkContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  checkText: {
    marginLeft: 8,
    fontSize: 16,
    color: Colors.light.primary,
  },

  fullWidthContainer: {
    width: "85%",
    alignItems: "flex-start",
    marginTop: 25,
  },
  fullWidthText: {
    fontSize: 14,
    fontWeight: "bold",
  },

  buttonContainer: {
    justifyContent: "flex-end",
  },
  button3: {
    backgroundColor: Colors.light.primary,
    borderRadius: 6,
    paddingVertical: 9,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  button3Content: {
    flexDirection: "row",
    alignItems: "center",
  },
  button3Text: {
    color: "white",
    fontSize: 12,
    marginRight: 4,
  },

  dateCard: {
    width: "85%",
    marginTop: 12,
    backgroundColor: Colors.light.lightViolet,
    borderColor: Colors.light.border,
    borderRadius: 4,
    paddingVertical: 4,
    // alignItems: "center",
    paddingHorizontal: 10,
    alignItems: "flex-start",
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  productDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  productsContainer: {
    width: "90%",
    marginTop: 3,
  },
  accountHitory: {
    width: "85%",
    marginTop: 15,
    backgroundColor: Colors.light.primary,
    color: Colors.dark.text,
    borderRadius: 4,
    paddingVertical: 10,
    alignItems: "center",
  },
  accountHistoryText: {
    color: "white",
  },
  productSectionContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
