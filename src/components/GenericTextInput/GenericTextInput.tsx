import { styles } from "./genericTextInput.style"
import { TextInput } from "react-native-gesture-handler"
import { getThemeColor } from "../../utils/color"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { GenericTextInputType } from "../../utils/types/GenericTextInput.type"
import Icon from "react-native-vector-icons/Ionicons";
import { View } from "react-native"

const GenericTextInput = ({ iconName, onBlur, onChangeText, value, secureTextEntry, placeholder, keyboardType }: GenericTextInputType) => {
    const theme = useSelector((state: RootState) => state.theme.theme);
    const themeColors = getThemeColor(theme);
    return (
        <View style={{ width: '100%', alignItems: 'center' }}>
            <Icon name={iconName} size={20} color={themeColors.titleDefault} style={styles.icon} />
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