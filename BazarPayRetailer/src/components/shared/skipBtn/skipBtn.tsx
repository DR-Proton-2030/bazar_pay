import { TouchableOpacity, StyleSheet, Text } from "react-native";
import Colors from "../../../constants/Colors";

export const SkipBtn = ({ onPress }: any) => (
  <TouchableOpacity style={styles.skipButton} onPress={onPress}>
    <Text style={styles.skipText}>Skip</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  skipButton: {
    position: "absolute",
    top: 40,
    right: 20,
    zIndex: 1,
  },
  skipText: {
    fontSize: 20,
    fontWeight: "500",
    color: Colors.light.orange,
  },
  nextButton: {
    backgroundColor: Colors.light.orange,
    marginTop: 30,
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  nextButtonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});
