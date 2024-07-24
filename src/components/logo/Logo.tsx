import { Image, View } from "react-native"
import { styles } from "./Logo.styles"
import Text from "../text/Text"

export interface LogoType {
    text: string,
    color: string
}

const Logo = ({ text, color }: LogoType) => {
    return (
        <View style={styles.logoContainer}>
            <Image source={require('../../assets/Animations/Crocodile.png')} />
            <Text text={text} style={[styles.text, { color: color }]} />
        </View>
    )
}
export default Logo
