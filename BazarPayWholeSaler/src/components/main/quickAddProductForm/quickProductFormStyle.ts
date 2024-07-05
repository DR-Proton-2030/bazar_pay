

import { View, StyleSheet, ScrollView, Image, Text, Alert } from 'react-native';


export const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: '#fff',
      padding: 10,
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginTop: -50,
    },
    logo: {
      height: 200,
      width: 200,
    },
    inputContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      width: '100%',
      marginBottom: 20,
    },
    inputWrapper: {
      width: '48%', // Adjust width as needed to fit two inputs per row
      marginBottom: 20,
    },
    input: {
      backgroundColor: 'transparent',
    },
    button: {
      marginTop: 20,
      width: '100%',
    },
  });
  