import {View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './genericButton.style';
import { GenericButtonType } from '../../utils/types/GenericButton.type';
import GenericText from '../GenericText/GenericText';

const DefaultButton = ({text, onPress, backgroundColor, textColor}: GenericButtonType) => {
  return(
    <View style={[styles.defaultButtonContainer,{backgroundColor: backgroundColor}]}>
    <TouchableOpacity
      onPress={onPress}
      style={styles.defaultButton}>
      <GenericText text={text} style={[styles.defaultButtonText,{color: textColor}]}></GenericText>
    </TouchableOpacity>
  </View>
  
  )
}
const LinkButton = ({text, onPress, backgroundColor, textColor}: GenericButtonType) => {
  return(
    <View style={[styles.linkButtonContainer]}>
    <TouchableOpacity
      onPress={onPress}>
      <GenericText text={text} style={[styles.linkButtonText,{color: textColor}]}></GenericText>
    </TouchableOpacity>
  </View>  
  )
}

export {DefaultButton, LinkButton};
