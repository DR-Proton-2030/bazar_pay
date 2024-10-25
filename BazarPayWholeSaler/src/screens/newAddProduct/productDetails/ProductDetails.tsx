import { LinearGradient } from 'expo-linear-gradient'
import React, { useEffect, useState } from 'react';
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

const ProductDetails = () => {
    const [loading, setLoading] = useState<boolean>(false);

    const [animationData, setAnimationData] = useState(null);
    const [animationData2, setAnimationData2] = useState(null);
    const animationUrl = 'https://lottie.host/10d8fe7c-da4e-406f-828f-739de5c14900/yAsA3RV7sp.json';
    const animationUrl2 = 'https://lottie.host/fda13b29-cf66-4c44-8e54-ec7ca0ea07f7/gpEKl3IwH6.json';
  

    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [page, setPage] = useState(0);


  useEffect(() => {
    const fetchAnimation = async () => {
      try {
        const response = await fetch(animationUrl);
        const data = await response.json();
        setAnimationData(data);
      } catch (error) {
        console.error('Error loading Lottie animation:', error);
      }
    };

    fetchAnimation();
  }, []);
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
                    page === 0 ?
                        <ProductDetailsOne form={form} setForm={setForm} setPage={setPage} page={page} />
                        : 
                    page === 1 ?
                    <ProductDetailstwo form={form} setForm={setForm} setPage={setPage} page={page}/>
                    :null
                }

            </LinearGradient>
        </SafeAreaView>
    )
}


export default ProductDetails