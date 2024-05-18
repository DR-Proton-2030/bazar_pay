interface Option {
  iconName: string;
  iconColor: string;
  text: string;
  onPress: () => void;
}

export const options: Option[] = [
  {
    iconName: "container",
    iconColor: "green",
    text: "Orders",
    onPress: () => console.log("Orders pressed"),
  },
  {
    iconName: "person",
    iconColor: "blue",
    text: "Profile",
    onPress: () => console.log("Profile pressed"),
  },
  {
    iconName: "location",
    iconColor: "red",
    text: "Address",
    onPress: () => console.log("Address pressed"),
  },
  {
    iconName: "chat-bubble-outline",
    iconColor: "orange",
    text: "Message",
    onPress: () => console.log("Message pressed"),
  },
];
