import React from 'react'
import { Modal, View,Text, TouchableOpacity } from 'react-native';
import { globalStyle } from '../../../../globalStyles/globalStyles';

const SignInCongratsModal = ({isCongratsModalVisible,setIsCongratsModalVisible}:any) => {
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
              onPress={() => setIsCongratsModalVisible(false)}
              style={globalStyle.closeButton}
            >
              <Text style={globalStyle.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
  )
}

export default SignInCongratsModal