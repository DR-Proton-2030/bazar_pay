import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  NativeSyntheticEvent,
  NativeScrollEvent,
  TextInput,
  Button,
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
  const [searchText, setSearchText] = useState<any>(null);

  const getAllBrandList = useCallback(
    async (searchQuery: string | null = null) => {
      const filter = {
        page: searchQuery ? 1 : pagination.currentPage,
        limit: 10,
        name: searchQuery,
      };
      try {
        const result = await api.brands.getBrandList(filter);
         if (pagination.currentPage === 1) {
          setBrandList(result.result);
      } else {
        setBrandList((prevSubCategoryList) => [
          ...prevSubCategoryList,
          ...result.result,
        ]);
      }
        setPagination(result.pagination);
      } catch (error) {
        console.log("error in getAllCategory", error);
      }
    },
    [pagination.currentPage,searchText]
  );
  
  const handleNavigate = (id: string) => {
    navigation.navigate("quickProductList", {
      subcategoryId: subcategoryId,
      categoryId: categoryId,
      brandId: id,
    });
    console.log("first");
  };

  const handleSearchButtonPress = () => {
    setBrandList([]);
    const searchQuery = searchText.trim() === '' ? null : searchText.trim();
    setPagination((prev) => ({ ...prev, currentPage: 1 }));
    getAllBrandList(searchQuery); 
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
    getAllBrandList();
  }, []);

  return (
    <>
     <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Brands..."
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
        <Button title="Search" onPress={handleSearchButtonPress} />
      </View>
    <FlatList
      data={brandList}
      keyExtractor={(item, index) => item._id ? `${item._id}-${index}` : index.toString()}
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
      </>
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
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginRight: 10,
    borderRadius: 5,
    backgroundColor:"#fff"
  },
  brandText: {
    fontSize: 16,
    color: "black",
  },
});

export default BrandList;
