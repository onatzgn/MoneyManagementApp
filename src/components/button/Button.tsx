import {View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './Button.style';
import Text from '../text/Text';
import {scale} from 'react-native-size-matters';

export interface ButtonType {
  text: string;
  onPress: () => void;
  backgroundColor?: string;
  textColor: string;
  buttonSize?: number;
  textSize?: number;
}

const DefaultButton = ({
  text,
  onPress,
  backgroundColor,
  textColor,
  buttonSize = scale(280),
  textSize = 15,
}: ButtonType) => {
  return (
    <View
      style={[
        styles.defaultButtonContainer,
        {backgroundColor: backgroundColor, width: buttonSize},
      ]}>
      <TouchableOpacity onPress={onPress} style={styles.defaultButton}>
        <Text
          text={text}
          style={[
            styles.defaultButtonText,
            {color: textColor, fontSize: textSize},
          ]}></Text>
      </TouchableOpacity>
    </View>
  );
};
const LinkButton = ({
  text,
  onPress,
  backgroundColor,
  textColor,
}: ButtonType) => {
  return (
    <View style={[styles.linkButtonContainer]}>
      <TouchableOpacity onPress={onPress}>
        <Text
          text={text}
          style={[styles.linkButtonText, {color: textColor}]}></Text>
      </TouchableOpacity>
    </View>
  );
};

export {DefaultButton, LinkButton};
