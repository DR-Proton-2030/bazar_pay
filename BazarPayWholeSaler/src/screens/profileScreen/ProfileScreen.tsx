import React from "react";
import ProductHeader from "../../components/main/productDetails/productHeader/ProductHeader";
import Colors from "../../constants/Colors";
import { View, Image, Text, TouchableOpacity, SafeAreaView } from "react-native";
import ProfileView from "../../components/main/profile/profileView/ProfileView";
import EditOptions from "../../components/main/profile/editOptions/EditOptions";
import OtherLinks from "../../components/main/profile/otherLinks/OtherLinks";
import CommonHeader from "../../components/shared/commonHeader/CommonHeader";

const ProfileScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.light.background }}>
      <CommonHeader text="Profile Details" />
      <ProfileView />
      <EditOptions />
      <OtherLinks />
    </SafeAreaView>
  );
};

export default ProfileScreen;
