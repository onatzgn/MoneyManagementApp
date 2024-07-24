import { Image, View } from "react-native"
import { styles } from "./Logo.styles"
import GenericText from "../text/Text"

export interface LogoType {
    text: string,
    color: string
}

const GenericLogo = ({ text, color }: LogoType) => {
    return (
        <View style={styles.logoContainer}>
            <Image source={require('../../assets/Animations/Crocodile.png')} />
            <GenericText text={text} style={[styles.text, { color: color }]} />
        </View>
    )
}
export default GenericLogo
