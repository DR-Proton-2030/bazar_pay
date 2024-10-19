import React, { useCallback, useEffect, useState } from "react";
import { View, StyleSheet, FlatList, TextInput, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { api } from "../../utils/api";
import SmallBox from "../../components/shared/smallBox/SmallBox";
import { ICategory } from "../../@types/props/ICategory";
import { IPagination } from "../../@types/types/pagination";
import { ActivityIndicator } from "react-native-paper";

const AllCategoryList: React.FC = () => {
  const [categoryList, setCategoryList] = useState<ICategory[]>([]);
  const navigation = useNavigation<any>();
  const [pagination, setPagination] = useState<IPagination>({
    currentPage: 1,
    pageCount: 1,
  });
  const [searchText, setSearchText] = useState("");

  const getAllCategory = useCallback(async () => {
    const filter = {
      page: pagination.currentPage,
      limit: 10,
      name: searchText,
    };
    try {
      const result = await api.category.getCategoryList(filter);
      if (pagination.currentPage === 1) {
        console.log("===>called category", result.result.length);
        setCategoryList(result.result);
      } else {
        setCategoryList((prevCategoryList) => [
          ...prevCategoryList,
          ...result.result,
        ]);
      }
      setPagination(result.pagination);
      // console.log("first");
    } catch (error) {
      console.log("error in getAllCategory", error);
    }
  }, [pagination.currentPage, searchText]); // Include searchText in the dependency array

  const handleSearchButtonPress = () => {
    setCategoryList([]);
    setPagination((prev) => ({ ...prev, currentPage: 1 }));
    // getAllCategory();
  };

  const handleChangeText = (text: string) => {
    setPagination((prev) => ({ ...prev, currentPage: 1 }));
    setSearchText(text);
  };

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
    <>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search categories..."
          value={searchText}
          onChangeText={handleChangeText}
        />
        <Button title="Search" onPress={handleSearchButtonPress} />
      </View>

      <FlatList
        data={categoryList}
        keyExtractor={(item, index) =>
          item._id ? `${item._id}-${index}` : index.toString()
        }
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
        ListFooterComponent={
          pagination.currentPage < pagination.pageCount ? (
            <ActivityIndicator size="small" color="#0000ff" animating={true} />
          ) : null
        }
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
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "center",
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
    borderColor: "#ccc",
    padding: 8,
    marginRight: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  categoryItem: {
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    flex: 1,
  },
});

export default AllCategoryList;
