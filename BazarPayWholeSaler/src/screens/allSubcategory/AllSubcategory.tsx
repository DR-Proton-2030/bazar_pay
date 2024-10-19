import React, { useCallback, useEffect, useState } from "react";
import { View, StyleSheet, Text, FlatList, Button, TextInput } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { api } from "../../utils/api";
import SmallBox from "../../components/shared/smallBox/SmallBox";
import { useNavigation } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ISubcategory } from "../../@types/props/ISubcategory";
import { IPagination } from "../../@types/types/pagination";
import Colors from "../../constants/Colors";

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

  const [searchText, setSearchText] = useState<any>(null);


  const getAllSubCategory = useCallback(
    async (searchQuery: string | null = null) => {
      const filter = {
        page: searchQuery ? 1 : pagination.currentPage,
        limit: 10,
        category_object_id: categoryId,
        name: searchQuery,
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
  }, [pagination.currentPage,searchText]);

  const handleLoadMore = () => {
    if (pagination.currentPage < pagination.pageCount) {
      setPagination((prevPagination) => ({
        ...prevPagination,
        currentPage: prevPagination.currentPage + 1,
      }));
    }
  };
  const handleSearchButtonPress =() => {
    setSubcategoryList([])
    const searchQuery = searchText.trim() === '' ? null : searchText.trim();
   setPagination((prev) => ({ ...prev, currentPage: 1 }));
   getAllSubCategory(searchQuery); 
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
    <>
    <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Subcategories..."
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
        <Button title="Search" onPress={handleSearchButtonPress} />
      </View>

      {
        searchText &&
        <View style={{
          justifyContent: "space-between",
          flexDirection: "row", paddingHorizontal: 20, paddingBottom: 10
        }}>
          <Text style={{ fontWeight: "600" }}>
            Search Results for <Text style={{ color: Colors.light.blue }}>{searchText}</Text>
          </Text>
          <TouchableOpacity onPress={() => {
            setSearchText(null)
            setSubcategoryList([])
            getAllSubCategory(null);
          }}>
            <Text style={{ fontWeight: "600" }}>
              X clear search
            </Text>
          </TouchableOpacity>

        </View>
      }
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
