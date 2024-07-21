import React from 'react'
import { View, Text, Image } from 'react-native'
import Colors from '../../../constants/Colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import { TouchableOpacity } from 'react-native-gesture-handler';
const ProductOverView = () => {
    const navigation: any = useNavigation();
    const handleNavigate = () => {
        navigation.navigate("RatingsPage");
    };
    return (
        <View style={{ paddingHorizontal: 20, marginVertical: 20 }}>
            <View style={{ flexDirection: "row", gap: 20 }}>
                <View style={{ width: "40%", height: 150, backgroundColor: Colors.light.border, borderRadius: 20, padding: 12 }}>
                    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                        <View>

                        </View>
                        <View style={{ backgroundColor: Colors.light.orange, width: 30, height: 30, borderRadius: 999, alignItems: "center", justifyContent: "center" }}>
                            <Feather name="arrow-up-right" size={24} color={Colors.light.background} />
                        </View>

                    </View>
                </View>
                <View style={{ width: "52%", gap: 10 }}>
                    <View style={{
                        height: 90, backgroundColor: Colors.light.border, borderRadius: 20,
                        padding: 15, justifyContent: "space-between"
                    }}>
                        <View style={{ flexDirection: "row", gap: 1, alignItems: "center" }}>

                            <Feather name="box" size={20} color="green" />
                            <Text style={{ fontWeight: "600", marginLeft: 5, fontSize: 13, color: "gray" }}>
                                In Stock
                            </Text>
                        </View>
                        <View style={{ backgroundColor: Colors.light.grayBtn, width: "100%", height: 1 }} />
                        <View style={{ flexDirection: "row", gap: 1, alignItems: "center" }}>
                            <MaterialCommunityIcons name="truck-fast-outline" size={20} color="brown" />
                            <Text style={{ fontWeight: "600", color: "gray", fontSize: 13, marginLeft: 5 }}>
                                Delivery:
                            </Text>
                            <Text style={{ fontWeight: "600", marginLeft: 2, fontSize: 13, color: "gray" }}>
                                2-3 days
                            </Text>
                        </View>
                    </View>
                    <View style={{
                        height: 50, backgroundColor: Colors.light.border, borderRadius: 20,
                        flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 15, alignItems: "center"
                    }}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>

                            <Feather name="star" size={16} color="black" />
                            <Text style={{ fontWeight: "600", marginLeft: 3, fontSize: 15, color: "gray" }}>4.8</Text>
                        </View>
                        <View style={{ backgroundColor: Colors.light.grayBtn, width: 1, height: 35 }} />
                        <TouchableOpacity onPress={handleNavigate}>
                            <Text style={{ fontWeight: "600", fontSize: 12, color: "gray" }}>See All Reviews</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ProductOverView