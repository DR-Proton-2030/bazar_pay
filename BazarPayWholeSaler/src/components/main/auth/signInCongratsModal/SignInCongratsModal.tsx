import React from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import { globalStyle } from "../../../../globalStyles/globalStyles";
import { useNavigation } from "expo-router";

const SignInCongratsModal = ({
  isCongratsModalVisible,
  setIsCongratsModalVisible,
}: any) => {
  const navigation: any = useNavigation();
  const handleNavigate = () => {
    setIsCongratsModalVisible(false);
    navigation.navigate("homePage");
  };
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isCongratsModalVisible}
      onRequestClose={() => {
        setIsCongratsModalVisible(!isCongratsModalVisible);
      }}
    >
      <View style={globalStyle.congratsModalContainer}>
        <View style={globalStyle.congratsModalContent}>
          <Text style={globalStyle.congratsText}>Congrats!</Text>
          <TouchableOpacity
            onPress={handleNavigate }
            style={globalStyle.closeButton}
          >
            <Text style={globalStyle.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default SignInCongratsModal;
