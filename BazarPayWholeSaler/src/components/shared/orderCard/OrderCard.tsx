import React, { useState } from 'react';
import { View, StyleSheet, Image, Animated } from 'react-native';
import { Card, Text, Chip } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

const OrderCard = ({ order }: any) => {
  const { productImage, productName, orderStatus, orderDate, orderId, quantity, price } = order;

  // Animated values for animation
  const [translateX] = useState(new Animated.Value(0));
  const [opacity] = useState(new Animated.Value(1));
  const [backgroundColor] = useState(new Animated.Value(0)); // For interpolating background color

  // Get status icon based on order status
  const getStatusIcon = (status: any) => {
    switch (status) {
      case 'Completed':
        return <MaterialIcons name="check-circle" size={20} color="green" />;
      case 'Pending':
        return <MaterialIcons name="pending" size={20} color="orange" />;
      case 'Cancelled':
        return <MaterialIcons name="cancel" size={20} color="red" />;
      default:
        return <MaterialIcons name="pending" size={20} color="gray" />;
    }
  };

  // Handle gesture events
  const onGestureEvent = Animated.event(
    [{ nativeEvent: { translationX: translateX } }],
    { useNativeDriver: true }
  );

  const onHandlerStateChange = ({ nativeEvent }: any) => {
    if (nativeEvent.state === State.END) {
      if (nativeEvent.translationX > 50) {
        // Swipe right animation (green background)
        Animated.timing(translateX, {
          toValue: 100,
          duration: 200,
          useNativeDriver: true,
        }).start();
        Animated.timing(opacity, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }).start();
        Animated.timing(backgroundColor, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }).start();
      } else if (nativeEvent.translationX < -50) {
        // Swipe left animation (red background)
        Animated.timing(translateX, {
          toValue: -100,
          duration: 200,
          useNativeDriver: true,
        }).start();
        Animated.timing(opacity, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }).start();
        Animated.timing(backgroundColor, {
          toValue: -1,
          duration: 200,
          useNativeDriver: true,
        }).start();
      } else {
        // Spring back to the initial position if swipe is not enough
        Animated.spring(translateX, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }).start();
      }
    }
  };

  // Interpolate background color based on translateX value
  const interpolatedBackgroundColor = backgroundColor.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: ['#FF0000', '#FFFFFF', '#00FF00'],
  });

  return (
    <PanGestureHandler
      onGestureEvent={onGestureEvent}
      onHandlerStateChange={onHandlerStateChange}
    >
      <Animated.View style={[styles.animatedCard, { transform: [{ translateX }], opacity, }]}>
        <Card style={[styles.card,{backgroundColor: interpolatedBackgroundColor }]}>
          <Card.Content style={styles.cardContent}>
            <View style={styles.row}>
              <Image source={{ uri: productImage }} style={styles.productImage} />
              <View style={styles.infoContainer}>
                <Text style={styles.productName}>{productName}</Text>
                <View style={styles.detailsRow}>
                  <Text style={styles.details}>Order ID: {orderId}</Text>
                  <Text style={styles.details}>Order Date: {orderDate}</Text>
                </View>
                <View style={styles.detailsRow}>
                  <Text style={styles.details}>Quantity: {quantity}</Text>
                  <Text style={styles.details}>Price: ৳{price}</Text>
                </View>
                <View style={styles.status}>
                  <Chip icon={() => getStatusIcon(orderStatus)}>{orderStatus}</Chip>
                </View>
              </View>
            </View>
          </Card.Content>
        </Card>
      </Animated.View>
    </PanGestureHandler>
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

export default OrderCard;
