import React from 'react';
import {Text as RNText, TextStyle, StyleProp} from 'react-native';
import {styles} from './Text.style';
import {ReactNode} from 'react';

interface TextType {
  text: string | undefined;
  children?: ReactNode;
  style?: StyleProp<TextStyle> | undefined;
}

export const Text = ({text, style, children}: TextType) => {
  return (
    <RNText style={[style, styles.text]}>
      {text}
      {children}
    </RNText>
  );
};
