import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Importing Ionicons from @expo/vector-icons
import Colors from '../../constants/Colors';
import FirstScreen from '../../components/main/addProduct/FirsScreen';
import SecondScreen from '../../components/main/addProduct/SecondScreen';
import { SafeAreaView } from 'react-native-safe-area-context';

const AddProduct = () => {
  return (
    <SafeAreaView style={styles.container}>
<View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color={Colors.light.primary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>নতুন পণ্য যোগ করুন</Text>
      </View>
    <ScrollView  showsVerticalScrollIndicator={false}>

      
      <View style={styles.form}>
        <FirstScreen/>
       <SecondScreen/>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
paddingBottom:20    
  },
  backButton: {
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  form: {
    marginTop: 20,
  },
  
});

export default AddProduct;
