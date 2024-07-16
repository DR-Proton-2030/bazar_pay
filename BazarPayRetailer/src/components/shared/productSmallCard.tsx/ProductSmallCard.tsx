import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './productSmallCardStyle';
import { useNavigation } from 'expo-router';

const ProductCard = ({ product }: any) => {
    const navigation: any = useNavigation();
    const handleNavigate = () => {
      navigation.navigate("wholesallersList",{productId:product?._id});
    };
    return (
        
        <View style={styles.card}>
            <TouchableOpacity onPress={handleNavigate}>
            <Image source={{ uri: product.product_image }} style={styles.image} />
            <Text style={styles.status}>
                Available
            </Text>
            <Text style={styles.name}>{product.product_name}</Text>
            <Text style={styles.description}>{product.product_description}</Text>
        </TouchableOpacity>
        </View>
    );
};


export default ProductCard;
