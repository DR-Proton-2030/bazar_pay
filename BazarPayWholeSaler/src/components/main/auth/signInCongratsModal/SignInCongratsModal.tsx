import React from "react";
import { Modal, View, Text, TouchableOpacity, Image } from "react-native";
import { globalStyle } from "../../../../globalStyles/globalStyles";
import { useNavigation } from "expo-router";
const succImg ="https://threedio-cdn.icons8.com/HroU_6HnTNCMu1zdBB1kOJipjo3fVqONqAoPNbVzjnE/rs:fit:1024:1024/czM6Ly90aHJlZWRp/by1wcm9kL3ByZXZp/ZXdzLzI1OS8xYWFm/MjQ1My1lMDM5LTQ4/OGItODNjOC0zMDM3/NWZlODNiZjkucG5n.png"


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
          <Image style={{height:200,width:200}} source={{uri:succImg}}/>
          <Text style={globalStyle.congratsText}>Congrats!</Text>
          <TouchableOpacity
            onPress={handleNavigate }
            style={globalStyle.closeButton}
          >
            <Text style={globalStyle.closeButtonText}>SIGN IN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default SignInCongratsModal;
