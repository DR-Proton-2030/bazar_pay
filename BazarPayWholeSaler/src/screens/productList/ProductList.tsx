import React, { useState, useEffect, useContext } from "react";
import { View, Text, ScrollView, SafeAreaView, ActivityIndicator } from "react-native";
import ProductCard from "../../components/shared/productCard/ProductCard";
import { api } from "../../utils/api";
import WholesalerContext from "../../contexts/wholesalerContext/wholesalerContext";

const ProductList = () => {
  const{wholesaler}=useContext(WholesalerContext)
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const userObjectId = wholesaler?._id; 

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await api.product.getBannerList();
      const filteredProducts = response.filter((product: any) => product.wholesalerSaler_id === userObjectId);
      setProducts(filteredProducts);
      console.log(filteredProducts);
    } catch (error) {
      console.error("Failed to fetch products", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <ScrollView contentContainerStyle={{ marginTop: 5 }}>
          {products.map((product: any) => (
            <ProductCard
              key={product._id}
              title={product.product_name}
              buyingPrice={product.product_buying_price}
              sellingPrice={product.product_saling_price}
              stock={product.current_stock}
              uri={product.product_image}
              product={product}
            />
          ))}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default ProductList;
