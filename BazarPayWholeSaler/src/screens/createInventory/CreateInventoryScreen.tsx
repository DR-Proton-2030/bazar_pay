import React, { useContext, useEffect, useState } from 'react';
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { Header } from './header/Header';
import { styles } from './styles';
import Colors from '../../constants/Colors';
import { ActivityIndicator } from 'react-native-paper';
import { api } from '../../utils/api';
import AuthContext from '../../contexts/authContext/authContext';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as Location from 'expo-location';
import LottieView from 'lottie-react-native';
import { useNavigation } from 'expo-router';
import axios from 'axios';


export const CreateInventoryScreen = () => {

    const { user } = useContext(AuthContext)
    const [page, setPage] = useState(0);
    const [loadingLocation, setLoadingLocation] = useState(true);
    const [loadingSubmit, setLoadingSubmit] = useState(false);
    const [name, setName] = useState('');

    const [coordinates, setCoordinates] = useState<any>({ lat: null, long: null });
    const [city, setCity] = useState<any>();
	const [state, setState] = useState<any>();

    const [location, setLocation] = useState('Location fetched'); // Example location for now
    const [errorMsg, setErrorMsg] = useState<any>(null);


    const [animationData1, setAnimationData1] = useState(null);
    const animationUrl1 = 'https://lottie.host/64744a89-5514-41c3-8798-59b4d263d2c8/4f0dfWBzpO.json';

    const navigation: any = useNavigation<any>();
  


    const handleCreateInventory = async () => {
        try {
            setLoadingSubmit(true);

            const inventoryData = {
                wholesaler_object_id: user?._id || '60af88487c7d4a001c9d2f13', // Replace with actual wholesaler ID
                name,
                location: {
                    type: 'Point',
                    coordinates: [coordinates.lat, coordinates.long], // Example coordinates
                },
            };

            const result = await api.inventory.createInventory(inventoryData);
            setName('');
            setLocation('');
            setPage(0); // Reset to first page
            setLoadingSubmit(false);
            navigation.navigate("homePage");
        } catch (error) {
            Alert.alert('Error', 'Failed to create inventory');
            setLoadingSubmit(false);
        } 
    };

    const fetchAddressFromCoordinates = async (lat:any, long:any) => {
        try {
            const response = await axios.get(
                `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${long}&format=json`,
                {
                    headers: {
                        'User-Agent': 'YourAppName/1.0', // Replace with your app name and contact email
                        'Accept-Language': 'en', // Optional: specify preferred language
                    },
                }
            );
    
            const { address } = response.data;
            let city = address.city || address.town || address.village || address.hamlet || address.suburb || "Unknown";
            let state = address.state || address.county || "Unknown";
            console.log(state);
            setCity(city);
            setState(state);
            setLoadingLocation(false);
        } catch (error) {
            console.error("Error fetching address", error);
        }
    };
    const getGeoLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        console.log(location)
        setCoordinates({
            lat: location.coords.latitude,
            long: location.coords.longitude,
        });

        fetchAddressFromCoordinates(location.coords.latitude,location.coords.longitude)
    }
      
        useEffect(() => {
            getGeoLocation();
        }, []);

    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }



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


    return (

        <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
            <KeyboardAwareScrollView style={styles.container}>
                <StatusBar style='dark' />
                <LinearGradient colors={['#cce0ff', 'transparent']} start={{ x: 0.1, y: 0 }} end={{ x: 0.1, y: 0.2 }} style={{ flex: 1 }}>
                    {
                        loadingSubmit ?
                            <>
                              {animationData1 ? (
                                <>

                <LottieView
                    source={animationData1}
                    autoPlay
                    loop
                    style={{ width: 400, height: 400, marginTop:50 }} // Adjust size as needed
                    />
                    <View style={{ marginHorizontal: "auto", alignItems: "center", marginTop: -10 }}>
              <Text style={{ fontWeight: "600", fontSize: 30 }}>
                একটু অপেক্ষা করুন
              </Text>
              <Text style={{ fontWeight: "600", fontSize: 16, marginTop: 10 }}>
              ইনভেন্টরি যোগ আপলোড হচ্ছে...
              </Text>
            </View>
                    </>
            ) : (
                <ActivityIndicator size="small" color="#0000ff" />
            )}

                            </>
                            :
                            <>
                                <Header page={page} setPage={setPage} />
                                <ScrollView style={{ paddingHorizontal: 20 }}>
                                    {page === 0 ? (
                                        <>
                                            <View style={styles.input}>
                                                <Text style={styles.inputLabel}>ইনভেন্টরির নাম</Text>
                                                <TextInput
                                                    clearButtonMode="while-editing"
                                                    onChangeText={(text) => setName(text)}
                                                    placeholder="এখানে ইনভেন্টরির নাম লিখুন"
                                                    placeholderTextColor="#6b7280"
                                                    style={styles.inputControl}
                                                    value={name}
                                                />
                                            </View>
                                            <View style={styles.formAction}>
                                                <TouchableOpacity onPress={() => setPage(1)} style={styles.btn}>
                                                    <Text style={styles.btnText}>পরবর্তী পদক্ষেপে যান</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </>
                                    ) : (
                                        <>
                                            <View style={styles.input}>
                                                <Text style={styles.inputLabel}>ইনভেন্টরির লোকেশন</Text>
                                                <View style={[styles.inputControl, { flexDirection: 'row', alignItems: 'center', gap: 10 }]}>
                                                    {!loadingLocation ? (
                                                        <>
                                                            <AntDesign name="checkcircle" size={24} color="green" />
                                                            <Text style={{ fontWeight: '500', color: Colors.light.blue }}>{city},{state}</Text>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <ActivityIndicator />
                                                            <Text style={{ fontWeight: '500', color: Colors.light.blue }}>Location Fetching...</Text>
                                                        </>
                                                    )}
                                                </View>
                                            </View>
                                            <View style={styles.formAction}>
                                                <TouchableOpacity onPress={handleCreateInventory} style={styles.btn}>
                                                    {loadingSubmit ? (
                                                        <ActivityIndicator color="#fff" />
                                                    ) : (
                                                        <Text style={styles.btnText}>ইনভেন্টরি তৈরি করুন</Text>
                                                    )}
                                                </TouchableOpacity>
                                            </View>
                                        </>
                                    )}
                                </ScrollView>
                            </>

                    }

                </LinearGradient>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
};
