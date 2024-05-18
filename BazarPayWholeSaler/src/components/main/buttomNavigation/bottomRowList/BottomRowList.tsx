import { View } from "react-native";
import { BottomRowOption } from "../buttomRowOption/ButtomRowOption";
import { globalStyle } from "../../../../globalStyles/globalStyles";

export const BottomRow: React.FC<{
  options: { icon: string; onPress: () => void }[];
}> = ({ options }) => (
  <View style={globalStyle.bottomRow}>
    {options.map((option, index) => (
      <BottomRowOption
        key={index}
        icon={option.icon}
        onPress={option.onPress}
        active={index === 0} // Assuming first option is active initially
      />
    ))}
  </View>
);
