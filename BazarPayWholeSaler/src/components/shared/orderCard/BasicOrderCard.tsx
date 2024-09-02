
import React, { useState } from 'react';
import { View, StyleSheet, Image, Animated } from 'react-native';
import { Card, Text, Chip } from 'react-native-paper';
import { MaterialIcons ,MaterialCommunityIcons} from '@expo/vector-icons';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { useNavigation } from 'expo-router';

const BasicOrderCard = ({ order }: any) => {
  const { product, order_status,_id, createdAt, order_quantity, price } = order;

  // Animated values for animation
  const [translateX] = useState(new Animated.Value(0));
  const [opacity] = useState(new Animated.Value(1));
  const [backgroundColor] = useState(new Animated.Value(0)); // For interpolating background color

  // Get status icon based on order status
  const getStatusIcon = (order_status: any) => {
    switch (order_status) {
      case 'CONFIRMED':
        return <MaterialIcons name="check-circle" size={20} color="green" />;
      case 'PENDING':
        return <MaterialIcons name="pending" size={20} color="orange" />;
      case 'SHIPPED':
        return <MaterialCommunityIcons name="truck-delivery-outline" size={20} color="blue" />;
      default:
        return <MaterialIcons name="pending" size={20} color="gray" />;
    }
  };

  const navigation: any = useNavigation();
  const handleNavigate = () => {
    navigation.navigate("orderDetails", { order: order });
  };

  // Interpolate background color based on translateX value
  const interpolatedBackgroundColor = backgroundColor.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: ['#FF0000', '#FFFFFF', '#00FF00'],
  });

  return (
    
        <Card onPress={handleNavigate} style={[styles.card,{backgroundColor: interpolatedBackgroundColor }]}>
          <Card.Content style={styles.cardContent}>
            <View style={styles.row}>
              <Image source={{ uri: product?.product_image }} style={styles.productImage} />
              <View style={styles.infoContainer}>
                <Text style={styles.productName}>{product?.product_name}</Text>
                <View style={styles.detailsRow}>
                  <Text style={styles.details}>Order Date: {createdAt}</Text>
                </View>
                <View style={styles.detailsRow}>
                  <Text style={styles.details}>Quantity: {order_quantity}</Text>
                </View>
                <View style={styles.status}>
                  <Chip icon={() => getStatusIcon(order_status)}>{order_status}</Chip>
                </View>
              </View>
            </View>
          </Card.Content>
        </Card>
     
  );
};

const styles = StyleSheet.create({
  animatedCard: {
  },
  card: {
    margin: 10,
    borderRadius: 8,
    backgroundColor:"white"
  },
  cardContent: {
    paddingVertical: 10,
  },
  row: {
    flexDirection: 'row',
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 4,
  },
  infoContainer: {
    marginLeft: 10,
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  details: {
    fontSize: 12,
    color: '#555',
  },
  status: {
    marginTop: 10,
  },
});

export default BasicOrderCard;
