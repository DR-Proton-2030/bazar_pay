import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors';
import { useNavigation } from 'expo-router';

const CheckoutButtomSheet = ({Price,handleNavigate}:any) => {
    const [quantity, setQuantity] = useState(1);
    const increaseQuantity = () => setQuantity(prev => prev + 10);
    const decreaseQuantity = () => {
        console.log("first")
        setQuantity(prev => (prev > 10 ? prev - 10 : 10));
        console.log(quantity)
    }
    const totalPrice = quantity * Price;
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.details}>
                    <View style={{backgroundColor:Colors.light.cardColor,paddingHorizontal:10,paddingVertical:15,borderRadius:20,marginRight:5}}>

                        <Text style={styles.productName}>Total Unit of order</Text>
                        <View style={styles.quantityContainer}>
                            <TouchableOpacity onPress={decreaseQuantity} style={styles.quantityButton}>
                                <Text style={styles.quantityButtonText}>-</Text>
                            </TouchableOpacity>
                            <Text style={styles.quantityText}>{quantity}</Text>
                            <TouchableOpacity onPress={increaseQuantity} style={styles.quantityButton}>
                                <Text style={styles.quantityButtonText}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{backgroundColor:Colors.light.cardColor,width:"45%",paddingHorizontal:20,paddingVertical:15,borderRadius:20,justifyContent:"center",
                        }}>
                        <Text style={styles.title}>Total: </Text>
                        <Text style={styles.totalPrice}>{totalPrice}৳</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity onPress={()=>handleNavigate({quantity})} style={styles.payButton}>
                <Text style={styles.payButtonText}>Go to payments</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: 'white', // Ensure the background color is white for contrast
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingTop:10
    },
    productImage: {
        width: 60,
        height: 60,
        borderRadius: 10,
        marginRight: 20,
    },
    details: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    productName: {
        fontSize: 14,
        fontWeight: '700',
        marginBottom: 10,
        color: "gray",
        textAlign:"center"
    },
    title: {
        fontSize: 14,
        fontWeight: '700',
        marginBottom: 10,
        color: "gray",
    },
    productPrice: {
        fontSize: 16,
        color: Colors.light.orange,
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    quantityButton: {
        width: 35,
        height: 35,
        borderRadius: 10,
        backgroundColor: Colors.light.text,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    quantityButtonText: {
        fontSize: 18,
        color: 'white',
    },
    quantityText: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingHorizontal:5
    },
    totalPrice: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: -5
    },
    payButton: {
        backgroundColor: Colors.light.orange,
        paddingVertical: 12,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
    },
    payButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default CheckoutButtomSheet;
