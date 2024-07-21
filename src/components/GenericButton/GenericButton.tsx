import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './genericButton.style';
import { GenericButtonType } from '../../utils/types/GenericButton.type';

const GenericButton = ({text, onPress, backgroundColor, textColor}: GenericButtonType) => {
  return (
    <View style={[styles.buttonContainer,{backgroundColor: backgroundColor}]}>
    <TouchableOpacity
      onPress={onPress}
      style={styles.button}>
      <Text style={[styles.buttonText,{color: textColor, textAlign: 'center'}]}>{text}</Text>
    </TouchableOpacity>
    
    </View>
  );
};
export default GenericButton;
