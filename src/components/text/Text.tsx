import { Text } from "react-native"
import { styles } from "./Text.style"

import { TextStyle, StyleProp } from "react-native";
export interface TextType {
    text: string;
    style?: StyleProp<TextStyle> | undefined;
}

const GenericText = ({ text, style }: TextType) => {
    return (
        <Text style={[style, styles.text]}>{text}</Text>
    )
}
export default GenericText
