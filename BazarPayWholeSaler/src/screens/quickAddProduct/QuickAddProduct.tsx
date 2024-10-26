import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native-animatable";
import QuickAddProductForm from "../../components/main/quickAddProductForm/QuickAddProductForm";
import { QuickAddProductDetails } from "../../components/shared/quickAddProductDetails/QuickAddProductDetails";

const QuickAddProductPage = () => {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const { productId, productImage ,productPercent ,productName,product_description }: any = route.params;

  const logoSource = Array.isArray(productImage) ? productImage[0] : productImage;


  return (
    <View style={{ flex: 1, backgroundColor: "#fff"}}>
      <QuickAddProductDetails logoSource={logoSource} productName={productName} product_description={product_description}
      productPercent={productPercent} productId={productId}/>
    
    </View>
  );
};

export default QuickAddProductPage;
