import {View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './genericButton.style';
import { GenericButtonType } from '../../utils/types/GenericButton.type';
import GenericText from '../GenericText/GenericText';

const GenericButton = ({text, onPress, backgroundColor, textColor}: GenericButtonType) => {
  return (
    <View style={[styles.buttonContainer,{backgroundColor: backgroundColor}]}>
      <TouchableOpacity
        onPress={onPress}
        style={styles.button}>
        <GenericText text={text} style={[styles.buttonText,{color: textColor, textAlign: 'center'}]}></GenericText>
      </TouchableOpacity>
    </View>
  );
};
export default GenericButton;
