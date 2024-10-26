import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Modal,
  FlatList,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import FeatherIcon from '@expo/vector-icons/Feather';
import { styles } from '../../styles';
import ImageUploader from '../../../../components/shared/ImageUploader/ImageUploader';
import CustomImagePicker from '../../../../components/shared/imagePicker/ImagePicker';

const ProductDetailsOne = ({ form, setForm, page,setPage,images, setImages }:
    { images: string[], setImages: React.Dispatch<React.SetStateAction<string[]>>,
      form:IProduct, setForm:any, setPage:any ,page:any}) => {
  const [unitModalVisible, setUnitModalVisible] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState('');
  // const [image,setImage] = useState<string[]>([]);

  const units = ['Piece', 'Kg', 'Litre', 'Box']; // Example units

  const handleUnitSelect = (unit: string) => {
    setSelectedUnit(unit);
    setForm({ ...form, unit });
    setUnitModalVisible(false);
  };

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerBack}>
          <FeatherIcon color="#fff" name="chevron-left" size={30} />
        </View>
        <Text style={styles.title}>পণ্যের বিবরণ দিন!</Text>
        <Text style={styles.subtitle}>
          Fill in the fields below to get started with your new Product.
        </Text>
      </View>

      <View style={styles.form}>
        <View style={styles.input}>
          <Text style={styles.inputLabel}>পণ্যের নাম</Text>
          <TextInput
            clearButtonMode="while-editing"
            onChangeText={product_name => setForm({ ...form, product_name })}
            placeholder="এখানে পণ্যের নাম লিখুন"
            placeholderTextColor="#6b7280"
            style={styles.inputControl}
            value={form.product_name}
          />
        </View>

        <View style={styles.input}>
          <Text style={styles.inputLabel}>পণ্যের বিষয়</Text>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            clearButtonMode="while-editing"
            onChangeText={product_description => setForm({ ...form, product_description })}
            placeholder="এই পণ্যের সম্পর্কে কিছু লিখুন"
            placeholderTextColor="#6b7280"
            style={styles.inputControl}
            value={form.product_description}
          />
        </View>

        {/* Unit Field - Acts like a dropdown */}
        <View style={styles.input}>
          <Text style={styles.inputLabel}>পণ্যের একক</Text>
          <TouchableOpacity
            onPress={() => setUnitModalVisible(true)}
            style={styles.unitField}
          >
            <Text style={styles.unitText}>
              {selectedUnit ? selectedUnit : 'পণ্যের একক নির্বাচন করুন'}
            </Text>
            <FeatherIcon name="chevron-down" size={20} color="#1D2A32" />
          </TouchableOpacity>
        </View>


        <View style={styles.input}>
          <Text style={styles.inputLabel}>পণ্য ছবিগুলি আপলোড করুন</Text>
          <CustomImagePicker images={images} setImages={setImages}/>
        </View>

        <View style={styles.formAction}>
          <TouchableOpacity
            onPress={() => {
              setPage(1);
              console.log('====>First page form',form)
            }}
            style={styles.btn}
          >
              <Text style={styles.btnText}>পরবর্তী পদক্ষেপে যান</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Modal for Unit Selection */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={unitModalVisible}
        onRequestClose={() => setUnitModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>পণ্যের একক নির্বাচন করুন</Text>
            <FlatList
              data={units}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => 
                    {
                      handleUnitSelect(item)
                      setForm({ ...form, unit:item })
                    }}
                  style={styles.modalItem}
                >
                  <Text style={styles.modalItemText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </KeyboardAwareScrollView>
  );
};

export default ProductDetailsOne;
