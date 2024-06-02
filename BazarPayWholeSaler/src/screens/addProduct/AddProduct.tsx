import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import SecondScreen from "./SecondScreen";
import CommonHeader from "../../components/shared/commonHeader/CommonHeader";
import ImageUploader from "../../components/shared/ImageUploader/ImageUploader";
import { globalStyle } from "../../globalStyles/globalStyles";
import { Button, Portal, Modal } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import axios from "axios"; // For making API requests
import FirstScreen from "./FirsScreen";
import { api } from "../../utils/api";
import { useNavigation } from "expo-router";
import AuthContext from "../../contexts/authContext/authContext";
import WholesalerContext from "../../contexts/wholesalerContext/wholesalerContext";
import { useRoute } from "@react-navigation/native";

const AddProduct = () => {
  const{wholesaler}=useContext(WholesalerContext)
  const navigation: any = useNavigation();
  const route = useRoute();
  const product:any = route.params;

  // console.log("first",product);

  const [formData, setFormData] = useState<any>({
    product_name: "",
    unit: "",
    product_buying_price: "",
    product_saling_price: "",
    discount: "",
    current_stock: "",
    free: "",
    product_description: "",
    product_warenty: "",
    product_discount: "",
    product_bhat: "",
    
  });

  const [image, setImage] = useState<string | null>(null);
  const [barcodeImage, setBarcodeImage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false); 

  const handleInputChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    setLoading(true); // Show loading modal
  
    const formDataToSend = new FormData();
    formDataToSend.append("productDetails", JSON.stringify(formData));
    if (wholesaler?._id) {
      formDataToSend.append("wholesalerSaler_id", wholesaler._id);
    } else {
      console.error("wholesaler._id is undefined");
    }
    
    if (image) {
      const file: any = {
        uri: image,
        name: "product_image.jpg",
        type: "image/jpeg",
      };
      formDataToSend.append("product_image", file);
    }

    if (barcodeImage) {
      const file: any = {
        uri: barcodeImage,
        name: "barcode_image.jpg",
        type: "image/jpeg",
      };
      formDataToSend.append("bar_code_photo", file);
    }

    try {
      const response = await api.product.createProduct(formDataToSend);
      console.log(response.data);
      navigation.navigate("homePage");
    } catch (error) {
      console.error("Error creating product:", error);
    } finally {
      setLoading(false); // Hide loading modal
    }
  };


  useEffect(() => {
 

    setFormData((prevFormData: any) => ({
      ...prevFormData,
      product_name: product?.product_name || "",
      product_buying_price: product?.product_buying_price || "",
      product_saling_price: product?.product_saling_price || "",
      current_stock: product?.current_stock || "",
      discount: product?.discount || "",
      free: product?.free || "",
      product_description: product?.product_description || "",
      product_warenty: product?.product_warenty || "",
      product_discount: product?.product_discount || "",
      product_bhat: product?.product_bhat || "",
    }));

    if (product?.product_image) {
      setImage(product?.product_image);
    }
    if (product?.bar_code_photo) {
      setBarcodeImage(product?.bar_code_photo);
    }
  }, []);

  return (
    <SafeAreaView>
      <CommonHeader text="নতুন পণ্য যোগ করুন" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.form}>
          <TouchableOpacity style={globalStyle.quickAddButton}>
            <Text style={globalStyle.quickAddText}>দ্রুত পণ্য যোগ করুন</Text>
            <Ionicons name="chevron-forward" size={24} color="black" />
          </TouchableOpacity>

          <Text style={globalStyle.infoText}>
            আপনি ব্র্যান্ড অনুমোদিত দ্রুত পণ্য যোগ করতে পারেন
          </Text>

          <ImageUploader image={image} setImage={setImage} />

          <FirstScreen formData={formData} handleInputChange={handleInputChange} />

          <Text style={{ fontWeight: "600", fontSize: 16, marginBottom: 10 }}>
            পণ্যের বারকোড যুক্ত করুন
          </Text>

          <ImageUploader image={barcodeImage} setImage={setBarcodeImage} />

          <SecondScreen formData={formData} handleInputChange={handleInputChange} />

          <Button style={{ backgroundColor: "blue" }} mode="contained" onPress={handleSubmit}>
            
              {
                !product?.product_name?
                <Text style={{ fontSize: 17 }}>Upload Product</Text>
                :
                <Text style={{ fontSize: 17 }}>Update Product Details</Text>
              }
              
          </Button>
        </View>
      </ScrollView>

      <Portal>
        <Modal visible={loading} dismissable={false}>
          <View
            style={{
              backgroundColor: "white",
              padding: 20,
              borderRadius: 10,
              alignItems: "center",
              width: 80,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <ActivityIndicator animating={true} size="large" color={Colors.light.primary} />
          </View>
        </Modal>
      </Portal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    paddingHorizontal: 20,
  },
  form: {
    marginTop: 20,
    paddingHorizontal: 10,
    marginBottom: 100,
  },
});

export default AddProduct;
