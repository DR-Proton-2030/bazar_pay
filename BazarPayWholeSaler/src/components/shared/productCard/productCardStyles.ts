import { StyleSheet } from "react-native";
import { windowWidth } from "../../../constants/HeightWidth";

export const productCardStyles = StyleSheet.create({
  outerContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  container: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width: windowWidth-20,
    borderColor: "#ddd",
    borderWidth: 1,
    display: "flex",
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 10,
    marginRight: 7,
  },
  infoContainer: {
    position: "absolute",
    top: 8,
    bottom: 0,
    left: 100,
    right: 0,
    paddingLeft: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  priceContainer: {
    marginTop: 8,
  },
  price: {
    fontSize: 14,
    fontWeight: "ultralight",
  },
  stock: {
    fontSize: 14,
    fontWeight: "ultralight",
  },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: "#ddd",
    marginVertical: 18,
  },
  gridContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    marginBottom: 10,
    gap: 10,
  },
  gridItem: {},
  gridText: {
    fontSize: 14,
    fontWeight: "400",
    color: "blue",
  },
});

export default productCardStyles;
