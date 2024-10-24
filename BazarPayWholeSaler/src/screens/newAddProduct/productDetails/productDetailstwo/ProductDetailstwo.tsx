import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Modal,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import FeatherIcon from '@expo/vector-icons/Feather';
import { styles } from '../../styles';
import { SelectModal } from '../../../../components/shared/productModals/categoryModal/CatgoryModal';
import { NewProductModal } from '../../../../components/shared/productModals/newProductModalq/NewProductModal';
import { useNavigation } from 'expo-router';
import Colors from '../../../../constants/Colors';

const ProductDetailstwo = ({ form, setForm, setPage }: any) => {

  const navigation: any = useNavigation<any>();


  const HandleNavigate = () => {
    navigation.navigate("QuickAddProduct", {
      productId: "productId",
      productImage: "https://threedio-prod-var-cdn.icons8.com/av/preview_sets/previews/Pt5BM4m7Cpzc8ii7.webp",
      productPercent: 99,
    });
  };
  
  
  const [categoryModalVisible, setCategoryModalVisible] = useState(false);
  const [subcategoryModalVisible, setSubcategoryModalVisible] = useState(false);
  const [brandModalVisible, setBrandModalVisible] = useState(false);
  
  const [createCategoryModalVisible, setCreateCategoryModalVisible] = useState(false); // For creating new category
  const [createSubcategoryModalVisible, setCreateSubcategoryModalVisible] = useState(false); // For creating new subcategory
  const [createBrandModalVisible, setCreateBrandModalVisible] = useState(false); // For creating new brand

  const [selectedCategory, setSelectedCategory] = useState<any>();
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [selectedBrand, setSelectedBrand] = useState<any>();
  
  const [newCategory, setNewCategory] = useState('');
  const [newSubcategory, setNewSubcategory] = useState('');
  const [newBrand, setNewBrand] = useState('');
  
  const [categoryDescription, setCategoryDescription] = useState('');
  const [subcategoryDescription, setSubcategoryDescription] = useState('');
  const [brandDescription, setBrandDescription] = useState('');

  const categories = ['Electronics', 'Clothing', 'Food']; // Example categories
  const subcategories = ['Mobile', 'T-shirt', 'Snacks']; // Example subcategories
  const brands = ['Samsung', 'Nike', 'Lays']; // Example brands

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setForm({ ...form, category });
    setCategoryModalVisible(false);
  };

  const handleSubcategorySelect = (subcategory: string) => {
    setSelectedSubcategory(subcategory);
    setForm({ ...form, subcategory });
    setSubcategoryModalVisible(false);
  };

  const handleBrandSelect = (brand: string) => {
    setSelectedBrand(brand);
    setForm({ ...form, brand });
    setBrandModalVisible(false);
  };

  const handleCreateNewCategory = () => {
    if (newCategory) {
      setSelectedCategory(newCategory);
      setForm({ ...form, category: newCategory });
      setNewCategory('');
      setCategoryDescription('');
      setCreateCategoryModalVisible(false); // Close the modal after submission
    }
  };

  const handleCreateNewSubcategory = () => {
    if (newSubcategory) {
      setSelectedSubcategory(newSubcategory);
      setForm({ ...form, subcategory: newSubcategory });
      setNewSubcategory('');
      setSubcategoryDescription('');
      setCreateSubcategoryModalVisible(false); // Close the modal after submission
    }
  };

  const handleCreateNewBrand = () => {
    if (newBrand) {
      setSelectedBrand(newBrand);
      setForm({ ...form, brand: newBrand });
      setNewBrand('');
      setBrandDescription('');
      setCreateBrandModalVisible(false); // Close the modal after submission
    }
  };

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerBack}>
          <FeatherIcon color="#fff" name="chevron-left" size={30} />
        </View>
        <Text style={styles.title}>পণ্যের বিবরণ দিন!</Text>
        <Text style={styles.subtitle}>
          Fill in the fields below to get started with your new product.
        </Text>
      </View>

      <View style={styles.form}>
        {/* Category Selector */}
        <View style={styles.input}>
          <Text style={styles.inputLabel}>Category</Text>
          <TouchableOpacity
            onPress={() => setCategoryModalVisible(true)}
            style={styles.unitField}
          >
            <Text style={styles.unitText}>
              {selectedCategory ? selectedCategory : 'পণ্যের ক্যাটেগরি নির্বাচন করুন'}
            </Text>
            <FeatherIcon name="chevron-down" size={20} color="#1D2A32" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setCreateCategoryModalVisible(true)}>
            <Text style={styles.unitText2}>+ Create new category</Text>
          </TouchableOpacity>
        </View>

        {/* Subcategory Selector */}
        <View style={styles.input}>
          <Text style={styles.inputLabel}>Subcategory</Text>
          <TouchableOpacity
            onPress={() => setSubcategoryModalVisible(true)}
            style={styles.unitField}
          >
            <Text style={styles.unitText}>
              {selectedSubcategory ? selectedSubcategory : 'পণ্যের সাবক্যাটেগরি নির্বাচন করুন'}
            </Text>
            <FeatherIcon name="chevron-down" size={20} color="#1D2A32" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setCreateSubcategoryModalVisible(true)}>
            <Text style={styles.unitText2}>+ Create new subcategory</Text>
          </TouchableOpacity>
        </View>

        {/* Brand Selector */}
        <View style={styles.input}>
          <Text style={styles.inputLabel}>Brand</Text>
          <TouchableOpacity
            onPress={() => setBrandModalVisible(true)}
            style={styles.unitField}
          >
            <Text style={styles.unitText}>
              {selectedBrand ? selectedBrand : 'পণ্যের ব্র্যান্ড নির্বাচন করুন'}
            </Text>
            <FeatherIcon name="chevron-down" size={20} color="#1D2A32" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setCreateBrandModalVisible(true)}>
            <Text style={styles.unitText2}>+ Create new brand</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.formAction,{marginTop:45}]}>
          <TouchableOpacity
            onPress={HandleNavigate}
          >
            <View style={styles.btn}>
              <Text style={styles.btnText}>পরবর্তী পদক্ষেপে যান</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={()=>setPage(0)}
          >
            <View style={[styles.btn, { marginTop: 20, backgroundColor: Colors.light.grayBg }]}>
              <Text style={[styles.btnText,{color:Colors.light.blue}]}>পূর্ববর্তী পদক্ষেপে যান</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Modal for Category Selection */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={categoryModalVisible}
        onRequestClose={() => setCategoryModalVisible(false)}
      >
        <SelectModal type={"CATEGORY"} data={categories} handleSelect={handleCategorySelect} />
      </Modal>

      {/* Modal for Subcategory Selection */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={subcategoryModalVisible}
        onRequestClose={() => setSubcategoryModalVisible(false)}
      >
        <SelectModal type={"SUBCATEGORY"} data={subcategories} handleSelect={handleSubcategorySelect} />
      </Modal>

      {/* Modal for Brand Selection */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={brandModalVisible}
        onRequestClose={() => setBrandModalVisible(false)}
      >
        <SelectModal type={"BRAND"} data={brands} handleSelect={handleBrandSelect} />
      </Modal>

      {/* Modal for Creating New Category */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={createCategoryModalVisible}
        onRequestClose={() => setCreateCategoryModalVisible(false)}
      >
        <NewProductModal
    type="CATEGORY"
    name={newCategory}
    setName={setNewCategory}
    description={categoryDescription}
    setDescription={setCategoryDescription}
    handleCreateNew={handleCreateNewCategory}
  />
      </Modal>

      {/* Modal for Creating New Subcategory */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={createSubcategoryModalVisible}
        onRequestClose={() => setCreateSubcategoryModalVisible(false)}
      >
       
        <NewProductModal
    type="SUBCATEGORY"
    name={newSubcategory}
    setName={setNewSubcategory}
    description={subcategoryDescription}
    setDescription={setSubcategoryDescription}
    handleCreateNew={handleCreateNewSubcategory}
  />
      </Modal>

      {/* Modal for Creating New Brand */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={createBrandModalVisible}
        onRequestClose={() => setCreateBrandModalVisible(false)}
      >
        <NewProductModal
    type="BRAND"
    name={newBrand}
    setName={setNewBrand}
    description={brandDescription}
    setDescription={setBrandDescription}
    handleCreateNew={handleCreateNewBrand}
  />
      </Modal>

    </KeyboardAwareScrollView>
  );
};

export default ProductDetailstwo;
