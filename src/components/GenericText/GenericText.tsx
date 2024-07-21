import { Text } from "react-native"
import { styles } from "./genericText.style"
import { GenericTextType } from "../../utils/types/GenericText.type"

const GenericText = ({text, style}: GenericTextType) => {
    return(
        <Text style={[style, styles.text]}>{text}</Text>
    )
}
export default GenericText