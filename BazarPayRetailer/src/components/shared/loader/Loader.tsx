import LottieView from 'lottie-react-native';
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, View } from 'react-native';

const LoaderANimation = () => {

    const [animationData, setAnimationData] = useState(null);
    const animationUrl = 'https://lottie.host/1d8012bf-d679-45d3-94a4-94b748d53b18/hBOqhVKY8Q.json';
  
    
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
  return (
   <View style={{backgroundColor:"#fff",padding:20,borderRadius:20,elevation:4,flex:1,}}>
    {animationData ? (
        <>
        <LottieView
          source={animationData}
          autoPlay
          loop
          style={{ width: 200, height: 200,marginBottom:-60 }} // Adjust size as needed
          />
          </>
      ) : (
        <ActivityIndicator size="small" color="#0000ff" />
      )}</View>
  )
}

export default LoaderANimation