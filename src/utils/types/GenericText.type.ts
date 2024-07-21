import { TextStyle, StyleProp } from "react-native";
export interface GenericTextType{
    text: string;
    style?: StyleProp<TextStyle> | undefined;
}
