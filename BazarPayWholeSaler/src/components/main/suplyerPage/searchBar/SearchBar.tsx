import React, { useMemo, useState } from 'react'
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
  import AntDesign from '@expo/vector-icons/AntDesign';

const SearchBar = () => {
    const [input, setInput] = useState('');
    const filteredRows = useMemo(() => {
     
    }, [input]);
  return (
    <View style={styles.searchWrapper}>
      <View style={styles.search}>
        <View style={styles.searchIcon}>
        <AntDesign name="search1" size={24} color="black" />
        </View>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="while-editing"
          onChangeText={val => setInput(val)}
          placeholder="Search by name or party number"
          placeholderTextColor="#848484"
          returnKeyType="done"
          style={styles.searchControl}
          value={input} />
      </View>
    </View>

  )
}

export default SearchBar


const styles = StyleSheet.create({
    container: {
      paddingBottom: 24,
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 0,
    },
    /** Search */
    search: {
      position: 'relative',
      backgroundColor: '#f1f4ff',
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      paddingHorizontal:5
    },
    searchWrapper: {
      paddingTop: 8,
      paddingHorizontal: 10,
      paddingBottom: 12,
      borderBottomWidth: 1,
      borderColor: '#f1f4ff',
    },
    searchIcon: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 4,
      width: 34,
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 2,
    },
    searchControl: {
      paddingVertical: 10,
      paddingHorizontal: 14,
      paddingLeft: 34,
      width: '100%',
      fontSize: 16,
      fontWeight: '500',
    },
    searchContent: {
      paddingLeft: 24,
    },
    searchEmpty: {
      textAlign: 'center',
      paddingTop: 16,
      fontWeight: '500',
      fontSize: 15,
      color: '#9ca1ac',
    },
    /** Card */
    card: {
      paddingVertical: 14,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
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
      fontSize: 15,
      lineHeight: 20,
      fontWeight: '500',
      color: '#616d79',
      marginTop: 3,
    },
    cardAction: {
      paddingRight: 16,
    },
  });