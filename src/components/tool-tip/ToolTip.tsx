import React, {useEffect, useState} from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {styles} from './ToolTip.style';
import {Text} from 'components/Index';

interface ToolTipType {
  content: string | undefined;
  children: React.ReactNode;
  style: StyleProp<ViewStyle>;
  onPress?: (event: GestureResponderEvent) => void;
}

export const Tooltip = ({style, children, content}: ToolTipType) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 2000);
  }, [visible]);
  const handlePress = () => {
    setVisible(!visible);
    setTimeout(() => {
      setVisible(false);
    }, 2000);
  };
  return (
    <View style={styles.toolTipContainer}>
      <TouchableOpacity onPress={handlePress} style={style}>
        {children}
      </TouchableOpacity>
      {visible && (
        <View style={styles.visibleContainer}>
          <Text style={styles.toolTipText} text={content} />
          <View style={styles.arrowDown} />
        </View>
      )}
    </View>
  );
};
