import React, { useCallback, useEffect, useState } from 'react';
import { styles } from '../../../../screens/newAddProduct/styles';
import { View, Text, FlatList, TouchableOpacity, TextInput, ActivityIndicator, Button, Image } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { api } from '../../../../utils/api';
import { IPagination } from '../../../../@types/types/pagination';
import Colors from '../../../../constants/Colors';

export const SelectModal = ({ type, data, handleSelect ,catId }: any) => {


  const [dataList, setDataList] = useState<any[]>([]);
  const [searchText, setSearchText] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);


  // Handle search functionality
  const handleSearch = (text: string) => {
    setSearchText(text);

  };

  const [pagination, setPagination] = useState<IPagination>({
    currentPage: 1,
    pageCount: 1,
  });


  const handleLoadMore = () => {
    setPagination((prevPagination) => ({
      ...prevPagination,
      currentPage: pagination.currentPage + 1,
    }));
    console.log(pagination.currentPage)
  };


  const getAllCategory = useCallback(async (reset = false) => {
    setDataList([]);
    if (loading) return;
    setLoading(true);
    console.log(pagination.currentPage)
    const filter = {
      page: reset ? 1 : pagination.currentPage,
      limit: 10,
      name: searchText,
      category_object_id: type === "SUBCATEGORY"  ? catId : null
    };

    type === "SUBCATEGORY" && console.log("=====>selected ategory ", catId)
    try {
      let result:any ;
      {
        type === "BRAND" ?
        result = await api.brands.getBrandList(filter)
          :
          type === "CATEGORY" ?
          result = await api.category.getCategoryList(filter)
          
            :
            type === "SUBCATEGORY" ?
            result = await api.subcategory.getSubategoryList(filter)
              : null
      }
     
      if (reset) {
        setDataList(result.result);
      } else {
        setDataList((prevDataList) => [
          ...prevDataList,
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
    setDataList([]);
    setPagination({currentPage: 1,
      pageCount: 1});
    getAllCategory(true);
  };


  useEffect(() => {
    getAllCategory();
  }, [pagination.currentPage]);

  return (
    <>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          {
            type === "BRAND" ?
              <Text style={styles.modalTitle}>পণ্যের ব্র্যান্ড নির্বাচন করুন</Text>
              :
              type === "CATEGORY" ?
                <Text style={styles.modalTitle}>পণ্যের ক্যাটেগরি নির্বাচন করুন</Text>
                :
                type === "SUBCATEGORY" ?
                  <Text style={styles.modalTitle}>পণ্যের সাবক্যাটেগরি নির্বাচন করুন</Text>
                  : null
          }


          <View style={{ flexDirection: "row", gap: 5,marginBottom:5 }}>


            <TextInput
              style={[styles.searchBox,{width: "80%",}]}
              placeholder={`Search ${type.toLowerCase()}...`}
              value={searchText}
              onChangeText={(text) => setSearchText(text)}
            />
            
            <TouchableOpacity style={{backgroundColor:Colors.light.blue,width:"20%",borderRadius:10,alignItems:"center",justifyContent:"center"}}
             onPress={handleSearchButtonPress}>
              <AntDesign name="search1" size={28} color="white" />
            </TouchableOpacity>
          </View>

          {/* </View> */}

          <View style={{ borderBottomWidth: 2, marginVertical: 5, borderColor: "gray" }} />
          {/* List of Items */}
          <FlatList
            data={dataList}
            keyExtractor={(item, index) => item._id ? `${item._id}-${index}` : index.toString()}
            onEndReached={searchText ? null : handleLoadMore}
            onEndReachedThreshold={0.2}

            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => handleSelect(item)}
                style={styles.modalItem}
                key={item._id}
              >
                <Image source={{uri: item?.logo || item?.sub_category_image}}
                style={{height:40,width:40,marginRight:15,borderRadius:5}}
                />
                <Text style={styles.modalItemText}>{item?.name}</Text>
              </TouchableOpacity>
            )}
            ListFooterComponent={loading ? <ActivityIndicator /> : null}
          />
        </View>
      </View>
    </>
  );
};
