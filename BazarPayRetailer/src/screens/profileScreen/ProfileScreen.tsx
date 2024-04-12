import React from "react";
import ProductHeader from "../../components/main/productDetails/productHeader/ProductHeader";
import Colors from "../../constants/Colors";
import { View, Image, Text, TouchableOpacity } from "react-native";
import ProfileView from "../../components/main/profile/profileView/ProfileView";
import EditOptions from "../../components/main/profile/editOptions/EditOptions";
import OtherLinks from "../../components/main/profile/otherLinks/OtherLinks";

const ProfileScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.light.background }}>
      <ProductHeader />
      <ProfileView />
      <EditOptions />
      <OtherLinks />
    </View>
  );
};

export default ProfileScreen;
