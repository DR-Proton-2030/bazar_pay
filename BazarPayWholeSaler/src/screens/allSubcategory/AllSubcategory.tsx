import React, { useCallback, useEffect, useState } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { api } from "../../utils/api";
import SmallBox from "../../components/shared/smallBox/SmallBox";
import { useNavigation } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ISubcategory } from "../../@types/props/ISubcategory";
import { IPagination } from "../../@types/types/pagination";

type ParamList = {
  subcategoryPage: {
    categoryId: string;
  };
};

const AllSubcategory: React.FC = () => {
  const route = useRoute<RouteProp<ParamList, "subcategoryPage">>();
  const { categoryId } = route.params;
  const navigation = useNavigation<any>();
  const [subcategoryList, setSubcategoryList] = useState<ISubcategory[]>([]);
  const [pagination, setPagination] = useState<IPagination>({
    currentPage: 1,
    pageCount: 1,
  });

  const getAllSubCategory = useCallback(async () => {
    const filter = {
      page: pagination.currentPage,
      limit: 10,
      category_object_id: categoryId,
    };
    try {
      const result = await api.subcategory.getSubategoryList(filter);
      console.log("===>result", result);
      if (pagination.currentPage === 1) {
        setSubcategoryList(result.result);
      } else {
        setSubcategoryList((prevSubCategoryList) => [
          ...prevSubCategoryList,
          ...result.result,
        ]);
      }
      setPagination(result.pagination);
    } catch (error) {
      console.log("error in getAllCategory", error);
    }
  }, [pagination.currentPage]);

  const handleLoadMore = () => {
    if (pagination.currentPage < pagination.pageCount) {
      setPagination((prevPagination) => ({
        ...prevPagination,
        currentPage: prevPagination.currentPage + 1,
      }));
    }
  };

  const handleNavigate = (id: string) => {
    navigation.navigate("brandPage", {
      subcategoryId: id,
      categoryId: categoryId,
    });
    console.log("first");
  };

  useEffect(() => {
    getAllSubCategory();
  }, []);

  return (
    <FlatList
      data={subcategoryList}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => (
        <View style={styles.subcategoryItem}>
          <SmallBox
            title={item.name}
            logo={item.sub_category_image}
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
  subcategoryItem: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
  subcategoryText: {
    fontSize: 16,
    color: "black",
  },
});

export default AllSubcategory;
