import Colors from "../../constants/Colors";

import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
      paddingTop: 20,
      backgroundColor: '#f8f8f8',
    },
    header: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
      color: '#333',
    },
    modalText: {
      fontSize: 19,
      marginBottom: 20,
      textAlign: "center",
      fontWeight: "700",
      marginTop: 10
    },
    buttonContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 30
    },
    addressContainer: {
      marginBottom: 20,
      padding: 15,
      backgroundColor: '#fff',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 10,
      shadowOffset: { width: 0, height: 5 },
    },
    addressTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
      color: '#333',
    },
    addressText: {
      fontSize: 16,
      color: '#666',
    },
    changeAddressButton: {
      fontSize: 16,
      color: Colors.light.orange,
      marginTop: 5,
    },
    cartList: {
    },
    cartItem: {
      flexDirection: 'row',
      padding: 15,
      backgroundColor: '#fff',
      borderRadius: 10,
      marginBottom: 15,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 10,
      shadowOffset: { width: 0, height: 5 },
      
    },
    productImage: {
      width: 70,
      height: 70,
      borderRadius: 10,
      marginRight: 15,
    },
    productDetails: {
      flex: 1,
    },
    productName: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
      color: '#333',
    },
    priceContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    productPriceOriginal: {
      fontSize: 16,
      color: '#666',
      textDecorationLine: 'line-through',
      marginRight: 10,
    },
    productPriceDiscounted: {
      fontSize: 16,
      color:Colors.light.orange,
    },
    quantityContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    quantityButton: {
      backgroundColor: Colors.light.orange,
      borderRadius: 5,
      width: 30,
      height: 30,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: 'black',
      shadowOpacity: 0.5,
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowRadius: 5,
      elevation: 5, 
      
    },
    quantityButtonText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white',
    },
    quantityText: {
      fontSize: 18,
      marginHorizontal: 10,
      minWidth: 20,
      textAlign: 'center',
    },
    totalPrice: {
      fontSize: 22,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 20,
      color: '#333',
    },
    drawer: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: 470,
      backgroundColor: "white",
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      padding: 20,
      elevation: 10,
      zIndex:200,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: -4
      },
      shadowOpacity: 0.4,
      shadowRadius: 6
    },
  
    handle: {
      width: 50,
      height: 5,
      backgroundColor: "#ccc",
      borderRadius: 2.5,
      alignSelf: "center",
      marginBottom: 10
    },
  
    buttonmodal: {
      flex: 1,
      paddingVertical: 10,
      marginHorizontal: 5,
      borderRadius: 5,
      backgroundColor: Colors.light.orange,
      justifyContent: "center",
      alignItems: "center"
    },
    buttonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold"
    }
  });