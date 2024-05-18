import { FontAwesome } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { ScrollView, View, Text } from "react-native";
import AppHeader from "../../components/shared/appheader/AppHeader";
import ImageCard from "../../components/shared/imageCrad/ImageCard";
import ProductSection from "../../components/shared/productSection/ProductSection";
import ImageBanner from "../../components/shared/imageBanner/ImageBanner";
import OfferSection from "../../components/main/offerSection/OfferSection";
import veg from "../../../assets/images/veg.png";
import SmallCard from "../../components/shared/smallCard/SmallCard";

export default function HomePage() {
  return (
    <>
      <ScrollView
        style={{
          backgroundColor: "white",
          // paddingHorizontal: 20,
          paddingBottom: 10,
          width: "100%",
        }}
      >
        <AppHeader />
        <ScrollView
          style={{ paddingLeft: 10 }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {/* <Text>hello</Text>
          <Text>hello</Text>
          <Text>hello</Text> */}
          {/* <SmallCard/> */}
          <SmallCard
            text={"Grocery"}
            icon={() => (
              <FontAwesome
                name="bell"
                size={22}
                color="black"
              />
            )}
          />
          {/* <Text>Hello</Text> */}
        </ScrollView>
        <ScrollView
          style={{ paddingLeft: 10 }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <ImageCard text={"Fresh, Healthier"} />
          <ImageCard text={"Fresh, Healthier"} />
          <ImageCard text={"Fresh, Healthier"} />
          <ImageCard text={"Fresh, Healthier"} />
        </ScrollView>

        <OfferSection />
        <ProductSection />
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <ImageBanner backgroundColor="FEDE27" imageUri={veg} />
          <ImageBanner backgroundColor="FEDE27" imageUri={veg} />
          <ImageBanner backgroundColor="FEDE27" imageUri={veg} />
        </ScrollView>

        <ProductSection />
      </ScrollView>
    </>
  );
}
