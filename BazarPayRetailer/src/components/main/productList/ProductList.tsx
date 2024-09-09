import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import AppHeader from '../../shared/commonHeader/CommonHeader';
import ProductCard from '../../shared/productSmallCard.tsx/ProductSmallCard';
import { api } from '../../../utils/api';
import { useRoute } from "@react-navigation/native";

const ProductList = () => {
  const [products, setProducts] = useState<any>([]);
  const route = useRoute();
  const {  subcategory, categoryId ,categoryName }:any = route.params;
const getAllProducts = async()=>{
  try {
    const filter={
      category_object_id:categoryId,
      subcategory_object_id:subcategory?._id,
      // page:"1"
    }
    const result = await api.product.getProductList(filter)
    setProducts(result.result)
  } catch (error) {
    console.log(error)
  }
}

useEffect(() => {
  getAllProducts();
}, []);
  return (
    <View style={styles.container}>
      <AppHeader title={subcategory?.name} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.productContainer}>
          {products.map((product:any) => (
            <ProductCard key={product._id} product={product} categoryName={categoryName}/>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  productContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent:'center',
  },
});

export default ProductList;

