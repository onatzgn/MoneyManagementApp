import React from 'react';
import {useRef, useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import {styles} from './TextAnimation.styles';
import {useSelector} from 'react-redux';
import {getThemeColor} from '@utils/Color';
import {RootState} from '@redux/Store';

export const TextAnimation = (props: {
  text: string | any[];
  onComplete: () => void;
}) => {
  const [text, setText] = useState('');
  const [cursorColor, setCursorColor] = useState('transparent');
  const [messageIndex, setMessageIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [timeouts, setTimeouts] = useState<{
    cursorTimeout: NodeJS.Timeout | undefined;
    typingTimeout: NodeJS.Timeout | undefined;
    completionTimeout: NodeJS.Timeout | undefined;
  }>({
    cursorTimeout: undefined,
    typingTimeout: undefined,
    completionTimeout: undefined,
  });

  const textRef = useRef(text);
  const cursorColorRef = useRef(cursorColor);
  const messageIndexRef = useRef(messageIndex);
  const textIndexRef = useRef(textIndex);
  const timeoutsRef = useRef(timeouts);

  const theme = useSelector(
    (state: RootState) => state.persistedReducer.theme.theme,
  );
  const themeColors = getThemeColor(theme);

  useEffect(() => {
    textRef.current = text;
  }, [text]);

  useEffect(() => {
    cursorColorRef.current = cursorColor;
  }, [cursorColor]);

  useEffect(() => {
    messageIndexRef.current = messageIndex;
  }, [messageIndex]);

  useEffect(() => {
    textIndexRef.current = textIndex;
  }, [textIndex]);

  useEffect(() => {
    timeoutsRef.current = timeouts;
  }, [timeouts]);

  useEffect(() => {
    const typingAnimation = () => {
      if (textIndexRef.current < props.text[messageIndexRef.current].length) {
        setText(
          textRef.current +
            props.text[messageIndexRef.current].charAt(textIndexRef.current),
        );
        setTextIndex(textIndexRef.current + 1);
        setTimeouts({
          ...timeoutsRef.current,
          typingTimeout: setTimeout(typingAnimation, 50),
        });
      } else if (messageIndexRef.current + 1 < props.text.length) {
        setMessageIndex(messageIndexRef.current + 1);
        setTextIndex(0);
        setText(textRef.current + '\n');
        setTimeouts({
          ...timeoutsRef.current,
          typingTimeout: setTimeout(typingAnimation, 500),
        });
      } else {
        clearInterval(timeoutsRef.current.cursorTimeout);
        setCursorColor('transparent');

        let totalLength = 0;
        if (typeof props.text === 'string') {
          totalLength = props.text.length;
        } else if (Array.isArray(props.text)) {
          totalLength = props.text.join('').length;
        }

        const completionDelay = Math.max(totalLength * 15);

        setTimeouts({
          ...timeoutsRef.current,
          completionTimeout: setTimeout(() => {
            if (props.onComplete) {
              props.onComplete();
            }
          }, completionDelay),
        });
      }
    };

    const cursorAnimation = () => {
      setCursorColor(prevColor =>
        prevColor === 'transparent' ? '#8EA960' : 'transparent',
      );
    };

    setTimeouts({
      typingTimeout: setTimeout(typingAnimation, 500),
      cursorTimeout: setInterval(cursorAnimation, 250),
      completionTimeout: undefined,
    });

    return () => {
      clearTimeout(timeoutsRef.current.typingTimeout);
      clearInterval(timeoutsRef.current.cursorTimeout);
      if (timeoutsRef.current.completionTimeout) {
        clearTimeout(timeoutsRef.current.completionTimeout);
      }
    };
  }, []);

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: themeColors.onBoardingTextContainer},
      ]}>
      <Text style={[styles.text, {color: themeColors.onBoardingText}]}>
        {text}
        <Text style={{color: cursorColor, fontSize: 15}}>|</Text>
      </Text>
    </View>
  );
};
