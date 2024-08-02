import React from 'react';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './Button.style';
import {scale} from 'react-native-size-matters';
import {Text} from 'components/Index';

interface ButtonType {
  text: string;
  onPress: () => void;
  backgroundColor?: string;
  textColor: string;
  buttonSize?: number;
  textSize?: number;
}

export const DefaultButton = ({
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
export const LinkButton = ({
  text,
  onPress,
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
