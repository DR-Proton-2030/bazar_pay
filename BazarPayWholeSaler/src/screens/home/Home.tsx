
import { ScrollView, View, Text } from "react-native";
import AppHeader from "../../components/shared/appheader/AppHeader";
import ImageCard from "../../components/shared/imageCrad/ImageCard";
import ProductSection from "../../components/shared/productSection/ProductSection";
import ImageBanner from "../../components/shared/imageBanner/ImageBanner";
import OfferSection from "../../components/main/offerSection/OfferSection";
import veg from "../../../assets/images/veg.png";import TopItems from "./topItems/TopItems";
import WorkList from "./workList/WorkList";
import SecondBoxList from "./secondBoxList/SecondBoxList";
import { useContext } from "react";
import AuthContext from "../../contexts/authContext/authContext";
;

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
        <TopItems/>
        <WorkList/>
        <SecondBoxList/>
      </ScrollView>
    </>
  );
}
