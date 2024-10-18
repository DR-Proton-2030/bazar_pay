import FontAwesome from '@expo/vector-icons/build/FontAwesome';
import Feather from '@expo/vector-icons/Feather';
import React, { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  View,
  Animated,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
  Text,
  ActivityIndicator,
} from 'react-native';
import Colors from '../../constants/Colors';

import ll from "../../../assets/animations/category/categoryScroll.json"
import LottieView from 'lottie-react-native';
import { api } from '../../utils/api';
import ProductCard from '../../components/shared/productSmallCard.tsx/ProductSmallCard';
import LoaderANimation from '../../components/shared/loader/Loader';
import Ionicons from '@expo/vector-icons/build/Ionicons';
import { useNavigation } from 'expo-router';

export const SearchScreen = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [products, setProducts] = useState<any>([]);
  const [text, setText] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  const [animationData, setAnimationData] = useState(null);
  const [animationData2, setAnimationData2] = useState(null);
  const animationUrl = 'https://lottie.host/10d8fe7c-da4e-406f-828f-739de5c14900/yAsA3RV7sp.json';
  const animationUrl2 = 'https://lottie.host/fda13b29-cf66-4c44-8e54-ec7ca0ea07f7/gpEKl3IwH6.json';

  const navigation: any = useNavigation();
    const handleNavigate = () => {
      navigation.goBack()
    };


  const getAllProducts = async () => {
    setLoading(true)
    try {
      const filter = {
        name: text
      }
      const result = await api.product.getProductListBySearch(filter)
      setProducts(result)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
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
        console.log("first", data);
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
          
          <TouchableOpacity style={{marginBottom: -50,padding:0,zIndex:100}} onPress={handleNavigate}>

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
      <Animated.ScrollView
        contentContainerStyle={styles.content}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          {
            useNativeDriver: true,
          },
        )}
        scrollEventThrottle={1}>
        {
          products?.length > 0 ?
            <View style={styles.productContainer}>
              {products.map((product: any) => (
                <ProductCard key={product._id} product={product} categoryName={"categoryName"} />
              ))}
            </View>
            : loading ?
              <>
                {animationData2 ? (
                  <LottieView
                    source={animationData2}
                    autoPlay
                    loop
                    style={{ width: 400, height: 400 }} // Adjust size as needed
                  />
                ) : (
                  <ActivityIndicator size="small" color="#0000ff" />
                )}
                <Text style={{ fontSize: 22, textAlign: "center", marginTop: -140, fontWeight: "500" }}>
                  Searching....
                </Text>
              </>
              :
              <>
                {animationData2 ? (
                  <LottieView
                    source={animationData2}
                    autoPlay
                    loop
                    style={{ width: 400, height: 400 }} // Adjust size as needed
                  />
                ) : (
                  <ActivityIndicator size="small" color="#0000ff" />
                )}
                <Text style={{ fontSize: 22, textAlign: "center", marginTop: -140, fontWeight: "500" }}>
                  No search results yet
                </Text>
              </>
        }

      </Animated.ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 10,
    paddingTop: 230,
    backgroundColor: '#fff',
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
  productContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 26,
    lineHeight: 34,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 12,
  },
  /** Input */
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
