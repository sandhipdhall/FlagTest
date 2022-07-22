import React from 'react';
import { View, TextInput, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { useTheme } from '../../theme/theme';
import InputTextStyles from './InputTextStyles';

const InputText = props => {
  const theme = useTheme();
  const styles = InputTextStyles(theme);
  const {
    textContentType,
    secureTextEntry,
    textValue,
    keyboardType,
    placeholder,
    maxLength,
    editable,
    multiline,
    placeholderTextColor,
    numberOfLines,
    returnKeyType,
    customTextInputCont,
    customTextInputStyle,
    customPlaceholderStyle,
    isError,
    errorMessage,
    errorIcon,
    customErrorMessageStyle,
    parentStyle,
    onChangeText,
    title,
    secondaryTitle,
    customTitleTextStyle,
    customSecondaryTitleStyle,
    rightIconVisible,
    rightIcon,
    onRightBtnPress,
    customPointerEvents,
    ...rest
  } = props;

  function renderTitle() {
    return (
      <View style={styles.titleContainer}>
        {title && <Text style={[styles.titleTextStyle, customTitleTextStyle]}>{title}</Text>}
        {secondaryTitle && <Text style={[styles.secondaryTitleStyle, customSecondaryTitleStyle]}>{secondaryTitle}</Text>}
      </View>
    );
  }

  function renderInputText() {
    let inputViewStyle = styles.textInputContainer;
    if (isError) {
      inputViewStyle = {
        ...styles.textInputContainer,
        borderColor: theme.textColor.errorBorderColor,
      };
    }

    return (
      <View style={[inputViewStyle, customTextInputCont]} pointerEvents={customPointerEvents || 'auto'}>
         {rightIconVisible ? (
          <TouchableOpacity
            onPress={() => {
              if (onRightBtnPress) {
                onRightBtnPress();
              }
            }}>
            <Image style={styles.rightIconStyle} source={rightIcon ? rightIcon : EYE_ICON} />
          </TouchableOpacity>
        ) : null}
        <TextInput
          textContentType={textContentType || 'none'}
          secureTextEntry={secureTextEntry || false}
          value={textValue}
          keyboardType={keyboardType || 'default'}
          placeholder={placeholder || ''}
          maxLength={maxLength || 50}
          editable={editable}
          multiline={multiline}
          placeholderTextColor={placeholderTextColor ? placeholderTextColor : theme.textColor.secondary}
          numberOfLines={numberOfLines || null}
          returnKeyType={returnKeyType}
          onChangeText={text => {
            if (onChangeText) {
              onChangeText(text);
            }
          }}
          style={
            textValue?.length > 0 ? [styles.textInputStyle, customTextInputStyle] : [styles.placeHolderTextStyle, customPlaceholderStyle]
          }
          {...rest}
        />
       
      </View>
    );
  }

  return (
    <View style={parentStyle}>
      {title && renderTitle()}
      {renderInputText()}
    </View>
  );
};

InputText.propTypes = {
  textContentType: PropTypes.any,
  secureTextEntry: PropTypes.any,
  textValue: PropTypes.string,
  keyboardType: PropTypes.string,
  placeholder: PropTypes.any,
  maxLength: PropTypes.number,
  editable: PropTypes.bool,
  multiline: PropTypes.bool,
  placeholderTextColor: PropTypes.any,
  numberOfLines: PropTypes.number,
  returnKeyType: PropTypes.string,
  customTextInputCont: PropTypes.object,
  customTextInputStyle: PropTypes.object,
  customPlaceholderStyle: PropTypes.object,
  isError: PropTypes.bool,
  errorMessage: PropTypes.any,
  errorIcon: PropTypes.any,
  customErrorMessageStyle: PropTypes.object,
  parentStyle: PropTypes.object,
  onChangeText: PropTypes.any,
  title: PropTypes.string,
  secondaryTitle: PropTypes.string,
  customTitleTextStyle: PropTypes.object,
  customSecondaryTitleStyle: PropTypes.object,
  rightIconVisible: PropTypes.bool,
  rightIcon: PropTypes.any,
  onRightBtnPress: PropTypes.func,
  customPointerEvents: PropTypes.string,
};

InputText.defaultProps = {
  editable: true,
  returnKeyType: 'done',
  multiline: false,
};

export default InputText;
