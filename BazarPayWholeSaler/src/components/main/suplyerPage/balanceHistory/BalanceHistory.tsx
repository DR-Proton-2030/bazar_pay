// import React from 'react'
// import { View } from 'react-native'

// const BalanceHistory = () => {
//   return (
//     <View>
        
//     </View>
//   )
// }

// export default BalanceHistory


import React from 'react';
import  { useState, useMemo } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const users = [

  {
    img: '',
    name: 'Lorraine Abbott',
    phone: 'AR56XXXXXXXX',
  },
  {
    img: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    name: 'Rosie Arterton',
    phone: 'AR56XXXXXXXX',
  },
  {
    img: 'https://images.unsplash.com/photo-1573497019236-17f8177b81e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    name: 'Shelby Ballard',
    phone: 'AR56XXXXXXXX',
  },
  {
    img: '',
    name: 'Lorraine Abbott',
    phone: 'AR56XXXXXXXX',
  },
  {
    img: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    name: 'Rosie Arterton',
    phone: 'AR56XXXXXXXX',
  },
  {
    img: 'https://images.unsplash.com/photo-1573497019236-17f8177b81e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    name: 'Shelby Ballard',
    phone: 'AR56XXXXXXXX',
  },
  {
    img: '',
    name: 'Lorraine Abbott',
    phone: 'AR56XXXXXXXX',
  },
  {
    img: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    name: 'Rosie Arterton',
    phone: 'AR56XXXXXXXX',
  },
  {
    img: 'https://images.unsplash.com/photo-1573497019236-17f8177b81e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    name: 'Shelby Ballard',
    phone: 'AR56XXXXXXXX',
  },
  {
    img: '',
    name: 'Lorraine Abbott',
    phone: 'AR56XXXXXXXX',
  },
  {
    img: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    name: 'Rosie Arterton',
    phone: 'AR56XXXXXXXX',
  },
  {
    img: 'https://images.unsplash.com/photo-1573497019236-17f8177b81e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    name: 'Shelby Ballard',
    phone: 'AR56XXXXXXXX',
  },
];

export const BalanceHistory = () => {
  const [input, setInput] = useState('');
  const filteredRows = useMemo(() => {
    const rows = [];
    const query = input.toLowerCase();

    for (const item of users) {
      const nameIndex = item.name.toLowerCase().search(query);

      if (nameIndex !== -1) {
        rows.push({
          ...item,
          index: nameIndex,
        });
      }
    }

    return rows.sort((a, b) => a.index - b.index);
  }, [input]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      

        <ScrollView >

            <View style={{marginBottom:10,flexDirection:"row",justifyContent:"space-between"}}>
                <View >
                <SelectDropdown
                    data={["G","h"]}
                    onSelect={(selectedItem, index) => {
                    //   handleInputChange(field.name, selectedItem.title)
                    }}
                    renderButton={(selectedItem, isOpened) => {
                      return (
                        <View style={{paddingHorizontal:18,paddingVertical:2,alignItems:"center",flexDirection:"row",justifyContent:"center",
                            borderWidth:2,borderColor:"#4d94ff",width:"auto",marginRight:"auto",
                            borderRadius:5,marginTop:15,gap:3,backgroundColor:"#4d94ff",marginLeft:10}}>
                                <AntDesign name="filter" size={20} color="white" />
                            <Text style={{fontWeight:600,fontSize:15,color:"white"}}>
                                Filter
                            </Text>
                        </View>
                      );
                    }}
                    renderItem={(item, index, isSelected) => {
                      return (
                        <View
                          style={{
                            ...( { backgroundColor: "#D2D9DF", }),
                          }}
                        >
                          
                          <Text style={{color:"black",fontSize:18,textAlign:"center"}}>
                          {item}
                          </Text>
                        </View>
                      );
                    }}
                    showsVerticalScrollIndicator={false}
                  />
                </View>
                <View style={{marginRight:10}}>
                <SelectDropdown
                    data={["G","h"]}
                    onSelect={(selectedItem, index) => {
                    //   handleInputChange(field.name, selectedItem.title)
                    }}
                    renderButton={(selectedItem, isOpened) => {
                      return (
                        <View style={{paddingHorizontal:18,paddingVertical:2,alignItems:"center",flexDirection:"row",justifyContent:"center",
                            borderWidth:2,borderColor:"#9ca1ac",width:"auto",marginRight:"auto",
                            borderRadius:5,marginTop:15,gap:3,backgroundColor:"#9ca1ac"}}>
                                <MaterialCommunityIcons name="sort-variant" size={20} color="white" />
                            <Text style={{fontWeight:600,fontSize:15,color:"white"}}>
                                Sort
                            </Text>
                        </View>
                      );
                    }}
                    renderItem={(item, index, isSelected) => {
                      return (
                        <View
                          style={{
                            ...( { backgroundColor: "#D2D9DF", }),
                          }}
                        >
                          
                          <Text style={{color:"black",fontSize:18,textAlign:"center"}}>
                          {item}
                          </Text>
                        </View>
                      );
                    }}
                    showsVerticalScrollIndicator={false}
                  />
                </View>
            </View>
          {filteredRows.length ? (
            filteredRows.map(({ img, name, phone }, index) => {
              return (
                <View key={index} style={styles.cardWrapper}>
                  <TouchableOpacity
                    onPress={() => {
                      // handle onPress
                    }}>
                    <View style={styles.card}>
                      {img ? (
                        <Image
                          alt=""
                          resizeMode="cover"
                          source={{ uri: img }}
                          style={styles.cardImg} />
                      ) : (
                        <View style={[styles.cardImg, styles.cardAvatar]}>
                          <Text style={styles.cardAvatarText}>{name[0]}</Text>
                        </View>
                      )}

                      <View style={styles.cardBody}>
                        <Text style={styles.cardTitle}>{name}</Text>

                        <Text style={styles.cardPhone}>{phone}</Text>
                      </View>

                      <View style={styles.cardAction}>
                        <Text style={{color:"red",fontWeight:700}}>
                            620000
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            })
          ) : (
            <Text >No results</Text>
          )}
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 24,
  },
  /** Search */
  
  /** Card */
  card: {
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal:10

  },
  cardWrapper: {
    borderBottomWidth: 1,
    borderColor: '#d6d6d6',
  },
  cardImg: {
    width: 42,
    height: 42,
    borderRadius: 12,
  },
  cardAvatar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9ca1ac',
  },
  cardAvatarText: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#fff',
  },
  cardBody: {
    marginRight: 'auto',
    marginLeft: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },
  cardPhone: {
    fontSize: 12,
    lineHeight: 20,
    fontWeight: '500',
    color: '#616d79',
    marginTop: 3,
  },
  cardAction: {
    paddingRight: 16,
  },
});