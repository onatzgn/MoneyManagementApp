import React, {ReactNode} from 'react';
import {View, Modal as RNModal} from 'react-native';
import {styles} from './Modal.style';
import {useSelector} from 'react-redux';
import {RootState} from '@redux/Store';
import {getThemeColor} from '@utils/Color';

interface ModalType {
  children: ReactNode;
  visible: boolean;
  onClose: () => void;
}
export const Modal = ({children, visible, onClose}: ModalType) => {
  const theme = useSelector(
    (state: RootState) => state.persistedReducer.theme.theme,
  );
  const themeColors = getThemeColor(theme);

  return (
    <View style={styles.centeredView}>
      <RNModal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={onClose}>
        <View style={styles.centeredView}>
          <View
            style={[
              styles.modalView,
              {backgroundColor: themeColors.background},
            ]}>
            {children}
          </View>
        </View>
      </RNModal>
    </View>
  );
};
