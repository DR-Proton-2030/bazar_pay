import { LinearGradient } from 'expo-linear-gradient'
import React, { useCallback, useEffect, useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import FeatherIcon from '@expo/vector-icons/Feather';
import ProductDetailsOne from './productDetailsOne/ProductDetailsOne';
import LottieView from 'lottie-react-native';
import ProductDetailstwo from './productDetailstwo/ProductDetailstwo';
import { api } from '../../../utils/api';
import { useNavigation } from 'expo-router';

const ProductDetails = () => {
  const navigation: any = useNavigation<any>();
  
  const [loading, setLoading] = useState<boolean>(false);

  const [animationData2, setAnimationData2] = useState(null);
  const animationUrl2 = 'https://lottie.host/fda13b29-cf66-4c44-8e54-ec7ca0ea07f7/gpEKl3IwH6.json';

  const [images, setImages] = useState<string[]>([]);

  const [page, setPage] = useState(0);

  const [form, setForm] = useState<IProduct>({
    product_name: '',
    product_description: '',
    unit: '',
    brand_object_id: '',
    subcategory_object_id: '',
    category_object_id: '',
    profit_percentage: 0,
    product_status: "Active"

  });

  const handleCreateProduct = useCallback(async (reset = false) => {

    setLoading(true)

    const formDataToSend = new FormData();

    formDataToSend.append("productDetails", JSON.stringify(form));
  
    if (images && images.length > 0) {
      images.forEach((imageUri, index) => {
        const file: any = {
          uri: imageUri,
          name: `product_image_${index + 1}.jpg`,  
          type: "image/jpeg",
        };
        formDataToSend.append("product_image", file);  
      });
    }
  
    try {
      console.log("===> Form Data:", form);
  
      const result = await api.product.createProduct(formDataToSend);
      console.log("======> Response:", result);
      navigation.navigate("QuickAddProduct", {
        productId: result?._id,
        productImage: result?.product_image[0],
        productPercent: 0,
        productName:result?.product_name,
        product_description: result?.product_description
      });
    } catch (error) {
      console.log("Error creating Category:", error);
    } finally {
      setLoading(false)
    }
  }, [form]);



  useEffect(() => {
    const fetchAnimation = async () => {
      try {
        const response = await fetch(animationUrl2);
        const data = await response.json();
        setAnimationData2(data);
      } catch (error) {
        console.error('Error loading Lottie animation:', error);
      }
    };

    fetchAnimation();
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
      <LinearGradient
        colors={['#cce0ff', 'transparent']}
        start={{ x: 0.1, y: 0 }}
        end={{ x: 0.1, y: 0.2 }}
        style={{
          flex: 1
        }}
      >

        {
          !loading && page === 0 ?
            <ProductDetailsOne form={form} setForm={setForm}
              setPage={setPage} page={page}
              images={images} setImages={setImages} />
            :
            !loading && page === 1 ?
              <ProductDetailstwo form={form} setForm={setForm} setPage={setPage} handleCreateProduct={handleCreateProduct} />
              : null
        }

        {loading && animationData2 ? (
          <>
            <LottieView
              source={animationData2}
              autoPlay
              loop
              style={{ width: 500, height: 500 }} // Adjust size as needed
            />
            <View style={{ marginHorizontal: "auto", alignItems: "center", marginTop: -150 }}>
              <Text style={{ fontWeight: "600", fontSize: 30 }}>
                একটু অপেক্ষা করুন
              </Text>
              <Text style={{ fontWeight: "600", fontSize: 16, marginTop: 10 }}>
                পণ্যের বিবরণ আপলোড হচ্ছে...
              </Text>
            </View>

          </>
        ) : loading ? (
          <ActivityIndicator size="small" color="#0000ff" />
        ) : null}
      </LinearGradient>
    </SafeAreaView>
  )
}


export default ProductDetails