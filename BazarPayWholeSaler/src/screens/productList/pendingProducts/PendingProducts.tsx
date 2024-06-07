
import React, { useCallback, useContext, useEffect, useState } from "react";
import ProductCard from "../../../components/shared/productCard/ProductCard";
import FavGroup from "../../../components/shared/favGroup/FavGroup";
import ProductList from "../ProductList";
import Colors from "../../../constants/Colors";
import { PaperProvider, Portal } from "react-native-paper";
import { IFavGroupAction } from "../../../@types/props/FavGroup.props";
import { useNavigation } from "expo-router";
import { api } from "../../../utils/api";
import WholesalerContext from "../../../contexts/wholesalerContext/wholesalerContext";

const PendingProducts = () => {
  const navigation = useNavigation<any>();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState<number>(1);

  const { wholesaler } = useContext(WholesalerContext);

  const handleNavigateAddProduct = () => {
    navigation.navigate("ManualAddProduct");
  };

  const action_list: IFavGroupAction[] = [
    {
      icon: "star",
      label: "দ্রুত পণ্য যোগ করুন",
      color: Colors.light.secondary,
      onPress: () => console.log("Pressed star"),
    },
    {
      icon: "cart",
      label: "নতুন পণ্য যোগ করুন",
      color: Colors.light.secondary,
      onPress: handleNavigateAddProduct,
    },
  ];

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const filter = {
        page,
        wholesaler_object_id: wholesaler?._id,
        product_status:"PENDING"
      };
      const response = await api.product.getProductList(filter);
      console.log("==========>pending products",response)
      setProducts(response.result);
    } catch (error) {
      console.error("Failed to fetch products", error);
    } finally {
      setLoading(false);
    }
  }, [wholesaler, page]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <>
      <PaperProvider>
        <Portal>
          <ProductList loading={loading} products={products}/>
          <FavGroup action_list={action_list} />
        </Portal>
      </PaperProvider>
    </>
  );
};

export default PendingProducts;
