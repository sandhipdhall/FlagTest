import React from 'react';
import { Modal, View, Pressable, KeyboardAvoidingView, Platform } from 'react-native';
import PropTypes from 'prop-types';
import { BottomModalStyles } from './BottomModalStyles';
const BottomModal = ({
  theme,
  visible,
  children,
  onClose,
  animationType = 'slide',
  isKeyboardAvoidingShown = false,
  customModalStyle,
  customModalContainerStyle,
}) => {
  const { opacityViewStyle, modalContainer, modalStyle, flexStyle } = BottomModalStyles(theme);
  const renderBottomModal = () => {
    return (
      <View style={[modalContainer, customModalContainerStyle]}>
        <Pressable style={opacityViewStyle} onPress={onClose} />
        <View style={[modalStyle, customModalStyle]}>{children}</View>
      </View>
    );
  };
  return (
    <Modal animationType={animationType} transparent={true} visible={visible}>
      {isKeyboardAvoidingShown ? (
        <KeyboardAvoidingView
          keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -500}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={flexStyle}>
          {renderBottomModal()}
        </KeyboardAvoidingView>
      ) : (
        renderBottomModal()
      )}
    </Modal>
  );
};
BottomModal.propTypes = {
  theme: PropTypes.object,
  visible: PropTypes.bool,
  children: PropTypes.any,
  animationType: PropTypes.string,
  onClose: PropTypes.func,
  isKeyboardAvoidingShown: PropTypes.bool,
  customModalStyle: PropTypes.object,
  customModalContainerStyle: PropTypes.object,
};
export default BottomModal;
