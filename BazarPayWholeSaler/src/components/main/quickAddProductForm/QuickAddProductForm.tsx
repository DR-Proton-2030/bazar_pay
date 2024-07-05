import React, { useContext, useState } from 'react';
import { View, StyleSheet, ScrollView, Image, Text, Alert } from 'react-native';
import { TextInput, Button, Provider } from 'react-native-paper';
import { api } from '../../../utils/api';
import { styles } from './quickProductFormStyle';
import { inputFields } from '../../../constants/quickProduct/inputField';
import AuthContext from '../../../contexts/authContext/authContext';

const QuickAddProductForm = ({productId}:any) => {
  const [product, setProduct] = useState('');
  const {user} = useContext(AuthContext)
  const [formValues, setFormValues] = useState<any>({
    quantity: '',
    buyingPrice: '',
    markedPrice: '',
    discount: '',
    sellingPrice: '',
    currentStock: '',
    sellingStatus: '',
  });

  const handleInputChange = (key: string, value: string) => {
    setFormValues((prevValues: any) => ({ ...prevValues, [key]: value }));
  };

  const handleSubmit = async () => {
    const productToUpload = {
      product_object_id: productId,
      wholesaler_object_id: user?._id || "66866383cf6daa0537ad4d8d",
      buying_price: parseFloat(formValues.buyingPrice),
      marked_price: parseFloat(formValues.markedPrice),
      discount: parseFloat(formValues.discount),
      selling_price: parseFloat(formValues.sellingPrice),
      current_stock: parseInt(formValues.currentStock),
      selling_status: formValues.sellingStatus || 'In Stock',
    };

    try {
      const response = await api.wholesaler.WholesalerUploadProduct(productToUpload)
      console.log("Product upload response:", response);
      // setFormValues({})
      Alert.alert("seccess", "Product successfully uploaded")
    } catch (error) {
      console.error("Error uploading product:", error);
    }
  };

  return (
    <Provider>
      <ScrollView contentContainerStyle={styles.container}>
        <Image style={styles.logo} source={{ uri: "https://threedio-cdn.icons8.com/qydSCIbK16H3LBZ72EG3nWXgTacqfcQxsvEwye_IEVE/rs:fit:1024:1024/czM6Ly90aHJlZWRp/by1wcm9kL3ByZXZp/ZXdzLzkwNS8yMTYz/OTE0NS0wMWFhLTQ3/MmEtODliOC04M2Q3/OGQwYzNmMDkucG5n.png" }} />
        <Text style={{ fontSize: 20, marginBottom: 20 }}>
          Upload product selling details
        </Text>

        <View style={styles.inputContainer}>
          {inputFields.map((field, index) => (
            <View key={field.key} style={styles.inputWrapper}>
              <TextInput
                label={field.label}
                value={formValues[field.key]}
                onChangeText={(text) => handleInputChange(field.key, text)}
                style={styles.input}
                mode='outlined'
              />
            </View>
          ))}
        </View>

        <Button mode="contained" onPress={handleSubmit} style={styles.button}>
          Add Product
        </Button>
      </ScrollView>
    </Provider>
  );
};



export default QuickAddProductForm;
