import React, {ReactNode} from 'react';
import {useState} from 'react';
import {View, Modal as RNModal, Pressable} from 'react-native';
import {styles} from './Modal.style';
import {useSelector} from 'react-redux';
import {RootState} from '@redux/Store';
import {getThemeColor} from '@utils/Color';

export interface ModalType {
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
        animationType="fade"
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
