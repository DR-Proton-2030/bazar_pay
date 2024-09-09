import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Colors from '../../../constants/Colors';
import WholesalerDetails from './wholeSalerDetails/WholesalerDetails';

const ProductSpecification = () => (
  <View style={styles.contentContainer}>
    <Text>Product Specification Content</Text>
  </View>
);



const BrandDetails = () => (
  <View style={styles.contentContainer}>
    <Text>Brand Details Content</Text>
  </View>
);

const ProductSpecificationTab = ({productDetails}:any) => {
  const [activeTab, setActiveTab] = useState('ProductSpecification');

  const renderContent = () => {
    switch (activeTab) {
      case 'ProductSpecification':
        return <ProductSpecification />;
      case 'WholesalerDetails':
        return <WholesalerDetails wholesalerDetails={productDetails?.wholesaler}/>;
      case 'BrandDetails':
        return <BrandDetails />;
      default:
        return <ProductSpecification />;
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 ,paddingBottom:100}}>
      <View style={styles.container}>
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'ProductSpecification' && styles.activeTabButton]}
            onPress={() => setActiveTab('ProductSpecification')}
          >
            <Text style={[styles.tabButtonText, activeTab === 'ProductSpecification' && styles.activeTabText]}>Product Specification</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'WholesalerDetails' && styles.activeTabButton]}
            onPress={() => setActiveTab('WholesalerDetails')}
          >
            <Text style={[styles.tabButtonText, activeTab === 'WholesalerDetails' && styles.activeTabText]}>Wholesaler Details</Text>
          </TouchableOpacity>
         
        </View>
        {renderContent()}
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabContainer: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  tabButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderColor: 'gray',
    marginHorizontal: 4,
  },
  activeTabButton: {
    backgroundColor: Colors.light.cardColor,
  },
  tabButtonText: {
    fontSize: 13,
    color: 'gray',
    fontWeight:"700"
  },
  activeTabText: {
    color: 'gray',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
});

export default ProductSpecificationTab;
