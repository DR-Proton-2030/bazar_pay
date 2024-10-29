import React, { useEffect, useState } from 'react'
import { styles } from '../styles'
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native'
import FeatherIcon from '@expo/vector-icons/Feather';
import LottieView from 'lottie-react-native';
import { useNavigation } from 'expo-router';

export const Header = ({ page, setPage }: any) => {

    const navigation = useNavigation()

    const [animationData1, setAnimationData1] = useState(null);
    const animationUrl1 = 'https://lottie.host/043f94ce-2e53-402d-995b-a8fec510357f/hGXqrzn8To.json';


    const [animationData2, setAnimationData2] = useState(null);
    const animationUrl2 = 'https://lottie.host/74660560-cdf8-46b9-9808-50641d2932dd/vF61FBTwfC.json';

    const handleBackPress = () => {
        if (page === 0) {
            navigation.goBack(); // Go back if on page 0
        } else {
            setPage(0); // Set page to 0 if on page 1
        }
    };


    useEffect(() => {
        const fetchAnimation = async () => {
            try {
                const response = await fetch(animationUrl1);
                const data = await response.json();
                setAnimationData1(data);
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
    const animationData = page === 0 ? animationData1 : animationData2;


    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={handleBackPress} style={{ zIndex: 50, padding: 10 }}>
                <View style={styles.headerBack}>
                    <FeatherIcon color="#fff" name="chevron-left" size={30} />
                </View>
            </TouchableOpacity >
            <View style={{ height: 400, marginTop: -60,}}>
            {animationData ? (
                <LottieView
                    source={animationData}
                    autoPlay
                    loop
                    style={{ width: 400, height: "100%", marginLeft: -10 }} // Adjust size as needed
                />
            ) : (
                <ActivityIndicator size="small" color="#0000ff" />
            )}
            </View>

           
            <Text style={[styles.title,]}>নতুন ইনভেন্টরি যোগ করুন!</Text>
            {
                page === 0 ? (
                    <Text style={styles.subtitle}>
                        নতুন ইনভেন্টরি যোগ করার জন্য একটি নাম উল্লেখ করুন যাতে এটি বিশেষায়িত হয়।
                    </Text>
                ) :
                    <Text style={styles.subtitle}>
                        ইনভেন্টরি যোগ করতে ইনভেন্টরির বর্তমান লোকেশন প্রয়োজন।
                    </Text>
            }

        </View>
    )
}
