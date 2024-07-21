import React, { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View,StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import Colors from "../../constants/Colors";
import ProductHeader from "../../components/main/productDetails/productHeader/ProductHeader";
import ProductBlock from "../../components/main/productDetails/productBlock/ProductBlock";
import { api } from "../../utils/api";
import { useNavigation } from "expo-router";
import ProductOverView from "../../components/main/productOverview/ProductOverView";

const ProductDetailsScreen = () => {
  const [productDetails, setProductDetails] = useState<any>()
  const route = useRoute();
  const { wholesalerId }: any = route.params;
  const getProductDetails = async () => {
    try {
      const filter = {
        wholesaler_object_id: wholesalerId
      }
      const result = await api.product.getWholesalerProductDetails(filter)
      console.log(result)
      setProductDetails(result)
    } catch (error) {
      console.log("error in getProductDetails", error)
    }
  }
  const navigation: any = useNavigation();
  const handleNavigate = () => {
    navigation.navigate("RatingsPage");
  };
  useEffect(() => {
    getProductDetails()
  }, [])

  return (
    <>
      <ProductHeader text={productDetails?.product?.product_name} />
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: Colors.light.background,
          width: "100%",
          paddingBottom:200
        }}
      >
        <ProductBlock product={productDetails?.product} />
        <ProductOverView />
       
      </ScrollView>
      <View style={styles.overlay}>
        <View style={styles.overlayContent}>
        <Text style={styles.overlayContentTotal}>
            Price
          </Text>
          <View style={styles.overlayContentTop}>
            <Text style={styles.overlayContentPriceBefore}>599৳</Text>
            <Text style={styles.overlayContentPrice}>499৳</Text>
          </View>
         
        </View>
        <TouchableOpacity
          onPress={() => {
            // handle onPress
          }}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>Add to Cart</Text>
           
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ProductDetailsScreen;
const styles = StyleSheet.create({
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
    // backgroundColor: Colors.light.orange,
    backgroundColor: Colors.light.text,
    elevation:3
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  },
});