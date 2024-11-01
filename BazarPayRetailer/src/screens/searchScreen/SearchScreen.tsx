import Feather from '@expo/vector-icons/Feather';
import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Animated,
  TextInput,
  TouchableOpacity,
  Image,
  Text,
  ActivityIndicator,
} from 'react-native';
import Colors from '../../constants/Colors';

import LottieView from 'lottie-react-native';
import { api } from '../../utils/api';
import ProductCard from '../../components/shared/productSmallCard.tsx/ProductSmallCard';
import Ionicons from '@expo/vector-icons/build/Ionicons';
import { useNavigation } from 'expo-router';
import { styles } from './style';
import SearchProductList from './searchProductList/SearchProductList';

export const SearchScreen = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [products, setProducts] = useState<any>(null);
  const [text, setText] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [searched, setSearched] = useState<boolean>(false);

  const [animationData, setAnimationData] = useState(null);
  const [animationData2, setAnimationData2] = useState(null);
  const animationUrl = 'https://lottie.host/10d8fe7c-da4e-406f-828f-739de5c14900/yAsA3RV7sp.json';
  const animationUrl2 = 'https://lottie.host/fda13b29-cf66-4c44-8e54-ec7ca0ea07f7/gpEKl3IwH6.json';

  const navigation: any = useNavigation();
    const handleNavigate = () => {
      navigation.goBack()
    };


  const getAllProducts = async () => {
    setProducts([])
    setLoading(true)
    try {
      const filter = {
        name: text
      }
      const result = await api.product.getProductListBySearch(filter)
      setProducts(result)
      setSearched(true)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
      setSearched(true)
    }
  }


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


  const translateHeader = scrollY.interpolate({
    inputRange: [0, 80],
    outputRange: [0, -80],
    extrapolate: 'clamp',
  });


  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>

      <Animated.View
        style={[
          styles.header,
          { transform: [{ translateY: translateHeader }] },
        ]}>
        <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center" ,width:"20%"}}>
          
          <TouchableOpacity style={{marginBottom: -60,padding:12,borderRadius:12,zIndex:100 ,backgroundColor:"#cc5200"}} onPress={handleNavigate}>

          <Ionicons name="arrow-back" size={24} color="#fff" />
          
          </TouchableOpacity>
          
          {animationData ? (
            <LottieView
              source={animationData}
              autoPlay
              loop
              style={{ width: 400, height: 300, marginBottom: -60 ,marginLeft:"-50%"}} // Adjust size as needed
            />
          ) : (
            <ActivityIndicator size="small" color="#0000ff" />
          )}
        </View>


        <View style={styles.inputWrapper}>

          <TextInput
            placeholder="Search any Product here..."
            placeholderTextColor="#05141c"
            style={styles.input}
            onChangeText={(text) => {
              setText(text);
            }}
            value={text}
          />


          <TouchableOpacity
            onPress={getAllProducts}
            style={{ backgroundColor: Colors.light.yellow, borderRadius: 10, width: "20%", marginLeft: 5, alignItems: "center", justifyContent: "center" }}>
            <Feather
              color={Colors.light.orange}
              name="search"
              size={25} />
          </TouchableOpacity>
        </View>

      </Animated.View>
      
      <SearchProductList searched={searched} products={products} loading={loading} animationData2={animationData2} scrollY={scrollY} />

    </View>
  );
}
