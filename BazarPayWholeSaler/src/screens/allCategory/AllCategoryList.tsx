import React, { useCallback, useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { api } from "../../utils/api";
import SmallBox from "../../components/shared/smallBox/SmallBox";
import { ICategory } from "../../@types/props/ICategory";
import { ScrollView } from "react-native-gesture-handler";
import { IPagination } from "../../@types/types/pagination";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

const AllCategoryList: React.FC = () => {
  const [categoryList, setCategoryList] = useState<ICategory[]>([]);
  const navigation = useNavigation<any>();
  const [pagination, setPagination] = useState<IPagination>({
    currentPage: 1,
    pageCount: 1,
  });

  const getAllCategory = useCallback(async () => {
    const filter = {
      page: pagination.currentPage,
      limit: 10,
    };
    try {
      const result = await api.category.getCategoryList(filter);
      if (pagination.currentPage === 1) {
        setCategoryList(result.result);
      } else {
        setCategoryList((prevCategoryList) => [
          ...prevCategoryList,
          ...result.result,
        ]);
      }
      setPagination(result.pagination);
    } catch (error) {
      console.log("error in getAllCategory", error);
    }
  }, [pagination.currentPage]);

  const handleNavigate = (id: string) => {
    navigation.navigate("subcategoryPage", { categoryId: id });
  };

  const handleLoadMore = () => {
    if (pagination.currentPage < pagination.pageCount) {
      setPagination((prevPagination) => ({
        ...prevPagination,
        currentPage: prevPagination.currentPage + 1,
      }));
    }
  };

  useEffect(() => {
    getAllCategory();
  }, [getAllCategory]);

  return (
    <FlatList
      data={categoryList}
      keyExtractor={(item) => item._id}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.5}
      renderItem={({ item }) => (
        <View style={styles.categoryItem}>
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
  categoryItem: {
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  categoryText: {
    fontSize: 16,
    color: "black",
  },
});

export default AllCategoryList;
