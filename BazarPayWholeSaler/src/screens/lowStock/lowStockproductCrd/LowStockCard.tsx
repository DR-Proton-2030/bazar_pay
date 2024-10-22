import React from 'react'
import { View,Text,Image ,StyleSheet} from 'react-native'
import Foundation from '@expo/vector-icons/Foundation';

const LowStockCard = ({item}:any) => {
  return (
    <View key={item.id} style={styles.card}>
    <Image source={{ uri: item.imageUrl }} style={styles.image} />
    <View>
    <Text style={styles.productName}>{item.name}</Text>
    <Text style={{color:"gray",fontSize:12,fontWeight:"700",marginBottom:10,marginLeft:5}}>
    SAMSUNG
    </Text>
    <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",marginTop:"auto",marginBottom:5,marginLeft:4}}>
    <Foundation name="alert" size={22} color="red" />
    <Text style={styles.stockALert}>
     Only 5 stocks left
    </Text>
    </View>
    </View>
    <Text style={styles.productPrice}>{item.price}</Text>
  </View>
  )
}

export default LowStockCard


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      padding: 10,
    },
    card: {
      backgroundColor: '#ffffff',
      borderRadius: 10,
      flexDirection:"row",
      gap: 5,
      paddingHorizontal:15,
      marginBottom:15,
     paddingVertical:8
    },
    image: {
      width: 90,
      height: 90,
      borderRadius: 8,
      backgroundColor:"gray",
    },
    productName: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
      marginTop:8,
      marginLeft:5
    },
    stockALert: {
      fontSize: 14,
      fontWeight: '500',
      color: 'black',
      marginBottom: 5,
      marginTop:2,
      marginLeft:5
    },
  
    productPrice: {
      fontSize: 16,
      color: 'blue',
      marginLeft:"auto",
      marginTop:8
    },
  });
  