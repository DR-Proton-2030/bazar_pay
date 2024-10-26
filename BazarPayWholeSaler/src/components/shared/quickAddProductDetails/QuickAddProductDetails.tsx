
import React, { useContext, useEffect, useState } from 'react';
import {
    StyleSheet,
    StatusBar,
    View,
    ScrollView,
    Image,
    Text,
    TouchableOpacity,
    SafeAreaView,
    Alert,
    KeyboardAvoidingView,
    Platform,
    TextInput,
} from 'react-native';
import FeatherIcon from '@expo/vector-icons/Feather';
import QuickAddProductForm from '../../main/quickAddProductForm/QuickAddProductForm';
import { api } from '../../../utils/api';
import { inputFields } from '../../../constants/quickProduct/inputField';
import AuthContext from '../../../contexts/authContext/authContext';
import Colors from '../../../constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './Style';
import { ActivityIndicator } from 'react-native-paper';
import LottieView from 'lottie-react-native';
import { useNavigation } from 'expo-router';


export const QuickAddProductDetails = ({ logoSource, productName, product_description, productId, productPercent }: any) => {

    const { user } = useContext(AuthContext);
    const navigation: any = useNavigation<any>();
    const [expanded, setExpanded] = useState(false);
    
    const [formValues, setFormValues] = useState<any>({
        quantity: 0,
        buyingPrice: 0,
        markedPrice: 0,
        discount: 0,
        sellingPrice: 0,
        currentStock: 0,
        sellingStatus: "",
    });
    const isLongText = product_description.length > 30;

    const [loading, setLoading] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);

    const [animationData1, setAnimationData1] = useState(null);
    const animationUrl1 = 'https://lottie.host/fb1e6af8-9706-458a-90df-c5f9f44ed169/bQFk73xjws.json';

    const [animationData2, setAnimationData2] = useState(null);
    const animationUrl2 = 'https://lottie.host/fda13b29-cf66-4c44-8e54-ec7ca0ea07f7/gpEKl3IwH6.json';

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



    const handleInputChange = (key: string, value: string) => {
        if (key === "discount") {
            console.log("===>discount", value);
            setFormValues(
                Object.assign(
                    formValues,
                    {},
                    {
                        ["sellingPrice"]:
                            Number(formValues.markedPrice) * ((100 - Number(value)) / 100),
                    }
                )
            );
        }
        if (key === "markedPrice") {
            console.log("====>", value);
            setFormValues(
                Object.assign(
                    formValues,
                    {},
                    {
                        ["sellingPrice"]:
                            Number(value) * ((100 - Number(formValues.discount)) / 100),
                    }
                )
            );
        }
        setFormValues(Object.assign({}, formValues, { [key]: value }));
    };

    const AfterProfitSellingPrice = (price: number) => {
        const val = price + (price * productPercent) / 100
        return val;
    }
    const handleSubmit = async () => {
        setLoading(true);
        const productToUpload = {
            product_object_id: productId,
            wholesaler_object_id: user?._id ,
            buying_price: parseFloat(formValues.buyingPrice),
            marked_price: parseFloat(formValues.markedPrice),
            discount: parseFloat(formValues.discount),
            selling_price: AfterProfitSellingPrice(formValues.sellingPrice),
            current_stock: parseInt(formValues.quantity),
            selling_status: formValues.sellingStatus || "In Stock",
        };

        try {
            const response = await api.wholesaler.WholesalerUploadProduct(
                productToUpload
            );
            console.log("Product upload response:", response);
            setLoading(false)
            setSuccess(true)
        } catch (error) {
            console.error("Error uploading product:", error);
            setLoading(false)
        }
        
    };


    return (
        <>
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
                            পণ্য আপলোড হচ্ছে...
                        </Text>
                    </View>

                </>
            ) : success && animationData1 ? (
                <View style={{ marginVertical: "auto"}}>
                    <LottieView
                        source={animationData1}
                        autoPlay
                        // loop
                        style={{ width: 400, height: 300, }}
                    />
                    <View style={{ marginHorizontal: "auto", alignItems: "center", marginTop: -10 }}>
                        <Text style={{ fontWeight: "600", fontSize: 30 ,textAlign:"center"}}>
                        আপনার পণ্যটি স্টকে 
                        </Text>
                        <Text style={{ fontWeight: "600", fontSize: 30 ,textAlign:"center"}}>
                        যোগ করা হয়েছে
                        </Text>
                       
                    </View>
                </View>
            ) :
                <View style={{ flex: 1, backgroundColor: Colors.light.grayBg, }}>

                    <StatusBar barStyle="light-content" />

                    <SafeAreaView style={styles.header}>
                        <View style={styles.headerAction}>
                            <TouchableOpacity
                                onPress={()=>navigation.goBack()}>
                                <FeatherIcon
                                    color="#1d1d1d"
                                    name="arrow-left"
                                    size={24} />
                            </TouchableOpacity>
                        </View>
                    </SafeAreaView>

                    <ScrollView contentContainerStyle={styles.content}>
                        <View style={styles.container}>
                            <Image
                                alt=""
                                source={{
                                    uri: logoSource
                                }}
                                style={styles.hero}
                            />
                            <LinearGradient
                                colors={['rgba(0, 0, 0, 0.6)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.6)']}
                                style={StyleSheet.absoluteFillObject}
                            />
                        </View>

                        <View style={styles.section}>
                            <Text style={styles.title}>{productName}</Text>

                            <View>
      <Text
        style={styles.text}
        numberOfLines={expanded ? undefined : 2} // Show limited lines when not expanded
        ellipsizeMode="tail"
      >
        {product_description}
      </Text>
      {
        isLongText &&  <TouchableOpacity onPress={() => setExpanded(!expanded)}>
        <Text style={styles.readMoreText}>{expanded ? 'Read less' : 'Read more'}</Text>
      </TouchableOpacity>
      }
       
    </View>
                        </View>

                        <View style={styles.section}>
                            <View style={styles.sectionHeader}>
                                <View>
                                    <Text style={styles.sectionTitle}>পণ্যের স্টকের বিবরণ</Text>

                                    <Text style={styles.sectionSubtitle}>স্টক বিবরণ দিন</Text>
                                </View>

                                <View style={styles.sectionBadge}>
                                    <Text style={styles.sectionBadgeText}>Required</Text>
                                </View>
                            </View>

                            <View style={styles.sectionOptions}>
                                <View style={styles.inputContainer}>
                                    {inputFields.map((option, index) => (
                                        <View style={styles.input}>
                                            <Text style={styles.inputLabel}>{option.label}</Text>
                                            <TextInput
                                                clearButtonMode="while-editing"
                                                onChangeText={(text) => handleInputChange(option.field, text)}
                                                // placeholder="এখানে পণ্যের নাম লিখুন"
                                                placeholderTextColor="#6b7280"
                                                style={styles.inputControl}
                                                value={formValues[option.field]}
                                                keyboardType='number-pad'
                                                
                                            />
                                        </View>

                                    ))}

                                </View>
                                <TouchableOpacity
                                    onPress={handleSubmit}
                                    style={{ flex: 1, paddingHorizontal: 24, marginBottom: 20 }}>
                                    <View style={styles.btn}>
                                        <Text style={styles.btnText}>Add to Stock</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>


                    </ScrollView>

                </View>
            }
        </>
    );
}
