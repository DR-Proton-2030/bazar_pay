// import { useNavigation } from "expo-router";
import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import productImg from "../../../../../assets/images/product.png";
import Colors from "../../../../constants/Colors";
import { AntDesign, FontAwesome } from '@expo/vector-icons';
const ProductBlock = ({product}:any) => {
  // const navigation: any = useNavigation();
  const handleNavigate = () => {
    // navigation.navigate("productDetails");
  };
  return (
    <View  style={styles.container}>
      <Image source={{uri:product?.product_image} || productImg} style={styles.image} />
      <View style={{marginTop: 18,borderRightColor:"red"}}>
        <Text style={{backgroundColor:Colors.light.cardColor,width:95,paddingVertical:4,textAlign:"center",borderRadius:20,
        fontWeight:400,color:"gray"
        }}>Electronics</Text></View>

      <Text style={styles.title}>{product?.product_name}</Text>
        <View style={{flexDirection:"row",alignItems:"center",gap:3,marginTop:9}}>
        <FontAwesome
              name={"star"}
              size={17}
              color={Colors.light.yellow}
            />
        <FontAwesome
              name={"star"}
              size={17}
              color={Colors.light.yellow}
            />
        <FontAwesome
              name={"star"}
              size={17}
              color={Colors.light.yellow}
            />
        <FontAwesome
              name={"star"}
              size={17}
              color={Colors.light.yellow}
            />
       
        <FontAwesome
              name={"star-o"}
              size={17}
              color={Colors.light.yellow}
            />
          <Text style={{color:"gray",fontWeight:"600",marginLeft:5}}>
            780 Reviews
          </Text>
        </View>
        
      
      <Text style={styles.description}>
       {product?.product_description}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    paddingHorizontal:20
  },
  image: {
    width: 350,
    height: 300,
    borderRadius: 10,
    marginTop: 20,
    marginLeft:"auto",
    marginRight:"auto"
  },
  title: {
    fontSize: 25,
    fontWeight: "500",
    textAlign: "left",
    marginTop: 4,
  },
  description: {
    fontSize: 14,
    color: "gray",
    marginTop:12,
    lineHeight:18
  },
  price: {
    fontSize: 18,
    fontWeight: "500",
    color:Colors.light.orange,
    marginTop:4
  },
  amount: {
    fontSize: 20,
    marginTop: 5,
  },
});

export default ProductBlock;
