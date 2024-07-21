import { Image, Text, View } from "react-native"
import { styles } from "./genericLogo.styles"
import { GenericLogoType } from "../../utils/types/GenericLogo.type"

const GenericLogo = ({text, color}: GenericLogoType) =>{
    return(
        <View style={styles.logoContainer}>
            <Image source={require('../../assets/Animations/Crocodile.png')}/>
            <Text style={[styles.text,{color: color}]}>{text}</Text>
        </View>
    )
}
export default GenericLogo