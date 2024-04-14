import React from "react";
import { View, Modal, TouchableOpacity, Animated } from "react-native";
import { DrawerContent } from "../../main/drawerContent/DrawerContent";

interface SideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  animatedValue: Animated.Value;
}

const SideDrawer: React.FC<SideDrawerProps> = ({
  isOpen,
  onClose,
  animatedValue,
}) => {
  return (
    <Modal
      visible={isOpen}
      transparent={true}
      onRequestClose={onClose}
      statusBarTranslucent
    >
      <TouchableOpacity
        style={{ flex: 1, backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        activeOpacity={1}
        onPress={onClose}
      >
        <Animated.View
          style={{ flex: 1, transform: [{ translateX: animatedValue }] }}
        >
          <TouchableOpacity
            style={{ width: "77%", backgroundColor: "white", flex: 1 }}
            activeOpacity={1}
          >
            <DrawerContent />
          </TouchableOpacity>
        </Animated.View>
      </TouchableOpacity>
    </Modal>
  );
};

export default SideDrawer;
