import React, {useState, useRef} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Animated,
  Image,
  GestureResponderEvent,
} from 'react-native';
import {styles} from './AccordionButton.style';
import Icons from '@assets/Icons';
import {Text} from '@components';

interface AccordionButtonBaseProps {
  orientation: 'horizontal' | 'vertical';
  buttonIcon: any;
  insideContent: (toggleOpen: () => void) => React.ReactNode;
}

const AccordionButtonBase: React.FC<AccordionButtonBaseProps> = ({
  orientation,
  buttonIcon,
  insideContent,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const sizeAnim = useRef(new Animated.Value(50)).current;

  const containerStyle =
    orientation === 'horizontal'
      ? styles.containerHorizontal
      : styles.containerVertical;
  const insideContainerStyle =
    orientation === 'horizontal'
      ? styles.insideContainerHorizontal
      : styles.insideContainerVertical;
  const buttonContainerStyle =
    orientation === 'horizontal'
      ? styles.buttonContainerHorizontal
      : styles.buttonContainerVertical;

  const toggleOpen = () => {
    Animated.timing(sizeAnim, {
      toValue: isOpen ? 50 : 200,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setIsOpen(!isOpen);
  };

  return (
    <View style={containerStyle}>
      <Animated.View
        style={[
          buttonContainerStyle,
          {[orientation === 'horizontal' ? 'width' : 'height']: sizeAnim},
        ]}>
        <TouchableOpacity
          style={styles.roundButton}
          onPress={toggleOpen}
          activeOpacity={0.8}>
          <Image
            source={buttonIcon}
            resizeMode="contain"
            style={styles.icon}
            tintColor={'black'}
          />
        </TouchableOpacity>
        {isOpen && (
          <View style={insideContainerStyle}>{insideContent(toggleOpen)}</View>
        )}
      </Animated.View>
    </View>
  );
};

export const AccordionButton = () => {
  const [inputValue, setInputValue] = useState('50');

  const insideContent = (
    toggleOpen: ((event: GestureResponderEvent) => void) | undefined,
  ) => (
    <>
      <TextInput
        style={styles.inputHorizontal}
        placeholder="Gir"
        keyboardType="numeric"
        selectionHandleColor={'black'}
        value={inputValue}
        onChangeText={setInputValue}
      />
      <TouchableOpacity
        style={styles.saveButtonHorizontal}
        onPress={toggleOpen}>
        <Image
          source={Icons.moneySave}
          resizeMode="contain"
          style={styles.moneySaveIcon}
        />
      </TouchableOpacity>
    </>
  );

  return (
    <AccordionButtonBase
      orientation="horizontal"
      buttonIcon={Icons.moneyReceive}
      insideContent={insideContent}
    />
  );
};

export const AccordionButtonVertical = () => {
  const insideContent = () => (
    <>
      <TouchableOpacity style={styles.changeButton}>
        <Text text="+" style={styles.changeButtonText}></Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.changeButton}>
        <Text text="-" style={styles.changeButtonText}></Text>
      </TouchableOpacity>
    </>
  );

  return (
    <AccordionButtonBase
      orientation="vertical"
      buttonIcon={Icons.currencyCoin}
      insideContent={insideContent}
    />
  );
};
