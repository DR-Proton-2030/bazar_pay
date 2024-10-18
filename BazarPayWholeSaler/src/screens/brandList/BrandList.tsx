import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import { api } from "../../utils/api";
import SmallBox from "../../components/shared/smallBox/SmallBox";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import { IBrand } from "../../@types/props/IBrand";
import { IPagination } from "../../@types/types/pagination";

const BrandList: React.FC = () => {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const [brandList, setBrandList] = useState<IBrand[]>([]);
  const { categoryId, subcategoryId } = route.params;
  const [pagination, setPagination] = useState<IPagination>({
    currentPage: 1,
    pageCount: 1,
  });

  const getAllBrandList = useCallback(async () => {
    const filter = {
      page: pagination.currentPage,
      limit: 10,
    };
    try {
      const result = await api.brands.getBrandList(filter);
      if (pagination.currentPage === 1) {
        setBrandList(result.result);
      } else {
        setBrandList((prevBrandList) => [...prevBrandList, ...result.result]);
      }
      setPagination(result.pagination);
    } catch (error) {
      console.log("error in getAllCategory", error);
    }
  }, [pagination.currentPage]);

  const handleNavigate = (id: string) => {
    navigation.navigate("quickProductList", {
      subcategoryId: subcategoryId,
      categoryId: categoryId,
      brandId: id,
    });
    console.log("first");
  };

  const handleLoadMore = () => {
    if (pagination.currentPage < pagination.pageCount) {
      console.log("===>called the handleLoadMore");
      setPagination((prevPagination) => ({
        ...prevPagination,
        currentPage: prevPagination.currentPage + 1,
      }));
    }
  };

  useEffect(() => {
    getAllBrandList();
  }, [getAllBrandList]);

  return (
    <FlatList
      data={brandList}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => (
        <View style={styles.brandItem}>
          <SmallBox
            title={item.name}
            logo={item.logo}
            icon={undefined}
            textColor={""}
            handleNavigate={() => handleNavigate(item._id)}
          />
        </View>
      )}
      contentContainerStyle={styles.container}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.5}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  brandItem: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
  brandText: {
    fontSize: 16,
    color: "black",
  },
});

export default BrandList;
