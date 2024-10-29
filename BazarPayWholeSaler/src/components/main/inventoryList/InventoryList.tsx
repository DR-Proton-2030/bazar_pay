// import React from 'react'

// const InventoryList = () => {
//   return (
//     <div>InventoryList</div>
//   )
// }

// export default InventoryList


import React, { useState } from 'react';
import { Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  RefreshControl,
} from 'react-native';
import Colors from '../../../constants/Colors';


export const InventoryList = ({Inventories,getInventoryList}:any) => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await getInventoryList(); // Fetch inventory data
    setRefreshing(false);
  };
  return (
    <SafeAreaView style={{flex:1 }}>
          <ScrollView
        contentContainerStyle={styles.container}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >


        {Inventories.map((item:any, index:any) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                // handle onPress
              }}>
              <View style={styles.card}>
                <View style={styles.cardIcon}>
                  <MaterialIcons color="#000" name={"inventory"} size={30} />
                </View>

                <View style={styles.cardDelimiter}>
                  {index !== Inventories.length - 1 && (
                    <View style={styles.cardDelimiterLine} />
                  )}

                  <View
                    style={[
                      styles.cardDelimiterInset,
                       { backgroundColor: '#ffcb05' },
                    ]} />
                </View>

                <View style={styles.cardBody}>
                  <View style={styles.cardBodyContent}>
                    <Text style={styles.cardTitle}>{item?.name}</Text>

                    <Text style={styles.cardSubtitle}>{"company"}</Text>

                    <Text style={styles.cardDates}>{"20 products"}</Text>
                  </View>

                  <View style={styles.cardBodyAction}>
                    <Feather
                      color="#181818"
                      name="arrow-right"
                      size={16} />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 12,
  },
  /** Card */
  card: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardIcon: {
    width: 60,
    height: 60,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.light.grayBg,
  },
  cardDelimiter: {
    position: 'relative',
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  cardDelimiterLine: {
    position: 'absolute',
    left: 30,
    top: '50%',
    borderLeftWidth: 1,
    borderColor: '#eee',
    height: '100%',
    zIndex: 1,
  },
  cardDelimiterInset: {
    width: 12,
    height: 12,
    borderWidth: 3,
    borderRadius: 9999,
    backgroundColor: '#fff',
    borderColor: '#ffcb05',
    zIndex: 9,
    position: 'relative',
  },
  cardBody: {
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  cardBodyContent: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#2a2a2a',
    marginBottom: 3,
  },
  cardSubtitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#464646',
    marginBottom: 3,
  },
  cardDates: {
    fontSize: 14,
    fontWeight: '500',
    color: '#ababab',
  },
  cardBodyAction: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    maxWidth: 28,
    alignItems: 'flex-end',
  },
});