import * as React from "react";
import { FAB, Portal, PaperProvider } from "react-native-paper";
import { IFavGroupProps } from "../../../@types/props/FavGroup.props";
import Colors from "../../../constants/Colors";

const FavGroup = ({action_list}: IFavGroupProps) => {
  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }: { open: boolean }) => setState({ open });

  const { open } = state;

  return (
    <FAB.Group
      open={open}
      visible
      rippleColor={Colors.light.lightViolet}
      fabStyle={{backgroundColor:Colors.light.secondary}}
      color="white"
      icon={open ? "close" : "plus"}
      actions={action_list}
      onStateChange={onStateChange}
      // onPress={() => {
      //   if (open) {
      //     // do something if the speed dial is open
      //   }
      // }}
    />
  );
};

export default FavGroup;
