import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, SafeAreaView, Button, ActivityIndicator } from "react-native";
import axios from "axios";
import ProductCard from "../../components/shared/productCard/ProductCard";
import { api } from "../../utils/api";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);


  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await api.product.getBannerList()
      setProducts(response);
      console.log(response)
      // setTotalPages(response);
    } catch (error) {
      console.error("Failed to fetch products", error);
    } finally {
      setLoading(false);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
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
          {products.map((product:any) => (
            <ProductCard
              key={product._id}
              title={product.product_name}
              buyingPrice={product.product_buying_price}
              sellingPrice={product.product_saling_price}
              stock={product.current_stock}
              uri={product?.product_image}
            />
          ))}
        </ScrollView>
      )}

    </SafeAreaView>
  );
};

export default ProductList;
