import React from "react";
import { View, Text } from "react-native";

const ProductDesc = () => {
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
        Lörem ipsum hundvissla vide. Demimatisk sasat sare men pulverbrev den
        nysare. Pred tetrase luten, men katt. Kroliga desyde ten astrosoheten
        även om fakrorade. Decilogi infrara.
      </Text>
    </View>
  );
};

export default ProductDesc;
