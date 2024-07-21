import { Image, View } from "react-native"
import { styles } from "./genericLogo.styles"
import { GenericLogoType } from "../../utils/types/GenericLogo.type"
import GenericText from "../GenericText/GenericText"

const GenericLogo = ({text, color}: GenericLogoType) =>{
    return(
        <View style={styles.logoContainer}>
            <Image source={require('../../assets/Animations/Crocodile.png')}/>
            <GenericText text={text} style={[styles.text,{color: color}]}/>
        </View>
    )
}
export default GenericLogo