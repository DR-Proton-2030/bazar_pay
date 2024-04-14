import { MaterialIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { ScrollView, View, Text } from "react-native";
import AppHeader from "../../components/shared/appheader/AppHeader";
import CategoryCard from "../../components/shared/categoryCard/CategoryCard";
import ImageCard from "../../components/shared/imageCrad/ImageCard";
import ProductSection from "../../components/shared/productSection/ProductSection";
import ImageBanner from "../../components/shared/imageBanner/ImageBanner";
import OfferSection from "../../components/main/offerSection/OfferSection";
import { DrawerContent } from "../../components/main/drawerContent/DrawerContent";

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
        <ScrollView horizontal={true}>
          <ImageBanner
            backgroundColor="FEDE27"
            imageUri="https://s3-alpha-sig.figma.com/img/7239/466d/ad4849785eabfa9fb7ddcd368f7eb0a3?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bWkxYwuGdXJYm~adcU1n0xLziGzvMo2cI~eKShwqp5gkRjH9DMbkxyQSPzi~MymG0-zYw35lLvHxJ4po-PjggicXXfYw7yMyg-~emBFI36TpSyXMHRH0y9i3ZWGfI-AF6BmQe8HpqXYCwfK9x6o0jxUInz~7kkLc2gnJjbCX5PZaK0a7ye5TWYMTZMab1sRAwfnzR0FVlKnsZvxRnrRD2-zG-RLv1fxaUEqmDsHM0GfFzsZJYjMSwzx5vboXEuf~RcOJVaNxoPr~UQvt858w~lpRCplkRxsqGT9EM0EXv~jttWiY7p1J6FfMyOa7kx3HEEOM-OL8UrKJo~jOPQdqBQ__"
          />
          <ImageBanner
            backgroundColor="FEDE27"
            imageUri="https://s3-alpha-sig.figma.com/img/7239/466d/ad4849785eabfa9fb7ddcd368f7eb0a3?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bWkxYwuGdXJYm~adcU1n0xLziGzvMo2cI~eKShwqp5gkRjH9DMbkxyQSPzi~MymG0-zYw35lLvHxJ4po-PjggicXXfYw7yMyg-~emBFI36TpSyXMHRH0y9i3ZWGfI-AF6BmQe8HpqXYCwfK9x6o0jxUInz~7kkLc2gnJjbCX5PZaK0a7ye5TWYMTZMab1sRAwfnzR0FVlKnsZvxRnrRD2-zG-RLv1fxaUEqmDsHM0GfFzsZJYjMSwzx5vboXEuf~RcOJVaNxoPr~UQvt858w~lpRCplkRxsqGT9EM0EXv~jttWiY7p1J6FfMyOa7kx3HEEOM-OL8UrKJo~jOPQdqBQ__"
          />
          <ImageBanner
            backgroundColor="FEDE27"
            imageUri="https://s3-alpha-sig.figma.com/img/7239/466d/ad4849785eabfa9fb7ddcd368f7eb0a3?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bWkxYwuGdXJYm~adcU1n0xLziGzvMo2cI~eKShwqp5gkRjH9DMbkxyQSPzi~MymG0-zYw35lLvHxJ4po-PjggicXXfYw7yMyg-~emBFI36TpSyXMHRH0y9i3ZWGfI-AF6BmQe8HpqXYCwfK9x6o0jxUInz~7kkLc2gnJjbCX5PZaK0a7ye5TWYMTZMab1sRAwfnzR0FVlKnsZvxRnrRD2-zG-RLv1fxaUEqmDsHM0GfFzsZJYjMSwzx5vboXEuf~RcOJVaNxoPr~UQvt858w~lpRCplkRxsqGT9EM0EXv~jttWiY7p1J6FfMyOa7kx3HEEOM-OL8UrKJo~jOPQdqBQ__"
          />
        </ScrollView>

        <ProductSection />
      </ScrollView>
    </>
  );
}
