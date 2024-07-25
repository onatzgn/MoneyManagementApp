import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {getThemeColor} from '@utils/Color';
import {RootState} from '@redux/Store';
import {styles} from './TextInput.style';
import MaskInput from 'react-native-mask-input';
import {KeyboardTypeOptions} from 'react-native';
import Tooltip from '@components/tool-tip/ToolTip';
const phoneMask = [
  '+',
  '9',
  '0',
  '-',
  '5',
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
];
export interface TextInputType {
  iconName: string;
  onBlur: () => void;
  onChangeText: (text: string) => void;
  value: string;
  secureTextEntry: boolean;
  placeholder: string;
  keyboardType: KeyboardTypeOptions;
  errorMessage: string | undefined;
}

const GenericTextInput = ({
  iconName,
  onBlur,
  onChangeText,
  value,
  secureTextEntry,
  placeholder,
  keyboardType,
  errorMessage,
}: TextInputType) => {
  const theme = useSelector(
    (state: RootState) => state.persistedReducer.theme.theme,
  );
  const themeColors = getThemeColor(theme);
  return (
    <View style={styles.inputContainer}>
      <Icon
        name={iconName}
        size={25}
        color={themeColors.titleDefault}
        style={styles.icon}
      />
      <TextInput
        onBlur={onBlur}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={secureTextEntry}
        style={[
          styles.input,
          {
            borderColor: themeColors.titleDefault,
            color: themeColors.titleDefault,
          },
        ]}
        placeholder={placeholder}
        keyboardType={keyboardType}
        placeholderTextColor={themeColors.placeholder}
      />
      {errorMessage && (
        <Tooltip
          content={errorMessage}
          style={styles.errorIcon}
          children={<Icon color={'orange'} name="warning" size={30} />}
        />
      )}
    </View>
  );
};
const GenericMaskInput = ({
  iconName,
  onBlur,
  onChangeText,
  value,
  secureTextEntry,
  placeholder,
  keyboardType,
  errorMessage,
}: TextInputType) => {
  const theme = useSelector(
    (state: RootState) => state.persistedReducer.theme.theme,
  );
  const themeColors = getThemeColor(theme);
  return (
    <View style={styles.inputContainer}>
      <Icon
        name={iconName}
        size={25}
        color={themeColors.titleDefault}
        style={styles.icon}
      />
      <MaskInput
        onBlur={onBlur}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={secureTextEntry}
        style={[
          styles.input,
          {
            borderColor: themeColors.titleDefault,
            color: themeColors.titleDefault,
          },
        ]}
        placeholder={placeholder}
        keyboardType={keyboardType}
        placeholderTextColor={themeColors.placeholder}
        mask={phoneMask}
      />
      {errorMessage && (
        <Tooltip
          content={errorMessage}
          style={styles.errorIcon}
          children={<Icon color={'orange'} name="warning" size={30} />}
        />
      )}
    </View>
  );
};

export {GenericTextInput, GenericMaskInput};
