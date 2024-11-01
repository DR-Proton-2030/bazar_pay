import { MaterialIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { ScrollView, View, Text } from "react-native";
import AppHeader from "../../components/shared/appheader/AppHeader";
import CategoryCard from "../../components/shared/categoryCard/CategoryCard";
import ImageCard from "../../components/shared/imageCrad/ImageCard";
import ProductSection from "../../components/shared/productSection/ProductSection";
import ImageBanner from "../../components/shared/imageBanner/ImageBanner";
import OfferSection from "../../components/main/offerSection/OfferSection";
// import veg from "../../../assets/images/veg.png";
import { useContext, useEffect } from "react";
import AuthContext from "../../contexts/authContext/authContext";
import { ProductCartContext } from "../../contexts/productCartContext/Provider";
import StoryList from "../../components/shared/storyList/StoryList";

export default function HomePage() {
  const context = useContext(ProductCartContext);

  if (!context) {
    return <Text>Loading...</Text>;
  }

  const handleResetCart = () => {
    context.resetProductCart();
  };

  useEffect(() => {
    handleResetCart
  }, [])
  

  return (
    <>
      <ScrollView
        style={{
          backgroundColor: "white",
          // paddingHorizontal: 10,
          paddingBottom: 10,
          width: "100%",
        }}
      >
        <AppHeader />
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <CategoryCard
            text={"Grocery"}
            icon={() => (
              <MaterialIcons
                name="local-grocery-store"
                size={15}
                color="black"
              />
            )}
          />
          <CategoryCard
            text={"Mobile"}
            icon={() => (
              <Octicons name="device-mobile" size={15} color="black" />
            )}
          />
          <CategoryCard
            text={"Grocery"}
            icon={() => (
              <MaterialIcons
                name="local-grocery-store"
                size={15}
                color="black"
              />
            )}
          />
          <CategoryCard
            text={"Grocery"}
            icon={() => (
              <Octicons name="device-mobile" size={15} color="black" />
            )}
          />
        </ScrollView>

        <StoryList/>

        <OfferSection />

        <ProductSection />

      </ScrollView>
    </>
  );
}
