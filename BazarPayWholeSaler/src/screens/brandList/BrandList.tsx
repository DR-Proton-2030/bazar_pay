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
import Colors from "../../constants/Colors";
import { ActivityIndicator } from "react-native-paper";

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
  const [loading, setLoading] = useState<boolean>(false);




  const handleLoadMore = () => {
    setPagination((prevPagination) => ({
      ...prevPagination,
      currentPage: pagination.currentPage+1,
    }));
    console.log(pagination.currentPage)
};


  const getAllBrandList = useCallback(
    async  (reset = false)=> {
      if (loading) return; 
    setLoading(true);

      const filter = {
        page: reset ? 1 : pagination.currentPage,
        limit: 10,
        name: searchText,
      };

      try {
        const result = await api.brands.getBrandList(filter);
        if (reset) {
          setBrandList(result.result);
        } else {
          console.log("===>called brands", result.result);
          setBrandList((prevSubCategoryList) => [
            ...prevSubCategoryList,
            ...result.result,
          ]);
        }
         setLoading(false);
      } catch (error) {
        console.log("error in getAllCategory", error);
        setLoading(false);
      }
    },
    [pagination.currentPage, searchText,]
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
    setPagination({currentPage: 1,
      pageCount: 1});
    getAllBrandList(true);
  };

  useEffect(() => {
    getAllBrandList();
  }, [pagination.currentPage]);

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
      {
        searchText &&
        <View style={{
          justifyContent: "space-between",
          flexDirection: "row", paddingHorizontal: 20, paddingBottom: 10
        }}>
          <Text style={{ fontWeight: "600" }}>
            Search Results for <Text style={{ color: Colors.light.blue }}>{searchText}</Text>
          </Text>
          {/* <TouchableOpacity onPress={() => {
            setSearchText(null)
            setBrandList([])
            getAllBrandList(true);
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
  brandItem: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
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
  brandText: {
    fontSize: 16,
    color: "black",
  },
});

export default BrandList;
