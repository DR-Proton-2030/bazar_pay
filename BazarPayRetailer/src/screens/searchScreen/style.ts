
import {
    StyleSheet,
  } from 'react-native';
import Colors from '../../constants/Colors';

export const styles = StyleSheet.create({
    content: {
      padding: 10,
      paddingTop: 230,
      backgroundColor: '#fff',
    },
    inputLabel: {
        fontSize: 17,
        fontWeight: '600',
        color: '#222',
        marginBottom: 8,
    },
    animation: {
      width: 500,
      height: 500,
      marginLeft:-60,
      marginTop:-100
    },
    /** Header */
    header: {
      position: 'absolute',
      width: '100%',
      zIndex: 1,
      paddingHorizontal: 24,
      paddingVertical: 16,
      height: 210,
      alignItems: 'stretch',
      justifyContent: 'flex-end',
      backgroundColor: Colors.light.orange,
    },
    Button: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colors.light.orange,
      borderRadius: 15,
      paddingVertical:15,
      paddingHorizontal:5
    },
    productContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      backgroundColor: '#fff',
      marginTop:20
    },
    headerTitle: {
      fontSize: 26,
      lineHeight: 34,
      fontWeight: 'bold',
      color: '#fff',
      textAlign: 'center',
      marginBottom: 12,
    },

    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.3)', // Semi-transparent background
        justifyContent: 'flex-end',
      },
      
      bottomSheet: {
        backgroundColor: 'white',
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        minHeight: 500,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 5, // Android shadow
      },
    /** Input */
    form: {
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 0,
      marginTop:20
  },
  inputControl: {
    height: 55,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    borderWidth: 1,
    borderColor: '#C9D3DB',
    //   borderStyle: 'solid',
},
    input: {
      height: 50,
      backgroundColor: '#fff',
      paddingLeft: 22,
      paddingRight: 24,
      borderRadius: 12,
      fontSize: 17,
      fontWeight: '500',
      color: '#222',
      width: "80%"
    },
    inputWrapper: {
      position: 'relative',
      width: '100%',
      flexDirection: "row"
    },
    inputIcon: {
      position: 'absolute',
      width: 44,
      height: 44,
      top: 0,
      left: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center',
    },
    /** Card */
    card: {
      flexDirection: 'row',
      alignItems: 'stretch',
      borderRadius: 12,
      marginBottom: 16,
      backgroundColor: '#fff',
    },
    cardImg: {
      width: 120,
      height: 154,
      borderRadius: 12,
    },
    cardBody: {
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 0,
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      paddingVertical: 8,
      paddingHorizontal: 16,
    },
    cardTitle: {
      fontSize: 22,
      fontWeight: '700',
      color: '#173153',
      marginRight: 8,
    },
    cardAirport: {
      fontSize: 13,
      fontWeight: '600',
      color: '#5f697d',
    },
    cardRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: -8,
      flexWrap: 'wrap',
    },
    cardRowItem: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 6,
    },
    cardRowItemText: {
      marginLeft: 4,
      fontSize: 12,
      fontWeight: '500',
      color: '#5f697d',
    },
    cardPrice: {
      fontSize: 13,
      fontWeight: '500',
      color: '#5f697d',
    },
    cardPriceValue: {
      fontSize: 21,
      fontWeight: '700',
      color: '#173153',
    },
    cardPriceCurrency: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#6f61c4',
    },
    /** Button */
    btn: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
      paddingVertical: 6,
      paddingHorizontal: 14,
      borderWidth: 1,
      backgroundColor: '#173153',
      borderColor: '#173153',
    },
    btnText: {
      fontSize: 13,
      lineHeight: 18,
      fontWeight: '600',
      color: '#fff',
    },
  });
  
  function useRoute() {
    throw new Error('Function not implemented.');
  }
  