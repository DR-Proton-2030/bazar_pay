import React, { useCallback, useEffect, useState } from "react";
import { View, StyleSheet, FlatList, TextInput, Button, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { api } from "../../utils/api";
import SmallBox from "../../components/shared/smallBox/SmallBox";
import { ICategory } from "../../@types/props/ICategory";
import { IPagination } from "../../@types/types/pagination";
import Colors from "../../constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ActivityIndicator } from "react-native-paper";

const AllCategoryList: React.FC = () => {
  const [categoryList, setCategoryList] = useState<ICategory[]>([]);
  const navigation = useNavigation<any>();
  const [pagination, setPagination] = useState<IPagination>({
    currentPage: 1,
    pageCount: 1,
  });
  const [searchText, setSearchText] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);


  const handleLoadMore = () => {
    setPagination((prevPagination) => ({
      ...prevPagination,
      currentPage: pagination.currentPage+1,
    }));
    console.log(pagination.currentPage)
};


  const getAllCategory = useCallback(async (reset = false) => {
    if (loading) return; 
    setLoading(true);
    console.log(pagination.currentPage)
    const filter = {
      page: reset ? 1 : pagination.currentPage,
      limit: 10,
      name: searchText,
    };
    
    try {
      const result = await api.category.getCategoryList(filter);
      if (reset) {
        setCategoryList(result.result);
      } else {
        setCategoryList((prevCategoryList) => [
          ...prevCategoryList,
          ...result.result,
        ]);
      }
      
    } catch (error) {
      console.log("Error in getAllCategory:", error);
    } finally {
      setLoading(false);
    }
  }, [pagination.currentPage, searchText, loading]);

  const handleSearchButtonPress = () => {
    getAllCategory(true); 
  };

  const handleNavigate = (id: string) => {
    navigation.navigate("subcategoryPage", { categoryId: id });
  };



  useEffect(() => {
    getAllCategory(); 
  }, [pagination.currentPage]);
  return (
    <>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search categories..."
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
        <Button title="Search" onPress={handleSearchButtonPress} />
      </View>
      {
        searchText &&
        <View style={{
          justifyContent: "space-between",
          flexDirection: "row", paddingHorizontal: 20, paddingBottom: 20,zIndex:50
        }}>
          <Text style={{ fontWeight: "600" }}>
            Search Results for <Text style={{ color: Colors.light.blue }}>{searchText}</Text>
          </Text>
          {/* <TouchableOpacity  onPress={() => {
            setSearchText(null)
            setCategoryList([])
            getAllCategory(true);
          }}>
            <Text style={{ fontWeight: "600" }}>
              X clear search
            </Text>
          </TouchableOpacity> */}

        </View>
      }

{
 pagination?.currentPage===1 &&  loading?
  <ActivityIndicator></ActivityIndicator>
  :
  <FlatList
      data={categoryList}
     keyExtractor={(item, index) => item._id ? `${item._id}-${index}` : index.toString()}
      onEndReached={searchText ? null : handleLoadMore}
      onEndReachedThreshold={0.2}
      
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
      ListFooterComponent={loading ? <ActivityIndicator/>: null}
    />
}
     
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
    backgroundColor:"#fff"
  },
  categoryItem: {
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    flex:1
  },
});

export default AllCategoryList;
