import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import { DARK_ICON } from '../../assets/const';
import { renderAccessibilityLabel } from '../../const/utilMethods';
import { DashboardHeaderStyles } from './DashboardHeaderStyles';

const DashboardHeader = ({
  theme,
  customHeaderContainer,
  customHeaderTitleStyle,
  headerTitle,
  rightButtonEnable,
  rightButtonOnClick,
  customRightBtnContainer,
}) => {
  const styles = DashboardHeaderStyles(theme);
  return (
    <View style={[styles.headerContainer, customHeaderContainer]}>
      {headerTitle ? (
        <View>
          <Text numberOfLines={1} style={[styles.headerTitleStyle, customHeaderTitleStyle]}>
            {headerTitle ?? ''}
          </Text>
        </View>
      ) : null}
      {rightButtonEnable && (
        <TouchableOpacity onPress={rightButtonOnClick} style={[styles.rightButtonStyle, customRightBtnContainer]}>
        <Image style={styles.derkIcon} source={DARK_ICON} />
        </TouchableOpacity>
      )}
    </View>
  );
};



DashboardHeader.propTypes = {
  theme: PropTypes.object,
  customHeaderContainer: PropTypes.object,
  customHeaderTitleStyle: PropTypes.object,
  headerTitle: PropTypes.string,
  rightButtonEnable: PropTypes.bool,
  rightButtonOnClick: PropTypes.func,
  customRightBtnContainer: PropTypes.object,
};

export default DashboardHeader;
