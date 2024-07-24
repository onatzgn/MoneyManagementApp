import { View } from "react-native"
import { useSelector } from "react-redux"
import { TextInput } from "react-native-gesture-handler"
import Icon from "react-native-vector-icons/Ionicons";
import { getThemeColor } from "@utils/Color"
import { RootState } from "@redux/Store"
import { styles } from "./TextInput.style"

import { KeyboardTypeOptions } from "react-native";
export interface TextInputType {
    iconName: string,
    onBlur: () => void,
    onChangeText: (text: string) => void,
    value: string,
    secureTextEntry: boolean,
    placeholder: string,
    keyboardType: KeyboardTypeOptions,
}

const GenericTextInput = ({ iconName, onBlur, onChangeText, value, secureTextEntry, placeholder, keyboardType }: TextInputType) => {
    const theme = useSelector((state: RootState) => state.persistedReducer.theme.theme);
    const themeColors = getThemeColor(theme);
    return (
        <View style={styles.inputContainer}>
            <Icon name={iconName} size={25} color={themeColors.titleDefault} style={styles.icon} />
            <TextInput
                onBlur={onBlur}
                onChangeText={onChangeText}
                value={value}
                secureTextEntry={secureTextEntry}
                style={[styles.input, { borderColor: themeColors.titleDefault }]}
                placeholder={placeholder}
                keyboardType={keyboardType}
                placeholderTextColor={themeColors.placeholder}
            />
        </View>
    )
}
export default GenericTextInput
