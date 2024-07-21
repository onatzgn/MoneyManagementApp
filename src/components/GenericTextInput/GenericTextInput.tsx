import { styles } from "./genericTextInput.style"
import { TextInput } from "react-native-gesture-handler"
import { getThemeColor } from "../../utils/color"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { GenericTextInputType } from "../../utils/types/GenericTextInput.type"

const GenericTextInput = ({onBlur, onChangeText, value, secureTextEntry, placeholder, keyboardType}: GenericTextInputType) => {
    const theme = useSelector((state: RootState) => state.theme.theme);
    const themeColors = getThemeColor(theme);  
    return(
        <TextInput
        onBlur={onBlur}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={secureTextEntry}
        style={[styles.input, {borderColor: themeColors.titleDefault}]}
        placeholder={placeholder}
        keyboardType={keyboardType}
        placeholderTextColor={themeColors.placeholder}
        />
    )
}
export default GenericTextInput