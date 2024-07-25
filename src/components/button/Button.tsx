import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './Button.style';
import Text from '../text/Text';

export interface ButtonType {
  text: string;
  onPress: () => void;
  backgroundColor?: string;
  textColor: string,
}

const DefaultButton = ({ text, onPress, backgroundColor, textColor }: ButtonType) => {
  return (
    <View style={[styles.defaultButtonContainer, { backgroundColor: backgroundColor }]}>
      <TouchableOpacity
        onPress={onPress}
        style={styles.defaultButton}>
        <Text text={text} style={[styles.defaultButtonText, { color: textColor }]}></Text>
      </TouchableOpacity>
    </View>
  )
}
const LinkButton = ({ text, onPress, backgroundColor, textColor }: ButtonType) => {
  return (
    <View style={[styles.linkButtonContainer]}>
      <TouchableOpacity
        onPress={onPress}>
        <Text text={text} style={[styles.linkButtonText, { color: textColor }]}></Text>
      </TouchableOpacity>
    </View>
  )
}

export { DefaultButton, LinkButton };
