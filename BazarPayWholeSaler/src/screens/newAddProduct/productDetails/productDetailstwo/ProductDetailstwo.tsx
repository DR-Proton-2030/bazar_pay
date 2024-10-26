import React, { useCallback, useState } from 'react';
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
import { api } from '../../../../utils/api';

const ProductDetailstwo = ({ form, setForm, setPage ,handleCreateProduct}: {form:IProduct, setForm:any, setPage:any,handleCreateProduct:any}) => {

  
  const [categoryModalVisible, setCategoryModalVisible] = useState(false);
  const [subcategoryModalVisible, setSubcategoryModalVisible] = useState(false);
  const [brandModalVisible, setBrandModalVisible] = useState(false);
  
  const [createCategoryModalVisible, setCreateCategoryModalVisible] = useState(false); // For creating new category
  const [createSubcategoryModalVisible, setCreateSubcategoryModalVisible] = useState(false); // For creating new subcategory
  const [createBrandModalVisible, setCreateBrandModalVisible] = useState(false); // For creating new brand

  const [selectedCategory, setSelectedCategory] = useState<any>();
  const [selectedSubcategory, setSelectedSubcategory] = useState<any>();
  const [selectedBrand, setSelectedBrand] = useState<any>();
  
  const [newCategory, setNewCategory] = useState<any>();
  const [newCategoryId, setNewCategoryId] = useState<any>();
  const [newSubcategory, setNewSubcategory] = useState<any>();
  const [newBrand, setNewBrand] = useState<any>();
  
  const [categoryDescription, setCategoryDescription] = useState('');
  const [subcategoryDescription, setSubcategoryDescription] = useState('');
  const [brandDescription, setBrandDescription] = useState('');

  const [categoryImage, setCategoryImage] = useState<string[]>([]); 
const [subcategoryImage, setSubcategoryImage] = useState<string[]>([]); 
const [brandImage, setBrandImage] = useState<string[]>([]); 


  const categories = ['Electronics', 'Clothing', 'Food']; // Example categories
  const subcategories = ['Mobile', 'T-shirt', 'Snacks']; // Example subcategories
  const brands = ['Samsung', 'Nike', 'Lays']; // Example brands

  const createCategory = useCallback(async (reset = false) => {
    const formDataToSend = new FormData();
  
    const details = {
      name: newCategory,
      description: categoryDescription
    };
  
    formDataToSend.append("categoryDetails", JSON.stringify(details));
  
    if (categoryImage && categoryImage.length > 0) {
      const file:any = {
        uri: categoryImage[0],
        name: "logo.jpg", 
        type: "image/jpeg", 
      };
  
      formDataToSend.append("logo", file);
    }
  
    try {
      console.log("===> Form Data:", details);
  
      const result = await api.category.createCategory(formDataToSend);
      console.log("======> Response:", result);
      setNewCategoryId(result?._id);
      setForm({ ...form, category_object_id:result?._id })
  
    } catch (error) {
      console.log("Error creating Category:", error);
    } finally {
    }
  }, [newCategory, categoryDescription, categoryImage]);


  const createSubCategory = useCallback(async (reset = false) => {
    const formDataToSend = new FormData();
  
    const details = {
      name: newSubcategory,
      description: subcategoryDescription,
      category_object_id: selectedCategory?._id || newCategoryId
    };
  
    formDataToSend.append("subCategoryDetails", JSON.stringify(details));
  
    if (subcategoryImage && subcategoryImage.length > 0) {
      const file:any = {
        uri: subcategoryImage[0],
        name: "logo.jpg", 
        type: "image/jpeg", 
      };
  
      formDataToSend.append("sub_category_image", file);
    }
  
    try {
      console.log("===> Form Data:", details);
  
      const result = await api.subcategory.createSubCategory(formDataToSend);
      console.log("======> Response:", result);
      setForm({ ...form, subcategory_object_id:result?._id });
  
    } catch (error) {
      console.log("Error creating Category:", error);
    } finally {
    }
  }, [newSubcategory, subcategoryDescription, subcategoryImage]);




  const createBrand = useCallback(async (reset = false) => {
    const formDataToSend = new FormData();
  
    const details = {
      name: newBrand,
      description: brandDescription
    };
  
    formDataToSend.append("brandDetails", JSON.stringify(details));
  
    if (brandImage && brandImage.length > 0) {
      const file:any = {
        uri: brandImage[0],
        name: "logo.jpg",
        type: "image/jpeg", 
      };
  
      formDataToSend.append("logo", file);
    }
  
    try {
      console.log("===> Form Data:", details);
      const result = await api.brands.createBrand(formDataToSend);
      console.log("======> Response:", result);
      setForm({ ...form, brand_object_id:result?._id });
    } catch (error) {
      console.log("Error creating Brand:", error);
    } finally {
      // Any cleanup if needed
    }
  }, [newBrand, brandDescription, brandImage]);
  
  const handleCategorySelect = (category: any) => {
    setSelectedCategory(category);
    console.log("=====> api category",category?._id )
    setForm({ ...form, category_object_id:category?._id })
    setCategoryModalVisible(false);
  };

  const handleSubcategorySelect = (subcategory: any) => {
    setSelectedSubcategory(subcategory);
    console.log("=====> api subcategory",subcategory?._id )
    setForm({ ...form, subcategory_object_id:subcategory?._id });
    setSubcategoryModalVisible(false);
  };

  const handleBrandSelect = (brand: any) => {
    setSelectedBrand(brand);
    console.log("=====> api brand",brand?._id )
    setForm({ ...form, brand_object_id:brand?._id });
    setBrandModalVisible(false);
  };

  const handleCreateNewCategory = () => {
    if (newCategory) {
      createCategory()
      setSelectedCategory(newCategory);
    
    
      setCreateCategoryModalVisible(false); 
    }
  };

  const handleCreateNewSubcategory = () => {
    if (newSubcategory) {
      createSubCategory()
      setSelectedSubcategory(newSubcategory);
      
      setCreateSubcategoryModalVisible(false);
    }
  };

  const handleCreateNewBrand = () => {
    if (newBrand) {
      createBrand()
      setSelectedBrand(newBrand);
      
      setCreateBrandModalVisible(false); 
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
          <Text style={styles.inputLabel}>পণ্যের ক্যাটেগরি</Text>
          <TouchableOpacity
            onPress={() => setCategoryModalVisible(true)}
            style={styles.unitField}
          >
            <Text style={styles.unitText}>
              {selectedCategory ? selectedCategory?.name || selectedCategory : 'পণ্যের ক্যাটেগরি নির্বাচন করুন'}
            </Text>
            <FeatherIcon name="chevron-down" size={20} color="#1D2A32" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setCreateCategoryModalVisible(true)}>
            <Text style={styles.unitText2}>+  নতুন ক্যাটেগরি তৈরি করুন</Text>
          </TouchableOpacity>
        </View>

        {/* Subcategory Selector */}
        <View style={styles.input}>
          <Text style={styles.inputLabel}>পণ্যের সাবক্যাটেগরি</Text>
          {
            !newCategory || newSubcategory ?
            
            <TouchableOpacity
            onPress={() => {
              if(newSubcategory ){
                null
                
              }else{
                setSubcategoryModalVisible(true) 
              }

            } }
            style={styles.unitField}
          >
            <Text style={styles.unitText}>
              {selectedSubcategory ? selectedSubcategory?.name || selectedSubcategory: 'পণ্যের সাবক্যাটেগরি নির্বাচন করুন'}
            </Text>
            {
            newSubcategory ?
            null:
            <FeatherIcon name="chevron-down" size={20} color="#1D2A32" />
            }
          </TouchableOpacity>
          :
          null
          }
         
          <TouchableOpacity onPress={() => setCreateSubcategoryModalVisible(true)}>
            <Text style={styles.unitText2}>+ নতুন সাবক্যাটেগরি তৈরি করুন</Text>
          </TouchableOpacity>
        </View>

        {/* Brand Selector */}
        <View style={styles.input}>
          <Text style={styles.inputLabel}>পণ্যের ব্র্যান্ড</Text>
          <TouchableOpacity
            onPress={() => setBrandModalVisible(true)}
            style={styles.unitField}
          >
            <Text style={styles.unitText}>
              {selectedBrand ? selectedBrand?.name || selectedBrand : 'পণ্যের ব্র্যান্ড নির্বাচন করুন'}
            </Text>
            <FeatherIcon name="chevron-down" size={20} color="#1D2A32" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setCreateBrandModalVisible(true)}>
            <Text style={styles.unitText2}>+ নতুন ব্র্যান্ড তৈরি করুন</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.formAction,{marginTop:45}]}>
          <TouchableOpacity
            onPress={handleCreateProduct}
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
        <SelectModal catId={selectedCategory ? selectedCategory?._id : null} type={"SUBCATEGORY"} data={subcategories} handleSelect={handleSubcategorySelect} />
      </Modal>

      {/* Modal for Brand Selection */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={brandModalVisible}
        onRequestClose={() => setBrandModalVisible(false)}
      >
        <SelectModal catId={selectedCategory ? selectedCategory?._id : null} type={"BRAND"} data={brands} handleSelect={handleBrandSelect} />
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
    catId={selectedCategory ? selectedCategory?._id : null}
    name={newCategory}
    setName={setNewCategory}
    images={categoryImage}
    setImages={setCategoryImage}
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
    images={subcategoryImage}
    setImages={setSubcategoryImage}
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
    images={brandImage}
    setImages={setBrandImage}
    setDescription={setBrandDescription}
    handleCreateNew={handleCreateNewBrand}
  />
      </Modal>

    </KeyboardAwareScrollView>
  );
};

export default ProductDetailstwo;
