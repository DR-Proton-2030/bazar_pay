import React, { useEffect, useState, useRef } from "react";
import { ScrollView, Text, TouchableOpacity, View, Modal, StyleSheet, Animated } from "react-native";
import { useRoute } from "@react-navigation/native";
import Colors from "../../constants/Colors";
import ProductHeader from "../../components/main/productDetails/productHeader/ProductHeader";
import ProductBlock from "../../components/main/productDetails/productBlock/ProductBlock";
import { api } from "../../utils/api";
import ProductOverView from "../../components/main/productOverview/ProductOverView";
import ProductSpecificationTab from "../../components/main/productSpecificationTab/ProductSpecificationTab";
import { ProductStyles } from "./style";
import CheckoutButtomSheet from "../../components/shared/checkoutButtomSheet/CheckoutButtomSheet";

const ProductDetailsScreen = () => {
  const [productDetails, setProductDetails] = useState<any>();
  const [modalVisible, setModalVisible] = useState(false);
  const translateY = useRef(new Animated.Value(300)).current;

  const route = useRoute();
  const { wholesalerId }: any = route.params;

  const getProductDetails = async () => {
    try {
      const filter = {
        wholesaler_object_id: wholesalerId,
      };
      const result = await api.product.getWholesalerProductDetails(filter);
      console.log(result);
      setProductDetails(result);
    } catch (error) {
      console.log("error in getProductDetails", error);
    }
  };

  useEffect(() => {
    getProductDetails();
  }, []);

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: modalVisible ? 0 : 300,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [modalVisible]);

  return (
    <>
      <ProductHeader text={productDetails?.product?.product_name} />
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: Colors.light.background,
          width: "100%",
          paddingBottom: 200,
        }}
      >
        <ProductBlock product={productDetails?.product} />
        <ProductOverView />
        <ProductSpecificationTab />
      </ScrollView>
      <View style={ProductStyles.overlay}>
        <View style={ProductStyles.overlayContent}>
          <Text style={ProductStyles.overlayContentTotal}>Price</Text>
          <View style={ProductStyles.overlayContentTop}>
            <Text style={ProductStyles.overlayContentPriceBefore}>599৳</Text>
            <Text style={ProductStyles.overlayContentPrice}>499৳</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <View style={ProductStyles.btn}>
            <Text style={ProductStyles.btnText}>Add to Cart</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <Animated.View
            style={[
              styles.modalContent,
              {
                transform: [{ translateY }],
              },
            ]}
          >
            <View style={styles.handle}></View>
            <CheckoutButtomSheet />
          </Animated.View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContent: {
    height: 220,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 6,
    paddingHorizontal: 20,
    elevation: 10
  },
  handle: {
    width: 60,
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 2.5,
    alignSelf: 'center',
    marginTop:10,
    marginBottom:10
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  closeButton: {
    marginTop: 20,
    fontSize: 16,
    color: Colors.light.orange,
  },
});

export default ProductDetailsScreen;
