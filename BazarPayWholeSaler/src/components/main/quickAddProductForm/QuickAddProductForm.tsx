import React, { useContext, useState } from "react";
import { View, StyleSheet, ScrollView, Image, Text, Alert, TouchableOpacity } from "react-native";
import { TextInput, Button, Provider } from "react-native-paper";
import { api } from "../../../utils/api";
import { styles } from "./quickProductFormStyle";
import { inputFields } from "../../../constants/quickProduct/inputField";
import AuthContext from "../../../contexts/authContext/authContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyle } from "../../../globalStyles/globalStyles";

const QuickAddProductForm = ({ productId, productImage ,productPercent}: any) => {
  const { user } = useContext(AuthContext);
  const [formValues, setFormValues] = useState<any>({
    quantity: 0,
    buyingPrice: 0,
    markedPrice: 0,
    discount: 0,
    sellingPrice: 0,
    currentStock: 0,
    sellingStatus: "",
  });

  const handleInputChange = (key: string, value: string) => {
    if (key === "discount") {
      console.log("===>discount", value);
      setFormValues(
        Object.assign(
          formValues,
          {},
          {
            ["sellingPrice"]:
              Number(formValues.markedPrice) * ((100 - Number(value)) / 100),
          }
        )
      );
    }
    if (key === "markedPrice") {
      console.log("====>", value);
      setFormValues(
        Object.assign(
          formValues,
          {},
          {
            ["sellingPrice"]:
              Number(value) * ((100 - Number(formValues.discount)) / 100),
          }
        )
      );
    }
    setFormValues(Object.assign({}, formValues, { [key]: value }));
  };

  const AfterProfitSellingPrice = (price:number)=>{
    const val = price+ (price * productPercent)/100
    return val;
  }
  const handleSubmit = async () => {

    const productToUpload = {
      product_object_id: productId,
      wholesaler_object_id: user?._id || "66866383cf6daa0537ad4d8d",
      buying_price: parseFloat(formValues.buyingPrice),
      marked_price: parseFloat(formValues.markedPrice),
      discount: parseFloat(formValues.discount),
      selling_price: AfterProfitSellingPrice(formValues.sellingPrice),
      current_stock: parseInt(formValues.quantity),
      selling_status: formValues.sellingStatus || "In Stock",
    };

    try {
      const response = await api.wholesaler.WholesalerUploadProduct(
        productToUpload
      );
      console.log("Product upload response:", response);
      // setFormValues({})
      Alert.alert("Success", "Product successfully uploaded");
    } catch (error) {
      console.error("Error uploading product:", error);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
        {/* <Image
          style={styles.logo}
          source={{
            uri: productImage,
          }}
        />
        <Text style={{ fontSize: 20, marginBottom: 20 }}>Product Selling Details</Text> */}

        <View style={styles.inputContainer}>
          {inputFields.map((option, index) => (
            <View key={option.field} style={styles.inputWrapper}>
              <TextInput
                label={option.label}
                value={formValues[option.field]}
                keyboardType={option.keyboardType}
                onChangeText={(text) => handleInputChange(option.field, text)}
                style={styles.input}
                mode="outlined"
              />
            </View>
          ))}
          <TextInput
            label="Selling Price (BDT)"
            value={String(formValues.sellingPrice)}
            keyboardType="numeric"
            disabled={true}
            style={{ width: "100%" }}
            mode="outlined"
          />
        </View>

        <Button
          mode="contained"
          onPress={handleSubmit}
          style={[globalStyle.blueButton, { width: "100%" }]}
        >
          Add to Stock
        </Button>
      </ScrollView>

      {/* <View style={styles.overlay}>
        <TouchableOpacity
          onPress={() => {
            // handle onPress
          }}
          style={{ flex: 1, paddingHorizontal: 24 }}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>Add to order ($15.95)</Text>
          </View>
        </TouchableOpacity>
      </View> */}
    </SafeAreaView>
  );
};

export default QuickAddProductForm;
