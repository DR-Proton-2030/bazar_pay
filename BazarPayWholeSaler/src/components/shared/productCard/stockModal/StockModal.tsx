import * as React from "react";
import { TouchableOpacity } from "react-native";
import {
  Modal,
  Portal,
  Text,
  Button,
  PaperProvider,
  TextInput,
} from "react-native-paper";
import productCardStyles from "../productCardStyles";

const StockModal = ({
  visible,
  hideModal,
  type,
  value
}: {
  visible: boolean;
  value: string;
  type: "STOCK" | "PRICE";  
  hideModal: () => void;
}) => {
  const containerStyle = { backgroundColor: "white", padding: 20 };

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={containerStyle}
      >
        <TextInput
          mode="outlined"
          label= {type === "STOCK" ? " Edit Stock" : "Edit Price"}
          placeholder="Type something"
          value={value}
          right={<TextInput.Icon icon="content-save-outline" color="blue" />}
        />
      </Modal>
    </Portal>
  );
};

export default StockModal;
