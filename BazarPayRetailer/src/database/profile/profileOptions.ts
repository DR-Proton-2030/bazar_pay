import { useNavigation } from "expo-router";

interface Option {
  iconName: string;
  iconColor: string;
  text: string;
  route: string;
}
export const options: Option[] = [
  {
    iconName: "container",
    iconColor: "green",
    text: "Orders",
    route:"paymentHistory"
  },
  {
    iconName: "person",
    iconColor: "blue",
    text: "Profile",
    route:"paymentHistory",
  },
  {
    iconName: "location",
    iconColor: "red",
    text: "Address",
    route:"paymentHistory",
  },
  {
    iconName: "chat-bubble-outline",
    iconColor: "orange",
    text: "Message",
    route:"paymentHistory",
  },
];
