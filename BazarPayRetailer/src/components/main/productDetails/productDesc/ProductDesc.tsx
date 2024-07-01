import React from "react";
import { View, Text } from "react-native";

const ProductDesc = ({product}:any) => {
  return (
    <View style={{ paddingHorizontal: 20 }}>
      <Text
        style={{
          fontSize: 15,
          fontWeight: "700",
          marginBottom: 10,
          marginTop: 10,
        }}
      >
        Product Description
      </Text>
      <Text>
      {product?.product_description}
      </Text>
    </View>
  );
};

export default ProductDesc;
