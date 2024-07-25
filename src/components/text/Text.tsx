import {Text} from 'react-native';
import {styles} from './Text.style';

import {TextStyle, StyleProp} from 'react-native';
import {ReactNode} from 'react';
export interface TextType {
  text: string | undefined;
  children?: ReactNode;
  style?: StyleProp<TextStyle> | undefined;
}

const GenericText = ({text, style, children}: TextType) => {
  return (
    <Text style={[style, styles.text]}>
      {text}
      {children}
    </Text>
  );
};
export default GenericText;
