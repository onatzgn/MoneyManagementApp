import { KeyboardTypeOptions } from "react-native";

export interface GenericTextInputType{
    onBlur: () => void,
    onChangeText: (text: string) => void,
    value: string,
    secureTextEntry: boolean,
    placeholder: string,
    keyboardType: KeyboardTypeOptions,
}
