import { KeyboardTypeOptions } from "react-native";

export interface IForm {
  label: string;
  placeholder?: string;
  field: string;
  keyboardType?: KeyboardTypeOptions | undefined;
}
