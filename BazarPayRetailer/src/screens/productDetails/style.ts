
import { ScrollView, Text, TouchableOpacity, View,StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export const ProductStyles = StyleSheet.create({
    /** Placeholder */
    placeholder: {
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 0,
      height: 400,
      marginTop: 60,
      padding: 24,
      backgroundColor: '#F3F4F6',
    },
    placeholderInset: {
      borderWidth: 4,
      borderColor: '#CFD1D4',
      borderStyle: 'dashed',
      borderRadius: 9,
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 0,
    },
    /** Overlay */
    overlay: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: '#fff',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: 12,
      paddingHorizontal: 26,
      paddingBottom: 12,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
      borderTopEndRadius:12
    },
    overlayContent: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    overlayContentTop: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginBottom: 2,
    },
    overlayContentPriceBefore: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: '600',
      color: '#8e8e93',
      marginRight: 4,
      textDecorationLine: 'line-through',
      textDecorationColor: '#8e8e93',
      textDecorationStyle: 'solid',
    },
    overlayContentPrice: {
      fontSize: 21,
      lineHeight: 26,
      fontWeight: '700',
      color: '#000',
      marginLeft:5
    },
    overlayContentTotal: {
      fontSize: 13,
      lineHeight: 18,
      fontWeight: '600',
      color: 'gray',
      letterSpacing: -0.07,
      textDecorationStyle: 'solid',
    },
    /** Button */
    btn: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 19,
      paddingVertical: 10,
      paddingHorizontal: 50,
      backgroundColor: Colors.light.orange,
      elevation: 4,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
    btnText: {
      fontSize: 18,
      lineHeight: 26,
      fontWeight: '600',
      color: '#fff',
    },
  });