
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Image,
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  ActivityIndicator,
} from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { LinearGradient } from 'expo-linear-gradient';
import { globalStyle } from '../../globalStyles/globalStyles';
import { useNavigation } from 'expo-router';
import LottieView from 'lottie-react-native';

const { width, height } = Dimensions.get('window');

export const ProductAddOptionPage =()=> {
 
  const navigation: any = useNavigation<any>();


  const handleNavigateToQuickProduct = () => {
    navigation.navigate("categoryPage");
  };

  const handleNavigateToNewProduct = () => {
    navigation.navigate("newProductCreate");
  };
  

  const [loading, setLoading] = useState<boolean>(false);


  const [animationData2, setAnimationData2] = useState(null);
  const animationUrl2 = 'https://lottie.host/e8ca7db4-2edd-4a4d-b488-a100da8ff571/uFA60ubJTO.json';


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

  return (
    <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
        <LinearGradient
    colors={['#cce0ff', 'transparent']}
    start={{ x: 0.1, y: 0 }}
    end={{ x: 0.1, y: 0.6 }}
    style={{
        flex: 1
    }}
  >
      <View style={[styles.background, ]} />

{animationData2 ? (
                  <LottieView
                    source={animationData2}
                    autoPlay
                    loop
                    style={{ width: 500, height: 500,marginTop:-0 }} // Adjust size as needed
                  />
                ) : (
                  <ActivityIndicator size="small" color="#0000ff" />
                )}
      <View style={styles.content}>
        <Text style={styles.title}>
        আপনি কোন পণ্য কিভাবে আপলোড করতে চান?
        </Text>
    
            <TouchableNativeFeedback
              onPress={handleNavigateToNewProduct}
              style={{borderRadius:20}}
              >
              <View style={[styles.radio, styles.radioActive]}>
                <View style={styles.radioIcon}>
                  <Feather color="#fff" name={'upload-cloud'} size={25} />
                </View>

                <View>
                  <Text style={styles.radioTitle}>নতুন পণ্য তৈরি করুন</Text>

                  <Text style={styles.radioSubtitle}>Lorem Ipsum</Text>
                </View>
              </View>
            </TouchableNativeFeedback>
         
            <TouchableNativeFeedback
              onPress={handleNavigateToQuickProduct}
              style={{borderRadius:20}}
              >
              <View style={[styles.radio, styles.radioActive]}>
                <View style={styles.radioIcon}>
                  <Feather color="#fff" name={'chevrons-up'} size={25} />
                </View>

                <View>
                  <Text style={styles.radioTitle}>দ্রুত পণ্য যোগ করুন</Text>

                  <Text style={styles.radioSubtitle}>Lorem Ipsum</Text>
                </View>
              </View>
            </TouchableNativeFeedback>
      </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width,
    height: height,
  },
  overflow: {
    backgroundColor: 'rgba(0,0,0,0.45)',
  },
  content: {
    marginTop: 'auto',
    marginBottom:80,
    alignItems: 'stretch',
    paddingHorizontal: 14,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: 'black',
    marginBottom: 40,
    paddingRight: 40,
    paddingLeft:10
  },
  footer: {
    paddingVertical: 16,
  },
  /** Radio */
  radio: {
    position: 'relative',
    paddingVertical: 15,
    paddingHorizontal: 12,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor:'#e6f2ff',
    marginBottom:15

  },
  radioActive: {
  },
  radioIcon: {
    width: 60,
    height: 60,
    borderRadius: 12,
    backgroundColor: '#007bff',
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
    elevation:5
  },
  radioTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
    marginBottom: 2,
  },
  radioSubtitle: {
    fontSize: 14,
    fontWeight: '400',
    color: '#878787',
  },
  radioCheck: {
    width: 24,
    height: 24,
    borderRadius: 9999,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007bff',
    marginLeft: 'auto',
    display: 'none',
  },
  radioCheckActive: {
    display: 'flex',
  },
  /** Button */
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    backgroundColor: '#007aff',
    borderColor: '#007aff',
  },
  btnText: {
    fontSize: 17,
    lineHeight: 24,
    fontWeight: '600',
    color: '#fff',
  },
});